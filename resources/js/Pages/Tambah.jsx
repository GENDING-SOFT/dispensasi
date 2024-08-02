import Navbar from "@/Components/Navbar";

const handleSubmit = () => {
    console.log("fds");
};

function Tambah() {
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
                                className="input input-bordered w-96 max-w-xs"
                            />
                            <button className="btn  px-10" type="button">
                                CARI
                            </button>
                        </form>
                    </div>
                    <div className="w-full lg:w-auto lg:flex-1">
                        <div className="px-6 p-5 rounded-lg bg-slate-200 my-5">
                            RIZIQ LILI ULIL ALBAB
                        </div>
                        <div className="px-6 p-5 rounded-lg bg-slate-200 my-5">
                            RIZIQ LILI ULIL ALBAB
                        </div>
                        <div className="px-6 p-5 rounded-lg bg-slate-200 my-5">
                            RIZIQ LILI ULIL ALBAB
                        </div>
                        <div className="px-6 p-5 rounded-lg bg-slate-200 my-5">
                            RIZIQ LILI ULIL ALBAB
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tambah;
