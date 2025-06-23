<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class City extends Model
{
    use HasFactory, Notifiable, HasApiTokens;

    public $timestamps = false;

    protected $fillable = ['state_id', 'city_name'];

    public function state(): BelongsTo
    {
        return $this->belongsTo(State::class);
    }
}
