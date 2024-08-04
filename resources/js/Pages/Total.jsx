import Navbar from "@/Components/Navbar";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { JsonToExcel } from "react-json-to-excel";

function Total() {
    const { props } = usePage();
    const [tanggal, setTanggal] = useState(props.tanggal);
    const dataAll = props.dataAll;

    const print = () => {
        window.print();
    };

    const dataDispen = dataAll.map((item) => {
        return {
            nis: item.siswa_mst.nis,
            nama: item.siswa_mst.nama_siswa,
            kelas: item.siswa_mst.id_kelas,
            alasan: item.alasan,
            tanggal: item.waktu_awal.split(" ")[0],
        };
    });

    console.log(dataDispen);

    return (
        <>
            <Navbar />
            <div className="flex justify-center">
                <div className="container p-5">
                    <div className="flex w-full justify-between">
                        <h1 className="text-2xl font-extrabold print:text-center">
                            TOTAL DISPENSASI
                        </h1>

                        <form
                            className="flex items-center gap-3 print:hidden"
                            method="get"
                        >
                            <input
                                type="date"
                                name="tanggal"
                                value={tanggal}
                                id="tanggal"
                                onChange={(e) => setTanggal(e.target.value)}
                                placeholder="Type here"
                                className="input input-bordered input-xl w-full max-w-xs"
                            />
                            <button className="btn">Filter</button>
                        </form>
                    </div>

                    <div className="table">
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>NIS</th>
                                        <th>NAMA</th>
                                        <th>KELAS</th>
                                        <th>ALASAN</th>
                                        <th>TANGGAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {dataDispen.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.nis}</td>
                                                <td>{item.nama}</td>
                                                <td>{item.kelas}</td>
                                                <td>{item.alasan}</td>
                                                <td>{item.tanggal}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <div className="print:hidden flex gap-2">
                                <button
                                    onClick={print}
                                    className="btn print:hidden"
                                >
                                    PRINT
                                </button>
                                <JsonToExcel
                                    title="DOWNLOAD EXCEL"
                                    data={dataDispen}
                                    fileName={`dispensasi-${props.tanggal}`}
                                    btnClassName="custom-classname"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Total;
