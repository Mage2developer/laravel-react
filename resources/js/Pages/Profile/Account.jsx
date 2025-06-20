import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Account({mustVerifyEmail, status}) {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout>
            <Head title="My Account"/>

            <div className="py-4 px-2 sm:py-12 sm:px-0">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="border shadow-lg rounded-xl bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                            user={user}
                        />
                    </div>

                    <div className="border shadow-lg rounded-xl bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm className="max-w-xl"/>
                    </div>

                    <div className="border shadow-lg rounded-xl bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" user={user} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
