<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\User;

class Image extends Model
{
    use HasFactory, Notifiable, HasApiTokens;

    public $timestamps = false;

    /**
     * @var string
     */
    protected $table = 'user_images';

    /**
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'image_path'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getImagesCountByUserId($id)
    {
        return Image::where('user_id', $id)->count();
    }
}
