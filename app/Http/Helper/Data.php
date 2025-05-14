<?php
namespace App\Http\Helper;


use Illuminate\Support\Facades\Auth;

class Data
{
     const ENABLE = 1;

     const DISABLE = 0;

     const USER_PERSONAL_DETAIL_TABLE = 'userPersonalDetail';

    const USER_FAMILY_DETAIL_TABLE = 'userFamilyDetail';

    const USER_EDUCATION_DETAIL_TABLE = 'userEducationDetail';

    const USER_CONTACT_DETAIL_TABLE = 'userContactDetail';

    const USER_IMAGES_TABLE = 'userImages';

     const USER_TABLE_NAME = 'users';

     const STATUS_COLUMN_NAME = 'status';

     const USER_ID_COLUMN_NAME = 'id';

     const USER_NAME_COLUMN_NAME = 'name';

     const USER_ID_FOREIGN_KEY = 'user_id';

     const MAX_IMAGE_UPLOAD = 5;

     const LATEST_PROFILE_UMBER = 10;

     const USER_SLUG = 'user';

     const ADMIN_SLUG = 'admin';

     const DESC = 'desc';

}
