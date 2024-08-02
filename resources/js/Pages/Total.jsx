import Navbar from "@/Components/Navbar";

function Total() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center">
                <div className="container">
                    <div className="flex w-full justify-between">
                        <h1 className="text-2xl font-extrabold print:text-center">
                            TOTAL DISPENSASI
                        </h1>
                        <form
                            action=""
                            className="flex items-center gap-3 print:hidden"
                        >
                            <input
                                type="date"
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
                                        <th></th>
                                        <th>NAMA</th>
                                        <th>KELAS</th>
                                        <th>ALASAN</th>
                                        <th>TANGGAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>1</th>
                                        <td>FULANA FUSDSD</td>
                                        <td>XI MPLB 4</td>
                                        <td>SAKIT</td>
                                        <td>2022-01-01</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>FULANA FUSDSD</td>
                                        <td>XI MPLB 4</td>
                                        <td>SAKIT</td>
                                        <td>2022-01-01</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>FULANA FUSDSD</td>
                                        <td>XI MPLB 4</td>
                                        <td>SAKIT</td>
                                        <td>2022-01-01</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>FULANA FUSDSD</td>
                                        <td>XI MPLB 4</td>
                                        <td>SAKIT</td>
                                        <td>2022-01-01</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Total;
