"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import OutputBox from "./components/OutputBox";
import Loader from "./components/Loader";
import { downloadText } from "./utils/download";




export default function Home() {
  const [form, setForm] = useState({
    jobDescription: "",
    achievements: "",
    tone: "Professional",
  });

  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);


  // Temporary generator (real API coming next)
  const generateEmail = () => {
    setLoading(true);

    setTimeout(() => {
      const text = `
Tone: ${form.tone}

Dear Hiring Manager,

I am writing to apply for the role described below:
${form.jobDescription}

My achievements include:
${form.achievements}

Thank you,
Akshay
`;

      setOutput(text);
      setLoading(false);
      setHistory([text, ...history]);
    }, 1800);
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <div className="pt-32 flex flex-col items-center px-6">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Smart Email Generator
        </h1>

        <p className="text-gray-600 text-lg mb-12 max-w-lg text-center">
          Create polished cover letters & emails in seconds.
        </p>

        <div className="w-full max-w-2xl border border-gray-300 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col gap-6">

            <div>
              <label className="block mb-2 text-sm text-gray-700">
                Job Description
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-xl p-4 outline-none"
                rows={4}
                value={form.jobDescription}
                onChange={(e) =>
                  setForm({ ...form, jobDescription: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-700">
                Your Achievements
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-xl p-4 outline-none"
                rows={3}
                value={form.achievements}
                onChange={(e) =>
                  setForm({ ...form, achievements: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-700">Tone</label>
              <select
                className="w-full border border-gray-300 rounded-xl p-4 outline-none bg-white"
                value={form.tone}
                onChange={(e) =>
                  setForm({ ...form, tone: e.target.value })
                }
              >
                <option>Professional</option>
                <option>Friendly</option>
                <option>Confident</option>
                <option>Formal</option>
              </select>
            </div>

            <button
              onClick={generateEmail}
              className="w-full bg-black text-white rounded-xl py-4 text-lg hover:opacity-80 transition"
            >
              Generate Email
            </button>
          </div>
        </div>

        {/* Loader or Output */}
        {loading ? <Loader /> : <OutputBox output={output} />}

        {/* Download Button */}
        {output !== "" && (
          <button
            onClick={() => downloadText("generated-email.txt", output)}
            className="mt-6 w-full max-w-2xl py-3 border border-black rounded-xl hover:bg-black hover:text-white transition"
          >
            Download as Text
          </button>
        )}
      </div>
    </main>
  );
}
