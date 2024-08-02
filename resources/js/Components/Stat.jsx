function Stat({ judul, count }) {
    return (
        <div className="stats shadow">
            <div className="stat">
                <div className="stat-title">{judul}</div>
                <div className="stat-value">{count}</div>
            </div>
        </div>
    );
}

export default Stat;
