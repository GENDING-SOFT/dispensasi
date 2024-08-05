import Navbar from "@/Components/Navbar";
import Stat from "@/Components/Stat";
import { Link, usePage } from "@inertiajs/react";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

function Home() {
    const { props } = usePage();

    console.log(props);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

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
                <div className="container p-5">
                    <h1 className="text-3xl font-bold">Home</h1>
                    <Link
                        href="/dispen"
                        className="btn bg-green-500 text-white mt-5"
                    >
                        TAMBAH DISPENSASI
                    </Link>
                    <div className="box w-full flex items-center flex-wrap gap-5 mt-9">
                        <Stat
                            count={props.dispenCount}
                            judul="Jumlah Dispensasi"
                        />
                        <Stat
                            count={props.hariIniCount}
                            judul="Jumlah Dispensasi Hari Ini"
                        />
                    </div>
                    <div className="w-8/12">
                        <Line
                            // className="w-48"
                            // height={200}
                            data={data}
                            options={options}
                        />
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
