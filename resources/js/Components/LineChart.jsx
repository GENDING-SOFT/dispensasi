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

function LineChart({ data, options }) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    return (
        <>
            <Line
                // className="w-48"
                // height={200}
                data={data}
                options={options}
            />
        </>
    );
}

export default LineChart;
