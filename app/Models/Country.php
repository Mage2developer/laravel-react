<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Country extends Model
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $fillable = ['country_name'];

    public function states(): HasMany
    {
        return $this->hasMany(State::class);
    }
}
