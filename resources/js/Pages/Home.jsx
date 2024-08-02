import Navbar from "@/Components/Navbar";
import Stat from "@/Components/Stat";

function Home() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center">
                <div className="container">
                    <h1 className="text-3xl font-bold">Home</h1>
                    <div className="box w-full flex items-center flex-wrap gap-5 mt-9">
                        <Stat count={200} judul="Jumlah Dispensasi Hari Ini" />
                        <Stat count={200} judul="Jumlah Dispensasi Hari Ini" />
                        <Stat count={200} judul="Jumlah Dispensasi Hari Ini" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
