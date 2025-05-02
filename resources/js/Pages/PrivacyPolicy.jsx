import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";

function PrivacyPolicy() {
    return (
        <GuestLayout>
            <div class="flex items-center justify-center my-12">
                <div class="min-h-[450px]">
                    <h1 class="text-3xl font-bold text-center mb-8 text-[#ff3131] bg-clip-text">
                        Privacy Policy
                    </h1>
                    <div class="max-w-6xl w-full mx-auto bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-8 border border-black/10 mt-10">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nostrum adipisci quia fugiat et voluptatem
                            ullam! Velit eius doloribus recusandae error
                            architecto voluptas non dolores, reiciendis ducimus,
                            rem dicta quod perferendis.
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}

export default PrivacyPolicy;
