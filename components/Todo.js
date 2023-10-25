import { useState } from "react";

export default function Todo({ data, handleDelete, handleEditValue }) {
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedValue, setEditedValue] = useState(data.value);

  const handleClick = async () => {
    setDeleting(true);
    await handleDelete(data.id);
    setDeleting(false);
  };
  const handleEdit = async () => {
    if (editedValue === data.value) return;
    setEditing(true);
    await handleEditValue(data.id, editedValue);
    setEditing(false);
    setEditMode(false);
  };

  return (
    <div className="text-black  w-full flex text-xl  space-y-3 px-3 items-center">
      {editMode ? (
        <>
          <input
            type="text"
            className="w-full p-2 mt-2"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <button
            onClick={() => setEditMode(false)}
            className="border bg-slate-200 mr-2 p-2 rounded-lg text-black  "
          >
            Cancel
          </button>
        </>
      ) : (
        <label className="flex-grow ">{data.value}</label>
      )}
      <button
        disabled={editing}
        className="bg-yellow-500 mr-2 p-2 rounded-lg text-white disabled:bg-yellow-200 disabled:opacity-75 "
        onClick={editMode ? handleEdit : () => setEditMode(true)}
      >
        {editMode ? (editing ? "Editing..." : "Send") : "Edit"}
      </button>
      <button
        disabled={deleting}
        className="bg-red-500 p-2 rounded-lg text-white disabled:bg-red-200 disabled:opacity-75 "
        onClick={handleClick}
      >
        {deleting ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
}
