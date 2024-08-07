import React, { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import { router, usePage } from "@inertiajs/react";
import { Alert, AlertQuestion } from "@/Components/Alert";
import Modal from "@/Components/CreateModal";
import Button from "@/Components/PrimaryButton";
import InputForm from "@/Components/InputForm";

function Guru() {
    const { props } = usePage();
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertDelete, setShowAlertDelete] = useState(false);
    const [id, setId] = useState(null);
    const [message, setMessage] = useState("");
    const [values, setValues] = useState({
        nama_guru: "",
        mapel_ajar: "",
        no_whatsapp: "",
    });

    useEffect(() => {
        // Check for flash messages from Laravel
        if (props.flash) {
            if (props.flash.success) {
                setMessage(props.flash.success);
                
                setShowAlert(true);
            } else if (props.flash.error) {
                setMessage(props.flash.error);
                setShowAlert(true);
            }
        }
    }, [props.flash]);

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    const handleOutsideClick = (event) => {
        if (event.target.classList.contains("modal-overlay")) {
            setShowModal(false);
            setShowAlert(false);
            setShowAlertDelete(false);
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();
        router.post("/guru", values, {
            onSuccess: () => {
                setShowModal(false);
                setMessage("Data guru berhasil ditambahkan");
                setShowAlert(true);
                setValues({
                    nama_guru: "",
                    mapel_ajar: "",
                    no_whatsapp: "",
                });
            },
            onError: () => {
                setShowModal(true);
                setMessage("Terjadi kesalahan saat menambahkan data guru");
                setShowAlert(true);
            },
        });
    }

    async function handleDelete() {
        if (id) {
            router.delete(`/guru/${id}`, {
                onSuccess: () => {
                    setShowAlertDelete(false);
                    setShowAlert(true);
                    setMessage("Data guru berhasil dihapus");
                    setId(null);
                },
                onError: () => {
                    setShowAlertDelete(false);
                    setShowAlert(true);
                    setMessage("Terjadi kesalahan saat menghapus data guru");
                },
            });
        }
    }

    function alertDelete(id) {
        setId(id);
        setMessage("dihapus");
        setShowAlertDelete(true);
    }

    const guru = props.guru;

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 pb-10 p-3">
                <div className="mx-auto max-w-screen-xl px-4">
                    <h1 className="text-center text-2xl font-bold my-4 mb-9">
                        Data Guru SMK N 1 Kebumen
                    </h1>
                    <div className="bg-white shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center justify-between p-4 space-y-3 md:space-y-0">
                            <form className="w-full md:w-1/2">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-gray-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2"
                                        placeholder="Search"
                                        required=""
                                    />
                                </div>
                            </form>
                            <div className="w-full md:w-auto">
                                <Button
                                    onClick={() => setShowModal(true)}
                                    className="w-full flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800"
                                >
                                    Add teacher
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-6 px-4 p-3">
                    <div className="w-full overflow-x-auto rounded-md">
                        <table className="min-w-full text-sm text-center">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                                <tr>
                                    <th className=" ">No</th>
                                    <th className=" ">Nama</th>
                                    <th className=" ">Mapel Ajar</th>
                                    <th className=" ">No WhatsApp</th>
                                    <th className="py-4">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-100">
                                {guru.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-3 py-4">
                                            {index + 1}
                                        </td>
                                        <td className="px-3 py-4">
                                            {item.nama_guru}
                                        </td>
                                        <td className="px-3 py-4">
                                            {item.mapel_ajar}
                                        </td>
                                        <td className="px-3 py-4">
                                            {item.no_whatsapp}
                                        </td>
                                        <td className="py-2 flex justify-center gap-2">
                                            <Button
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-1.5"
                                                onClick={() => {}}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                className="bg-red-500 hover:bg-red-600 text-white px-5 py-1.5"
                                                onClick={() =>
                                                    alertDelete(item.id_guru)
                                                }
                                            >
                                                Hapus
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {showModal && (
                <Modal
                    title="Tambah Data Guru"
                    onClose={() => setShowModal(false)}
                    handleOutsideClick={handleOutsideClick}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    values={values}
                >
                    <InputForm
                        label="Nama Guru"
                        id="nama_guru"
                        value={values.nama_guru}
                        onChange={handleChange}
                    />
                          <InputForm
                        label="Mata Pelajaran"
                        id="mapel_ajar"
                        value={values.mapel_ajar}
                        onChange={handleChange}
                    />
                          <InputForm
                        label="Mata Pelajaran"
                        id="mapel_ajar"
                        value={values.mapel_ajar}
                        onChange={handleChange}
                    />
                    <InputForm
                        label="Mapel Ajar"
                        id="mapel_ajar"
                        value={values.mapel_ajar}
                        onChange={handleChange}
                    />
                    <InputForm
                        label="No WhatsApp"
                        id="no_whatsapp"
                        value={values.no_whatsapp}
                        onChange={handleChange}
                    />
                </Modal>
            )}

            {showAlert && (
                <Alert
                    showModal={showAlert}
                    setShowModal={setShowAlert}
                    handleOutsideClick={handleOutsideClick}
                >
                    {message}
                </Alert>
            )}

            {showAlertDelete && (
                <AlertQuestion
                    showModal={showAlertDelete}
                    setShowModal={setShowAlertDelete}
                    handleOutsideClick={handleOutsideClick}
                    onNoClick={() => setShowAlertDelete(false)}
                    onYesClick={handleDelete}
                >
                    Apakah Anda yakin ingin menghapus data ini?
                </AlertQuestion>
            )}
        </>
    );
}

export default Guru;
