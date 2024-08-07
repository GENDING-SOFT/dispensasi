import React from "react";
import FormInput from "./InputForm";
import Button from "./PrimaryButton";

function Modal({ title, onClose, handleSubmit, handleChange, values, errors }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center modal-overlay" onClick={onClose}>
            <div className="modal-box w-11/12 max-w-5xl bg-white p-6 rounded shadow" onClick={e => e.stopPropagation()}>
                <h1 className="text-center text-3xl font-bold labelModal">{title}</h1>
                <form className="flex flex-col font-bold w-full gap-2" onSubmit={handleSubmit}>
                    <FormInput
                        label="Nama Guru"
                        id="nama_guru"
                        value={values.nama_guru}
                        onChange={handleChange}
                        error={errors && errors.nama_guru }
                    />
              
                    <FormInput
                        label="No. Whatsapp"
                        id="no_whatsapp"
                        value={values.no_whatsapp}
                        onChange={handleChange}
                        error={errors && errors.no_whatsapp}
                    />

                    <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white mt-10">
                        TAMBAH
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Modal;
