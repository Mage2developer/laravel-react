<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Http\Helper\Data;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
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
            $sex = request()->sex ?: 0;
            $dob = request()->dob ?: '';
            $education = request()->education ?: '';
            $occupation = request()->occupation ?: '';
            $mobile_number = request()->mobile_number ?: '';
            $father_name = request()->father_name ?: '';
            $mother_name = request()->mother_name ?: '';
            $marital_status = request()->marital_status ?: 0;
            $personal_income = request()->personal_income ?: '';

            $user->userContactDetail()->create([
                'mobile_number' => $mobile_number,
                'father_mobile_number' => '',
                'native_address' => '',
                'foreign_address' => '',
                'address_line_1' => '',
                'address_line_2' => '',
                'city_id' => 0,
                'state_id' => 0,
                'country_id' => 0
            ]);

            $user->userEducationDetail()->create([
                'education' => $education,
                'occupation' => $occupation,
                'personal_income' => $personal_income,
                'family_income' => ''
            ]);

            $user->userFamilyDetail()->create([
                'father_name' => $father_name,
                'mother_name' => $mother_name,
                'brother_name' => '',
                'brother_in_laws' => '',
                'sister_name' => '',
                'sister_in_laws' => ''
            ]);
            $user->userPersonalDetail()->create([
                'dob' => $dob,
                'marital_status' => $marital_status,
                'height' => '',
                'weight' => '',
                'manglik' => 0,
                'have_specs' => 0,
                'hobby' => '',
                'sex' => $sex
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

        $query->withAllDetails();

        return $query->get();
    }

    /**
     * @param $query
     * @return mixed
     */
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
                    //['users.status', '=', Data::ENABLE],
                    //['users.is_deleted', '=', Data::DISABLE],
                    ['users.role', '=', Data::USER_SLUG]
                ]
            )->first();
    }

    /**
     * @param $id
     * @return User|Collection|Model|null
     */
    public function getUserProfileByIdFromAdmin($id)
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
