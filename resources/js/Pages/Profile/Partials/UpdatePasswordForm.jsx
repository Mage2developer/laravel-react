import {useRef, useState} from 'react';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import {FiEye, FiEyeOff} from "react-icons/fi";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const toggleVisibility = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-xl font-bold">Update Password</h2>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div className="relative">
                    <InputLabel
                        htmlFor="current_password"
                        value="Current Password"
                    />

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type={showPassword.current ? "text" : "password"}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                    />
                    <button
                        type="button"
                        onClick={() => toggleVisibility("current")}
                        className="absolute top-9 right-3 text-gray-400 hover:text-gray-200 focus:outline-none"
                        tabIndex={-1}
                    >
                        {showPassword.current ? (
                            <FiEyeOff className="hover:text-[#ff3131]"/>
                        ) : (
                            <FiEye className="hover:text-[#ff3131]"/>
                        )}
                    </button>

                    <InputError
                        message={errors.current_password}
                        className="mt-2"
                    />
                </div>

                <div className="relative">
                    <InputLabel htmlFor="password" value="New Password"/>

                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type={showPassword.new ? "text" : "password"}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />
                    <button
                        type="button"
                        onClick={() => toggleVisibility("new")}
                        className="absolute top-9 right-3 text-gray-400 hover:text-gray-200 focus:outline-none"
                        tabIndex={-1}
                    >
                        {showPassword.new ? (
                            <FiEyeOff className="hover:text-[#ff3131]"/>
                        ) : (
                            <FiEye className="hover:text-[#ff3131]"/>
                        )}
                    </button>

                    <InputError message={errors.password} className="mt-2"/>
                </div>

                <div className="relative">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        type={showPassword.confirm ? "text" : "password"}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />
                    <button
                        type="button"
                        onClick={() => toggleVisibility("confirm")}
                        className="absolute top-9 right-3 text-gray-400 hover:text-gray-200 focus:outline-none"
                        tabIndex={-1}
                    >
                        {showPassword.confirm ? (
                            <FiEyeOff className="hover:text-[#ff3131]"/>
                        ) : (
                            <FiEye className="hover:text-[#ff3131]"/>
                        )}
                    </button>

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-green-600">
                            Your password has been changed successfully.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
