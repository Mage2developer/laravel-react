import React from "react";
import {SocialIcon} from "react-social-icons";
import Setting from "@/Utils/Setting";

function FollowUs({label}) {
    return (
        <div className="mt-6 text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-[#ff3131]">
                {label}
            </h3>
            <div className="flex gap-2 justify-center sm:justify-start" >
                <SocialIcon network="facebook" url={Setting.FACEBOOK_ULR} target="_blank" style={{ height: '35px', width: '35px' }} />
                <SocialIcon network="instagram" url={Setting.INSTAGRAM_URL} target="_blank" style={{ height: '35px', width: '35px' }} />
                <SocialIcon network="youtube"  url={Setting.YOUTUBE_URL} target="_blank" style={{ height: '35px', width: '35px' }}  />
            </div>
        </div>
    );
}

export default FollowUs;
