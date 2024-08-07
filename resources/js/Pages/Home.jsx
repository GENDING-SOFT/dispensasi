import Navbar from "@/Components/Navbar";
import Stat from "@/Components/Stat";
import { Link, usePage } from "@inertiajs/react";

import LineChart from "@/Components/LineChart";

function Home() {
    const { props } = usePage();

    const data = {
        labels: props.label2_minggu,
        datasets: [
            {
                label: "Dispensasi 2 Minggu Terakhir",
                data: props.data2_minggu,
                fill: false,
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgba(75, 192, 192, 0.2)",
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },

            responsive: true,
        },
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center">
                <div className="container p-5 flex gap-5 flex-wrap items-center justify-center">
                    <div>
                        <h1 className="text-3xl font-bold">Home</h1>
                        <Link
                            href="/dispen"
                            className="btn bg-green-500 text-white mt-5"
                        >
                            TAMBAH DISPENSASI
                        </Link>
                        <div className="box w-full flex items-center text-center flex-wrap gap-5 mt-9">
                            <Stat
                                count={props.dispenCount}
                                judul="Jumlah Dispensasi"
                            />
                            <Stat
                                count={props.hariIniCount}
                                judul="Jumlah Dispensasi Hari Ini"
                            />
                            <Stat
                                count={props.count2minggu}
                                judul="DISPENSASI 2 MINGGU TERAKHIR"
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-4xl p-6">
                        <h1 className="font-bold">
                            GRAFIK DISPENSASI 2 MINGGU TERAKHIR
                        </h1>
                        <LineChart data={data} options={options} />
                    </div>
                    {/* <form className="mt-10 flex items-center gap-5">
                        <input
                            type="text"
                            placeholder="TANYAKAN SESUATU"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <button className="btn bg-green-400 text-white">
                            CHAT
                        </button>
                    </form> */}
                </div>
            </div>
        </>
    );
}

export default Home;
