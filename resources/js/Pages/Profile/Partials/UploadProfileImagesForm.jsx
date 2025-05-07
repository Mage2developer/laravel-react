import {useForm} from "@inertiajs/react";

export default function UploadProfileImagesForm({ user, className = '' }) {
    const {data, setData, patch, errors, processing, recentlySuccessful} =
        useForm({
            image_path: user.image_path
        });

    const uploadProfileImages = (e) => {
        e.preventDefault();

        console.log("upload profile images");
    };

    return (
        <section className={className}>
            <form onSubmit={uploadProfileImages} className="mt-6 space-y-6">

            </form>
        </section>
    );
}
