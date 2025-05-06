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
use Illuminate\Support\Facades\DB;


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
        'created_at',
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
    public function getUserProfileList($name = '')
    {
        return User::with(
            'userPersonalDetail:id,user_id,dob,marital_status',
            'userEducationDetail:id,user_id,occupation',
            'userImages'
        )
            ->where('users.name', 'LIKE', '%' . $name . '%')
            ->where('users.status', Data::ENABLE)
            ->orderBy('users.id', 'desc')
            ->get();
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
                        ['users.status', '=', Data::ENABLE],
                        ['users.id', '=', $id]
                    ]
            )->get();
    }

    /**
     * Get latest 10 Active profile list
     *
     * @return array
     */
    public function getLatestUserProfile()
    {
        $users = User::with('userImages')
            ->where('users.status', Data::ENABLE)
            ->orderBy('users.id', 'desc')
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
