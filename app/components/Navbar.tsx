"use client";

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-10 flex justify-between items-center border-b border-black/10 bg-white/70 backdrop-blur-xl fixed top-0 left-0 z-50">
      <h1 className="text-2xl font-semibold tracking-tight">Smart Email</h1>

      <div className="flex gap-8 text-gray-700">
        <button className="hover:text-black transition">Home</button>
        <button className="hover:text-black transition">History</button>
        <button className="hover:text-black transition">About</button>
      </div>
    </nav>
  );
}
