import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            <div className="min-h-[450px] flex items-center justify-center my-12">
                <div className=" w-full max-w-md mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg mt-12 text-gray-800 dark:text-white">
                    <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        Forgot Password
                    </h1>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 text-center">
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </p>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400 text-center">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="Email Address"
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <PrimaryButton
                                className="w-full justify-center"
                                disabled={processing}
                            >
                                Email Password Reset Link
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
