"use client";

export default function OutputBox({ output }: { output: string }) {
  return (
    <div className="w-full max-w-2xl mt-10 border border-gray-300 rounded-2xl p-8 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Generated Email</h2>

      <pre className="whitespace-pre-wrap leading-relaxed text-gray-800">
        {output || "Your generated email will appear here..."}
      </pre>

      <button
        onClick={() => navigator.clipboard.writeText(output)}
        className="mt-6 w-full py-3 rounded-xl bg-black text-white hover:opacity-80 transition"
      >
        Copy to Clipboard
      </button>
    </div>
  );
}
