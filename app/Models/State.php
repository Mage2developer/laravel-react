<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class State extends Model
{
    use HasFactory, Notifiable, HasApiTokens;

    public $timestamps = false;

    protected $fillable = ['country_id', 'state_name'];
}
