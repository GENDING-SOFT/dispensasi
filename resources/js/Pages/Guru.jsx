import Navbar from "@/Components/Navbar";
import { router, usePage } from "@inertiajs/react";
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

                    <div className="flex mb-5">
                        <button
                            onClick={() =>
                                document
                                    .getElementById("my_modal_4")
                                    .showModal()
                            }
                            href="/guru/create"
                            className="btn btn-primary"
                        >
                            TAMBAH GURU
                        </button>
                    </div>
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

            <dialog id="my_modal_4" className="modal">
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
        </>
    );
}

export default Guru;
