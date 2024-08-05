import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <h2 className="my-3 text-center text-2xl font-bold  text-gray-900">
                Sign in to your account
            </h2>
            <form onSubmit={submit} className="p-4">
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
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block my-4 flex justify-between text-sm font-medium">
                    <label className="ms-2">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-gray-800">Remember me</span>
                    </label>
                    <Link
                        href={route("password.request")}
                        className="text-blue-600 hover:text-blue-500"
                    >
                        Forgot your password?
                    </Link>
                </div>

                <div className="flex flex-col items-center  mt-4">
                    <PrimaryButton className="mb-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                    <div className="flex justify-center text-sm ">
                        <p className="me-2">Don't have an account?</p>
                        {canResetPassword && (
                            <Link
                                href={route("register")}
                                className="font-medium text-blue-600 hover:text-blue-500"
                            >
                                Register here
                            </Link>
                        )}
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
