import Navbar from "@/Components/Navbar";
import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Select from "react-select";

function Tambah() {
    const { props } = usePage();
    const [values, setValues] = useState({
        nis: "",
    });
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
        const res = await fetch(`/siswa/get?nis=${values.nis}`);
        const calonDispen = await res.json();
        setSiswa([...siswa, calonDispen]);
    }

    useEffect(() => {
        if (akhir != undefined) {
            setIsPulang(false);
        }
    }, [akhir]);

    const kirim = (e) => {
        e.preventDefault();

        console.log(isPulang);

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

        router.post("/dispen/store", dataRequest);
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
                            <input
                                type="number"
                                placeholder="NIS"
                                onChange={handleChange}
                                id="nis"
                                value={values.nis}
                                className="input input-bordered w-96 max-w-xs"
                            />
                            <button className="btn px-10">CARI</button>
                        </form>
                    </div>
                    <div className="w-full lg:w-auto lg:flex-1">
                        {siswa.map((siswa) => (
                            <div className="px-6 p-5 rounded-lg bg-slate-200 my-5">
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
                            <input
                                type="text"
                                onChange={(e) => {
                                    setAlasan(e.target.value);
                                }}
                                id="alasan"
                                required
                                className="input input-bordered w-full"
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
