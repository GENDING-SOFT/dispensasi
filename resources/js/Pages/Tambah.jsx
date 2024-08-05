import Navbar from "@/Components/Navbar";
import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Select from "react-select";

import CreatableSelect from "react-select/creatable";

function Tambah() {
    const { props } = usePage();
    const [values, setValues] = useState({
        nis: "",
    });
    const [isAvailable, setIsAvailable] = useState(true);
    const [guruId, setGuruId] = useState("");
    const [alasan, setAlasan] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [awal, setAwal] = useState();
    const [akhir, setAkhir] = useState();
    const [isPulang, setIsPulang] = useState(true);

    const guru = props.guru.map((guru) => {
        return {
            value: guru.id_guru,
            label: guru.nama_guru,
        };
    });

    const [siswa, setSiswa] = useState([]);

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

        fetch(`/siswa/get?nis=${values.nis}`)
            .then((res) => res.json())
            .then((data) => {
                setIsAvailable(true);
                setSiswa([...siswa, data]);
            })
            .catch((err) => {
                setIsAvailable(false);
                console.log(err);
            });
    }

    useEffect(() => {
        if (akhir != undefined) {
            setIsPulang(false);
        }
    }, [akhir]);

    const kirim = (e) => {
        e.preventDefault();

        const siswaPesan = siswa.map((item) => {
            return {
                nama: item.nama_siswa,
            };
        });

        const siswaDispen = siswa.map((item) => {
            return {
                nis: item.nis,
                id_guru: guruId,
                alasan: alasan,
                is_sampai_pulang: isPulang,
                deskripsi: deskripsi,
                waktu_awal: awal,
                waktu_akhir: akhir,
            };
        });

        const dataRequest = {
            alasan: alasan,
            deskripsi: deskripsi,
            siswa: siswaPesan,
            awal: awal,
            akhir: akhir,
            id_guru: guruId,
            is_sampai_pulang: isPulang,
            data_individu: siswaDispen,
        };

        console.log(dataRequest);

        router.post("/dispen/store", dataRequest);
        // window.location.reload();
    };

    return (
        <>
            <Navbar />
            <h1 className="text-center text-2xl font-bold mb-10">
                DISPENSASI SISWA
            </h1>
            <div className="flex justify-center">
                <div className="container flex flex-wrap">
                    <div className="w-full lg:w-auto lg:flex-1 flex">
                        <form
                            className="flex flex-wrap gap-5"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-5">
                                <input
                                    type="number"
                                    placeholder="NIS"
                                    onChange={handleChange}
                                    id="nis"
                                    value={values.nis}
                                    className="input input-bordered w-96 max-w-xs"
                                />
                                {!isAvailable ? (
                                    <div className="badge badge-error gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="inline-block h-4 w-4 stroke-current"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            ></path>
                                        </svg>
                                        NIS TIDAK DITEMUKAN
                                    </div>
                                ) : null}
                            </div>

                            <button className="btn px-10">CARI</button>
                        </form>
                    </div>
                    <div className="w-full lg:w-auto lg:flex-1">
                        {siswa.map((siswa, index) => (
                            <div
                                className="px-6 p-5 rounded-lg bg-slate-200 my-5"
                                key={index}
                            >
                                {siswa.nama_siswa}
                            </div>
                        ))}
                        <button
                            className="btn"
                            onClick={() =>
                                document
                                    .getElementById("my_modal_4")
                                    .showModal()
                            }
                        >
                            DISPEN
                        </button>
                    </div>
                </div>

                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <form
                            onSubmit={kirim}
                            className="flex flex-col font-bold w-full gap-2"
                        >
                            <label htmlFor="alasan" className="font-bold ">
                                ALASAN - CONTOH (EKSTRA, ORGANISASI, TUGAS LUAR,
                                DLL) [WAJIB DIISI]
                            </label>
                            <CreatableSelect
                                name="alasan"
                                id="alasan"
                                onChange={(e) => {
                                    setAlasan(e.value);
                                }}
                                required
                                options={[
                                    { value: "EKSTRA", label: "EKSTRA" },
                                    {
                                        value: "ORGANISASI",
                                        label: "ORGANISASI",
                                    },
                                    {
                                        value: "TUGAS SEKOLAH",
                                        label: "TUGAS SEKOLAH",
                                    },
                                    {
                                        value: "TUGAS EKSTERNAL",
                                        label: "TUGAS EKSTERNAL",
                                    },
                                    {
                                        value: "TUGAS LUAR",
                                        label: "TUGAS LUAR",
                                    },
                                ]}
                                placeholder="ALASAN"
                                className="w-full"
                            />
                            <label htmlFor="alasan" className="font-bold">
                                DESKRIPSI
                            </label>
                            <textarea
                                onChange={(e) => {
                                    setDeskripsi(e.target.value);
                                }}
                                id="alasan"
                                className="input h-28 input-bordered w-full "
                            />

                            <label htmlFor="guru" className="mt-5 font-bold">
                                GURU - [WAJIB DIISI]
                            </label>
                            <Select
                                name="id_kelas"
                                id="guru"
                                onChange={(e) => {
                                    setGuruId(e.value);
                                }}
                                required
                                options={guru}
                                placeholder="GURU"
                                className="w-full"
                            />
                            <label htmlFor="mulai" className="font-bold">
                                MULAI
                            </label>
                            <input
                                required
                                type="datetime-local"
                                onChange={(e) => {
                                    setAwal(e.target.value);
                                }}
                                id="mulai"
                                className="input input-bordered w-full "
                            />
                            <label htmlFor="akhir" className="font-bold">
                                AKHIR - [ABAIKAN JIKA DISPEN SAMPAI KBM
                                BERAKHIR]
                            </label>
                            <input
                                type="datetime-local"
                                onChange={(e) => {
                                    setAkhir(e.target.value);
                                }}
                                id="akhir"
                                className="input input-bordered w-full "
                            />
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
            </div>
        </>
    );
}

export default Tambah;
