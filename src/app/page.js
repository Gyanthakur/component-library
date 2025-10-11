"use client";
import { useState } from "react";
import Modal from "./components/Modal";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Test Modal Page</h1>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        Open Modal
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
        <p>This is a test modal ✅</p>
        <button
          onClick={() => setOpen(false)}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}
