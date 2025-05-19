<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Http\Helper\Data;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'email_verified_at',
        //'created_at',
        'updated_at'
    ];

    /**
     * @return void
     */
    protected static function booted()
    {
        static::created(function ($user) {
            $user->userContactDetail()->create([
                                                   'mobile_number' => '',
                                                   'father_mobile_number' => '',
                                                   'native_city' => '',
                                                   'current_address' => ''
                                               ]);

            $user->userEducationDetail()->create([
                                                     'education' => '',
                                                     'occupation' => '',
                                                     'personal_income' => '',
                                                     'family_income' => ''
                                                 ]);

            $user->userFamilyDetail()->create([
                                                  'father_name' => '',
                                                  'mother_name' => '',
                                                  'brother_name' => '',
                                                  'brother_in_laws' => '',
                                                  'sister_name' => '',
                                                  'sister_in_laws' => ''
                                              ]);
            $user->userPersonalDetail()->create([
                                                    'dob' => '',
                                                    'marital_status' => 0,
                                                    'height' => '',
                                                    'weight' => '',
                                                    'manglik' => 0,
                                                    'have_specs' => 0,
                                                    'hobby' => '',
                                                    'sex' => 0
                                                ]);
        });
    }

    public function userContactDetail()
    {
        return $this->hasOne(UserContactDetail::class);
    }

    public function userEducationDetail()
    {
        return $this->hasOne(UserEducationDetail::class);
    }

    public function userFamilyDetail()
    {
        return $this->hasOne(UserFamilyDetail::class);
    }

    public function userPersonalDetail()
    {
        return $this->hasOne(UserPersonalDetail::class);
    }

    public function userImages()
    {
        return $this->hasMany(Image::class);
    }

    /**
     * @return Collection
     */
    public function getUserProfileList($filters = [])
    {
        $query = User::query();

        if ($filters) {
            foreach ($filters as $filter) {
                switch ($filter['type']) {
                    case 'sex':
                        $query->whereSex($filter['value']);
                        break;
                    case 'age_between':
                        $query->whereAgeBetween($filter['value']['ageFrom'], $filter['value']['ageTo']);
                        break;
                    case 'personal_income':
                        $query->wherePersonalIncome($filter['value']);
                        break;
                }
            }
        }

        $query->withAllDetails();

        return $query->get();
    }

    public function scopeWhereAge($query, $age, $operator = '=')
    {
        // Use a subquery to calculate age from the date of birth.  This is
        // more efficient and accurate than trying to do date calculations
        // directly in the main query.  This approach works for all database systems.
        return $query->whereHas('userPersonalDetail', function ($subQuery) use ($age, $operator) {
            $subQuery->select(DB::raw('TIMESTAMPDIFF(YEAR, dob, CURDATE()) as age'))
                ->having('age', $operator, $age);
        });
    }

    /**
     * Scope a query to filter users by age range.
     *
     * @param Builder $query
     * @param int $minAge
     * @param int $maxAge
     * @return Builder
     */
    public function scopeWhereAgeBetween($query, $minAge, $maxAge)
    {
        return $query->whereHas('userPersonalDetail', function ($subQuery) use ($minAge, $maxAge) {
            $subQuery->select(DB::raw('TIMESTAMPDIFF(YEAR, dob, CURDATE()) as age'))
                ->having('age', '>=', $minAge)
                ->having('age', '<=', $maxAge);
        });
    }

    /**
     * Scope a query to filter users by date of birth.
     *
     * @param Builder $query
     * @param string $dob The date of birth to filter by (e.g., '2000-01-01').
     * @param string $operator The operator for the comparison (=, <, >, <=, >=)
     * @return Builder
     */
    public function scopeWhereDob($query, $dob, $operator = '=')
    {
        return $query->whereHas('userPersonalDetail', function ($subQuery) use ($dob, $operator) {
            $subQuery->where('dob', $operator, $dob);
        });
    }

    /**
     * Scope a query to filter users by sex.
     *
     * @param Builder $query
     * @param string $sex The sex to filter by.
     * @return Builder
     */
    public function scopeWhereSex($query, $sex)
    {
        return $query->whereHas('userPersonalDetail', function ($subQuery) use ($sex) {
            $subQuery->where('sex', $sex);
        });
    }

    public function scopeWhereName($query, $name)
    {
        return $query->where('name', 'like', '%' . $name . '%');
    }

    public function scopeWherePersonalIncome($query, $dob, $operator = '>=')
    {
        return $query->whereHas('userEducationDetail', function ($subQuery) use ($dob, $operator) {
            $subQuery->where('personal_income', $operator, $dob);
        });
    }

    public function scopeWithAllDetails($query)
    {
        return $query->with([
                                'userPersonalDetail:id,user_id,dob,marital_status,sex',
                                'userEducationDetail:id,user_id,occupation,personal_income',
                                'userImages'
                            ])
            ->where('users.status', Data::ENABLE)
            ->where('users.is_deleted', Data::DISABLE)
            ->where('users.role', Data::USER_SLUG)
            ->orderBy('users.id', Data::DESC);
    }

    /**
     * @param $id
     * @return User|Collection|Model|null
     */
    public function getUserProfileById($id)
    {
        return User::with(
            'userPersonalDetail',
            'userFamilyDetail',
            'userEducationDetail',
            'userContactDetail',
            'userImages'
        )
            ->where([
                        ['users.id', '=', $id],
                        ['users.status', '=', Data::ENABLE],
                        ['users.is_deleted', '=', Data::DISABLE],
                        ['users.role', '=', Data::USER_SLUG]
                    ]
            )->first();
    }

    /**
     * Get latest 10 Active profile list
     *
     * @return array
     */
    public function getLatestUserProfile()
    {
        $users = User::with(
            'userPersonalDetail:id,user_id,dob,marital_status',
            'userEducationDetail:id,user_id,occupation',
            'userImages'
        )
            ->where([
                        ['users.status', '=', Data::ENABLE],
                        ['users.is_deleted', '=', Data::DISABLE],
                        ['users.role', '=', Data::USER_SLUG]
                    ]
            )
            ->orderBy('users.id', Data::DESC)
            ->limit(Data::LATEST_PROFILE_UMBER)
            ->get();

        return $users->toArray();
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
