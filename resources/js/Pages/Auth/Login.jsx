import { useState, useRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/Components/Button";
import ReCAPTCHA from 'react-google-recaptcha';
import Setting from "@/Utils/Setting";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);

    const recaptchaRef = useRef(null);

    const [captchaToken, setCaptchaToken] = useState(null);

    const [captchaError, setCaptchaError] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        const token = recaptchaRef.current.getValue();

        if (!token) {
            e.preventDefault();
            setCaptchaError("Invalid Captcha !");
            return;
        }

        post(route("login"), {
            onFinish: () => {
                reset("password");
                recaptchaRef.current.reset();
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className="min-h-[450px] flex items-center justify-center my-2 md:my-16 p-2 md:p-0">
                <div className="max-w-full w-full sm:max-w-xl mx-auto backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-8 border border-black/10 bg-white/5">
                    <h1 className="text-3xl font-bold text-center mb-8 text-[#ff3131] bg-clip-text">
                        Log In
                    </h1>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-500 text-center">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="relative">
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full pr-10"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute top-9 right-3 text-gray-400 hover:text-gray-200 focus:outline-none"
                                tabIndex={-1}
                            >
                                {showPassword ? (
                                    <FiEyeOff className="hover:text-[#ff3131]" />
                                ) : (
                                    <FiEye className="hover:text-[#ff3131]" />
                                )}
                            </button>
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="md:flex items-center justify-center sm:justify-between">
                            <label className="flex items-center mb-2 sm:mb-0">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                    className="checked:text-[#ff3131]"
                                />
                                <span className="ml-2 text-base text-gray-800">
                                    Remember me
                                </span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="text-base text-gray-800 hover:text-red-500 transition "
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>

                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={Setting.capatcha_v2_sitekey}
                            onChange={(captchaToken) => {
                                setCaptchaToken(captchaToken);
                                setCaptchaError(null);
                            }}
                            onExpired={() => {
                                setCaptchaToken(null);
                                recaptchaRef.current.reset();
                            }}
                        />
                        <InputError
                            message={captchaError}
                            className="mt-2"
                        />

                        <div className="flex justify-end">
                            <Button className="" disabled={processing}>
                                Log in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
