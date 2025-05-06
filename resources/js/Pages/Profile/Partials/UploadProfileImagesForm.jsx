import {useForm, usePage} from "@inertiajs/react";

export default function UploadProfileImagesForm({ className = '' }) {
    const user = usePage().props.auth.user;

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
