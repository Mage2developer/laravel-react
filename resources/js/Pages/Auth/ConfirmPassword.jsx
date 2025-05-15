import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from "@/Components/Button";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password"/>

            <div className="min-h-[450px] flex items-center justify-center my-10">
                <div
                    className=" max-w-md w-full mx-auto backdrop-blur-md rounded-xl shadow-lg p-8 border border-black/10 bg-white/5">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 my-12">
                        Confirm Password
                    </h2>

                    <div className="mb-4 text-sm text-gray-600">
                        This is a secure area of the application. Please confirm your
                        password before continuing.
                    </div>

                    <form onSubmit={submit}>
                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password"/>

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2"/>
                        </div>

                        <div className="mt-4 flex items-center justify-end">
                            <Button className="ms-4" disabled={processing}>
                                Confirm
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
