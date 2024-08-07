import React, { useState, useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { Alert } from "@/Components/Alert";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [requestStatus, setRequestStatus] = useState("");

    useEffect(() => {
        if (status) {
            setShowModal(true);
            setRequestStatus("success");
        }
    }, [status]);

    const submit = (e) => {
        e.preventDefault();

        if (!data.email) {
            
            reset('email');
            errors.email = "Email is required";
            return;
        }

        setIsLoading(true);
        post(route("password.email"))
            .then(() => {
                setIsLoading(false);
                setShowModal(true);
                setRequestStatus("success");
            })
            .catch(() => {
                setIsLoading(false);
                setShowModal(true);
                setRequestStatus("error");
            });
    };

    const handleOutsideClick = (event) => {
        if (event.target.classList.contains("modal-overlay")) {
            setShowModal(false);
            setIsLoading(false);
        }
    };
    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            <h2 className="my-3 text-center text-2xl font-bold text-gray-900">
                Forgot your password?
                <p className="text-base font-medium"> No problem.</p>
            </h2>
            <div className="text-sm text-center text-gray-600 px-3">
                Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
            </div>

            <form onSubmit={submit} className="p-5">
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData("email", e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton disabled={processing || isLoading}>
                        {isLoading ? "Loading..." : "Email Password Reset Link"}
                    </PrimaryButton>
                </div>
            </form>

            <Alert showModal={showModal} setShowModal={setShowModal} handleOutsideClick={handleOutsideClick}>
                {requestStatus === "success" ? "Successfully sent password reset email." : "Failed to send password reset email."}
            </Alert>
        </GuestLayout>
    );
}
