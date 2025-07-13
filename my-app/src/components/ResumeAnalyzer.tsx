"use client";

import { useState } from "react";

export default function ResumeAnalyzer() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">🎯 Resume Analyzer</h1>

      {/* Resume Upload */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Upload your Resume (PDF/DOC)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      {/* Job Description Paste */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Paste Job Description</label>
        <textarea
          rows={6}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the JD here..."
          className="w-full border border-gray-300 p-2 rounded"
        ></textarea>
      </div>

      {/* Analyze Button */}
      <button
        disabled={!resumeFile || !jobDescription}
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 disabled:bg-gray-300"
        onClick={() => alert("We'll analyze this soon!")}
      >
        🔍 Analyze My Resume
      </button>
    </div>
  );
}

