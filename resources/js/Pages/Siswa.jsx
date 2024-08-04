import Navbar from "@/Components/Navbar";
import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Select from "react-select";

function Siswa() {
    const { props } = usePage();
    const kelas = props.kelas;

    const [values, setValues] = useState({
        nis: "",
        id_kelas: "",
        nama_siswa: "",
    });

    function handleChange(e) {
        const key = e.target.id;

        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/siswa/store", values);
    }
    const optionKelas = kelas.map((item) => {
        return {
            value: item.id_kelas,
            label: item.nama_kelas,
        };
    });

    return (
        <div className="flex items-center flex-col justify-center w-screen">
            <Navbar />
            <div className="container">
                <form
                    action=""
                    className="m-auto p-5 flex w-80 gap-1 flex-col"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="nama" className="font-bold">
                        NIS
                    </label>
                    <input
                        name="nis"
                        value={values.nis}
                        onChange={handleChange}
                        required
                        type="number"
                        id="nis"
                        placeholder="Nama Lengkap"
                        className="input input-bordered w-full max-w-xs"
                    />

                    {props.errors.nis ? (
                        <div className="badge badge-error gap-2">
                            {props.errors.nis}
                        </div>
                    ) : null}
                    <label htmlFor="nama_siswa" className="font-bold">
                        NAMA LENGKAP
                    </label>
                    <input
                        name="nama_siswa"
                        value={values.nama_siswa}
                        onChange={handleChange}
                        type="text"
                        required
                        id="nama_siswa"
                        placeholder="Nama Lengkap"
                        className="input input-bordered w-full max-w-xs"
                    />
                    {props.errors.nama_siswa ? (
                        <div className="badge badge-error gap-2">
                            {props.errors.nama_siswa}
                        </div>
                    ) : null}
                    <label htmlFor="id_kelas" className="font-bold">
                        KELAS
                    </label>
                    <Select
                        name="id_kelas"
                        id="id_kelas"
                        required
                        onChange={(e) => {
                            setValues((values) => ({
                                ...values,
                                id_kelas: e.value,
                            }));
                        }}
                        options={optionKelas}
                        placeholder="Pilih Kelas"
                        className="w-full"
                    />
                    <br />
                    <button className="btn bg-green-300">KIRIM</button>
                </form>
            </div>
        </div>
    );
}

export default Siswa;
