<?php

namespace App\Events;

use Illuminate\Queue\SerializesModels;

class ContactEvent
{
    use SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(
        public $data
    ) {
    }
}
