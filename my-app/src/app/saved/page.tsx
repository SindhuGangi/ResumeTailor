"use client";
// import { addMinutes, format } from "date-fns";
import { useState } from "react";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export default function Saved(){
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("new");
   const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
 

  const [resumes, setResumes] = useState([
    { id: 1, title: "Software Engineer – Google", date: "2025-07-22", atsScore: 92 },
    { id: 2, title: "Frontend Developer – Amazon", date: "2025-07-22", atsScore: 88 },
    { id: 3, title: "Backend Engineer – Microsoft", date: "2025-07-22", atsScore: 80 },
  ]);
  
  const istTimeZone = "Asia/Kolkata";
const currentISTDate = toZonedTime(new Date(), istTimeZone);
const formattedDateTime = format(currentISTDate, "EEEE, dd MMMM yyyy, hh:mm a"); 


  const filteredResumes = resumes
    .filter((resume) => resume.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sort === "new"
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime()
    );

  return (
    <main className="min-h-screen bg-[#f0f4ff] p-6 font-sans">
      {/* Page Header */}
      <h1 className="text-5xl font-bold text-center text-[#1B56FD] mb-8">
        Saved Resumes
      </h1>

      {/* Search and Sort */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-5xl mx-auto bg-white shadow-md p-4 rounded-lg mb-10">
        <input
          type="text"
          placeholder="Search by job title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B56FD]"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="mt-3 md:mt-0 md:ml-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B56FD]"
        >
          <option value="new">Sort: New → Old</option>
          <option value="old">Sort: Old → New</option>
        </select>
      </div>
      {/* Resume Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredResumes.length === 0 ? (
          <p className="text-center text-gray-500 col-span-3">
            No resumes found. Try a different search.
          </p>
        ) : (
          filteredResumes.map((resume) => (
            <div
              key={resume.id}
              className="bg-white border-l-4 border-[#1B56FD] rounded-lg p-6 shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* ATS Score */}
                <div className="h-20 w-20 bg-[#E6EEFF] text-2xl rounded-full border-3 border-[#1B56FD] flex items-center justify-center text-[#1B56FD] font-extrabold">
                  {resume.atsScore}%
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-[#1B56FD] hover:underline cursor-pointer">
                    {resume.title}
                  </h3>
                <p className="text-gray-500 text-sm">Created : {formattedDateTime} </p>

                </div>
              </div>

              {/* Buttons */}
              {editingId === resume.id ? (
  <div className="space-y-2">
    {/* Editable Input */}
    <input
      type="text"
      value={editedTitle}
      onChange={(e) => setEditedTitle(e.target.value)}
      className="w-full px-3 py-2 border rounded"
    />

    <div className="flex space-x-4 justify-between">
      <button
        onClick={() => setEditingId(null)} // cancel editing
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
      >
        Cancel
      </button>
      <button
        onClick={() => {
          setResumes(
            resumes.map((r) =>
              r.id === resume.id ? { ...r, title: editedTitle } : r
            )
          );
          setEditingId(null); // exit editing mode
        }}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Save
      </button>
    </div>
  </div>
) : (
  <div className="flex space-x-4 justify-between">
    <button
      onClick={() => {
        setEditingId(resume.id);
        setEditedTitle(resume.title); // fill input with current title
      }}
      className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
    >
      Edit
    </button>
    <button
      onClick={() => alert("Downloading Resume...")}
      className="px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Download
    </button>
    <button
      onClick={() =>
        alert("Are you sure you want to delete this resume?")
      }
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Delete
    </button>
  </div>
)}
              {/* {editingId === resume.id ? (
                <div className="flex space-x-4 justify-between">
                  <button
                    onClick={() => alert("Undo changes")}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                  >
                    Undo
                  </button>
                  <button
                    onClick={() => alert("Redo changes")}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                  >
                    Redo
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="flex space-x-4 justify-between">
                  <button
                    onClick={() => setEditingId(resume.id)}
                    className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => alert("Downloading Resume...")}
                    className="px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => alert("Are you sure you want to delete this resume?")}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              )} */}
            </div>
          ))
        )}
      </section>
    </main>
  );
}
