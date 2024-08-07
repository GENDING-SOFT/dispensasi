import React from "react";

function InputForm({ label, id, value, onChange, error }) {
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="font-bold">{label}</label>
            <input
                type="text"
                id={id}
                value={value}
                onChange={onChange}
                error={error}
                className="border border-gray-300 p-2 rounded"
            />
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );
}


export default InputForm;
