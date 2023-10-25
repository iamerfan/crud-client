import { useState } from "react";

export default function Input({ handleAdd, loading }) {
  const [value, setValue] = useState("");
  const handleClick = () => {
    handleAdd(value);
    setValue("");
  };
  return (
    <div className="flex w-full bg-slate-200 ">
      <input
        disabled={loading}
        type="text"
        className="bg-transparent h-10 flex-grow p-5 text-black focus:outline-blue-600 "
        placeholder="add todo"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        className="bg-blue-400 p-2 rounded-lg shadow disabled:bg-blue-300 disabled:opacity-80"
        onClick={handleClick}
      >
        {loading ? "Sending..." : " Send Todo"}
      </button>
    </div>
  );
}
