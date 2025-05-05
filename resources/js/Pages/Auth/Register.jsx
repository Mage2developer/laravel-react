import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/Components/Button";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword);
    const toggleConfirmPassword = () =>
        setShowConfirmPassword(!showConfirmPassword);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="min-h-[450px] flex items-center justify-center my-16">
                <div className="max-w-md w-full mx-auto backdrop-blur-md rounded-xl shadow-lg p-8 border border-black/10 bg-white/5">
                    <h1 className="text-3xl font-bold text-center mb-8 text-[#ff3131] bg-clip-text">
                        Register
                    </h1>

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="name" value="Name" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
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
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
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

                        <div className="relative">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />
                            <TextInput
                                id="password_confirmation"
                                type={showConfirmPassword ? "text" : "password"}
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full pr-10"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPassword}
                                className="absolute top-9 right-3 text-gray-400 hover:text-gray-200 focus:outline-none"
                                tabIndex={-1}
                            >
                                {showConfirmPassword ? (
                                    <FiEyeOff className="hover:text-[#ff3131]" />
                                ) : (
                                    <FiEye className="hover:text-[#ff3131]" />
                                )}
                            </button>
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="block sm:flex items-center justify-between">
                            <div>
                                <Link
                                    href={route("login")}
                                    className="text-base text-gray-800 hover:text-red-500 transition"
                                >
                                    Already registered?
                                </Link>
                            </div>
                            <div className="">
                                <Button
                                    className="w-full sm:w-auto mt-5 sm:mt-0"
                                    disabled={processing}
                                >
                                    Register
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

// import InputError from "@/Components/InputError";
// import InputLabel from "@/Components/InputLabel";
// import PrimaryButton from "@/Components/PrimaryButton";
// import TextInput from "@/Components/TextInput";
// import GuestLayout from "@/Layouts/GuestLayout";
// import { Head, Link, useForm } from "@inertiajs/react";

// export default function Register() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         name: "",
//         email: "",
//         password: "",
//         password_confirmation: "",
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route("register"), {
//             onFinish: () => reset("password", "password_confirmation"),
//         });
//     };

//     return (
//         <GuestLayout>
//             <Head title="Register" />
//             <div className="flex items-center justify-center py-12">
//                 <form onSubmit={submit}>
//                     <div>
//                         <InputLabel htmlFor="name" value="Name" />

//                         <TextInput
//                             id="name"
//                             name="name"
//                             value={data.name}
//                             className="mt-1 block w-full"
//                             autoComplete="name"
//                             isFocused={true}
//                             onChange={(e) => setData("name", e.target.value)}
//                             required
//                         />

//                         <InputError message={errors.name} className="mt-2" />
//                     </div>

//                     <div className="mt-4">
//                         <InputLabel htmlFor="email" value="Email" />

//                         <TextInput
//                             id="email"
//                             type="email"
//                             name="email"
//                             value={data.email}
//                             className="mt-1 block w-full"
//                             autoComplete="username"
//                             onChange={(e) => setData("email", e.target.value)}
//                             required
//                         />

//                         <InputError message={errors.email} className="mt-2" />
//                     </div>

//                     <div className="mt-4">
//                         <InputLabel htmlFor="password" value="Password" />

//                         <TextInput
//                             id="password"
//                             type="password"
//                             name="password"
//                             value={data.password}
//                             className="mt-1 block w-full"
//                             autoComplete="new-password"
//                             onChange={(e) =>
//                                 setData("password", e.target.value)
//                             }
//                             required
//                         />

//                         <InputError
//                             message={errors.password}
//                             className="mt-2"
//                         />
//                     </div>

//                     <div className="mt-4">
//                         <InputLabel
//                             htmlFor="password_confirmation"
//                             value="Confirm Password"
//                         />

//                         <TextInput
//                             id="password_confirmation"
//                             type="password"
//                             name="password_confirmation"
//                             value={data.password_confirmation}
//                             className="mt-1 block w-full"
//                             autoComplete="new-password"
//                             onChange={(e) =>
//                                 setData("password_confirmation", e.target.value)
//                             }
//                             required
//                         />

//                         <InputError
//                             message={errors.password_confirmation}
//                             className="mt-2"
//                         />
//                     </div>

//                     <div className="mt-4 flex items-center justify-end">
//                         <Link
//                             href={route("login")}
//                             className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                         >
//                             Already registered?
//                         </Link>

//                         <PrimaryButton className="ms-4" disabled={processing}>
//                             Register
//                         </PrimaryButton>
//                     </div>
//                 </form>
//             </div>
//         </GuestLayout>
//     );
// }
