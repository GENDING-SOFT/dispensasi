import Navbar from "@/Components/Navbar";
import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";

function Guru() {
    const { props } = usePage();

    const [values, setValues] = useState({
        nama_guru: "",
        mapel_ajar: "",
        no_whatsapp: "",
    });

    function handleChange(e) {
        const key = e.target.id;

        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        router.post("/guru", values);
    }

    const guru = props.guru;
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center">
                <div className="container">
                    <h1 className="text-center text-2xl font-bold mb-10">
                        GURU
                    </h1>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>NAMA</th>
                                <th>MAPEL AJAR</th>
                                <th>NO WHATSAPP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {guru.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.nama_guru}</td>
                                    <td>{item.mapel_ajar}</td>
                                    <td>{item.no_whatsapp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <button
                onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                }
                href="/guru/create"
                className="btn btn-primary"
            >
                TAMBAH GURU
            </button>
            {/* <button data-modal-target="modal"
                            href="/guru/create"
                            className="btn btn-primary"
                        >
                            TAMBAH GURU
                        </button> */}

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form
                        className="flex flex-col font-bold w-full gap-2"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="nama_guru">Nama Guru</label>
                        <input
                            type="text"
                            id="nama_guru"
                            className="input input-bordered"
                            onChange={handleChange}
                            value={values.nama_guru}
                        />
                        {/* ERROR HANDLING */}
                        {props.errors.nama_guru ? (
                            <span className="text-red-500">
                                {props.errors.nama_guru}
                            </span>
                        ) : null}

                        <label htmlFor="mapel_ajar">Mapel Ajar</label>
                        <input
                            type="text"
                            id="mapel_ajar"
                            onChange={handleChange}
                            value={values.mapel_ajar}
                            className="input input-bordered"
                        />

                        {props.errors.mapel_ajar ? (
                            <span className="text-red-500">
                                {props.errors.mapel_ajar}
                            </span>
                        ) : null}

                        <label htmlFor="no_whatsapp">No Whatsapp</label>
                        <input
                            type="text"
                            id="no_whatsapp"
                            onChange={handleChange}
                            value={values.no_whatsapp}
                            className="input input-bordered"
                        />

                        {props.errors.no_whatsapp ? (
                            <span className="text-red-500">
                                {props.errors.no_whatsapp}
                            </span>
                        ) : null}

                        <button className="btn bg-green-500 text-white mt-10">
                            KIRIM
                        </button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <section className="bg-gray-50 p-3 sm:p-5">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
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
                                <button
                                    type="button"
                                    id="modalButton"
                                    data-modal-target="modal"
                                    data-modal-toggle="modal"
                                    className="w-full flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                                >
                                    Add teacher
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-6 mx-4 p-3">
    <div className="w-full overflow-x-auto">
        <table className="min-w-full text-sm text-center bg-gray-300">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                    <th className="px-2 py-4">No</th>
                    <th className="px-4 py-4">Nama</th>
                    <th className="px-4 py-4">Mapel Ajar</th>
                    <th className="px-4 py-4">No WhatsApp</th>
                    <th className="py-4">Aksi</th>
                </tr>
            </thead>
            <tbody className="bg-gray-100">
                {guru.map((item, index) => (
                    <tr key={index}>
                        <td className="px-3 py-4">{index + 1}</td>
                        <td className="px-3 py-4">{item.nama_guru}</td>
                        <td className="px-3 py-4">{item.mapel_ajar}</td>
                        <td className="px-3 py-4">{item.no_whatsapp}</td>
                        <td className="px-3 py-4 flex justify-center gap-2">
                            <Link
                                href="#"
                                className="font-medium text-white py-2  btn btn-warning hover:bg-yellow-600">
                                Edit
                            </Link>
                            <Link
                                href="#"
                                className="font-medium text-white py-2  btn btn-error hover:bg-red-600">
                                Hapus
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

            </section>
        </>
    );
}

export default Guru;
