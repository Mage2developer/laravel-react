import { Button } from "@/Components/Button";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import ReCAPTCHA from "react-google-recaptcha";
import {useState} from "react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const [captchaToken, setCaptchaToken] = useState(null);

    const [captchaError, setcaptchaError] = useState(null);

    const submit = (e) => {
        e.preventDefault();

        if (!captchaToken) {
            e.preventDefault();
            setcaptchaError("Invalid Captcha !");
            //alert('Please complete the CAPTCHA');
            return;
        }

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password"/>
                <div className="min-h-[450px] flex items-center justify-center my-2 md:my-10 p-2 md:p-0">
                    <div
                        className="max-w-full w-full sm:max-w-xl mx-auto backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-8 border border-black/10 bg-white/5">

                        <h1 className="text-3xl font-bold text-center mb-6 text-[#ff3131] bg-clip-text">
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

                            <ReCAPTCHA
                                sitekey="6LdBejMrAAAAACUAes7oSakKuH7s3M3amBvw8LiT"
                                onChange={(token) => setCaptchaToken(token)}
                                onExpired={() => setCaptchaToken(null)}
                            />
                            <InputError
                                message={captchaError}
                                className="mt-2"
                            />

                            <div className="mt-6 flex justify-end">
                                <Button
                                    className="w-full justify-center"
                                    disabled={processing}
                                >
                                    Send Email Password Reset Link
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
        </GuestLayout>
);
}
