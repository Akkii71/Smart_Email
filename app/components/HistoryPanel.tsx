"use client";

export default function HistoryPanel({ history }: { history: string[] }) {
  return (
    <div className="fixed right-0 top-0 h-full w-72 border-l border-black/10 bg-white shadow-xl p-6 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-6">History</h2>

      {history.length === 0 && (
        <p className="text-gray-500">No history yet.</p>
      )}

      <div className="flex flex-col gap-4">
        {history.map((item, i) => (
          <div key={i} className="p-4 border rounded-xl bg-white">
            <p className="text-sm text-gray-700 line-clamp-3">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
