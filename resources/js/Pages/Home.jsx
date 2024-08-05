import Navbar from "@/Components/Navbar";
import Stat from "@/Components/Stat";
import { Link, usePage } from "@inertiajs/react";

function Home() {
    const { props } = usePage();

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center">
                <div className="container">
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
