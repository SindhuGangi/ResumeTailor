import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-white bg-[url('/grid-bg.png')] bg-repeat p-4 sm:p-6">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        <span className="text-indigo-700">ResumeTailor</span>
      </h1>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-center text-yellow-500 mb-4">
        AI Powered Resume Customizer
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-700 font-semibold max-w-2xl mx-auto">
        Instantly generate tailored resumes that match job descriptions using AI.
      </p>

      {/* Why Resume Tailor */}
      <section className="flex justify-center items-center py-4">
        <div className="relative w-full max-w-4xl p-4 sm:p-6 md:p-10 rounded-3xl shadow-xl text-white bg-[linear-gradient(93deg,_#240bb5_0.55%,_#00ccea_119.94%)]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center font-inter">
            Why Resume Tailor?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Resume Tailor uses AI to help job seekers build smarter resumes that
            align with job descriptions. It generates personalized edits,
            enhances ATS compatibility, and highlights your strongest skills.
            You save time and apply more confidently to every opportunity!
          </p>
        </div>
      </section>
<div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-200 px-4 sm:px-6 gap-6">
        {/* Vision */}
        <div className="bg-white text-gray rounded-r-full w-full md:w-1/3 p-4 flex flex-col items-center text-center shadow-lg mb-10 md:mb-60"
          style={{ height: 250 }}>
          <div className="w-16 h-16 border-2 border-[#1b56fd] rounded-full flex items-center justify-center mb-4">
            <Image
              src="/vision.svg"
              alt="Vision Icon"
              width={45}
              height={45}
              style={{
                border: "2px solid #1b56fd",
                padding: "2px",
                borderRadius: "50%",
              }}
            />
          </div>
          <h2 className="text-3xl sm:text-xl md:text-2xl font-bold">Vision</h2>
          <p className="text-sm sm:text-base md:text-md px-8 sm:px-8 mb-16 md:mb-40 font-arial-black">
            To become the largest website design firm by empowering innovative
            thinking to establish ourselves as a worldwide recognized company by
            offering the highest standard services,solutions.
          </p>
        </div>

        {/* Middle Image */}
        <div className="relative flex justify-center items-center w-full md:w-1/3 border-4 border-black ">
          <div className="rounded-full bg-gray-200 flex justify-center items-center overflow-hidden shadow-2xl w-64 h-64 sm:w-72 sm:h-72 md:w-full md:h-full">
            <Image
              src="/mv.jpg"
              alt="Team"
              width={350}
              height={600}
              className="object-contain"
            />
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gray-900 text-white rounded-l-full w-full md:w-1/3 p-4 flex flex-col items-center text-center shadow-lg mt-10 md:mt-60"
          style={{ height: 250 }}>
          <div className="w-16 h-16 border-2 border-[#1b56fd] rounded-full flex items-center justify-center mb-4">
            <Image
              src="/mission.png"
              alt="Mission Icon"
              width={45}
              height={45}
              style={{
                border: "2px solid #1b56fd",
                padding: "2px",
                borderRadius: "50%",
              }}
            />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Mission</h2>
          <p className="text-sm sm:text-base md:text-md px-4 sm:px-6 mb-10 md:mb-20">
            To provide customer-centric, result-oriented, cost-competitive,
            innovative, and functional IT solutions to our valuable worldwide
            customers.
          </p>
        </div>
      </div>

     

      {/* Tech Stack */}
      <section className="py-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-8">
          Tech Stack
        </h2>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8 md:gap-x-16 text-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-600">
              Frontend
            </h3>
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-xl">⚛️</span>
                <span className="text-lg">React.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">⚡</span>
                <span className="text-lg">Next.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🎨</span>
                <span className="text-lg">Tailwind CSS</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-600">
              Backend
            </h3>
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🌐</span>
                <span className="text-lg">Node.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🚀</span>
                <span className="text-lg">Express.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🧠</span>
                <span className="text-lg">OpenAI API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="my-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-700 mb-10 text-center">
          Privacy Policy
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <div>
            <img
              src="/privacy.svg"
              alt="Privacy Policy Illustration"
              className="w-full h-auto rounded-lg shadow-md bg-neutral-200"
            />
          </div>
          <div className="flex flex-col justify-between h-full space-y-4 text-indigo-700 text-base sm:text-lg font-semibold">
            <p>We do not store your uploaded resumes or job descriptions.</p>
            <p>Your data is used only during your session — never saved.</p>
            <p>No third-party sharing or ads involved.</p>
            <p>Use the app without login or personal identification.</p>
            <p>You're in full control of what you generate and download.</p>
            <p>
              We do not display ads or sell user data for any monetization
              purpose.
            </p>
          </div>
        </div>
      </section>

     <div className="rounded-3xl w-full  bg-gray-200 p-4 py-8">
  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center leading-none mb-2">
    📬 Contact Us
  </p>
  <p className="text-base sm:text-lg md:text-2xl text-center text-black mb-8 leading-tight mt-2">
    We’d love to hear your feedback, questions, or collaboration ideas!
  </p>

  <section className="w-full">
    <div className="w-full p-6 md:p-10 shadow-xl text-center flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 text-white text-base sm:text-lg md:text-xl bg-[linear-gradient(93deg,#2a2f35_48%,#002658_100.36%)] rounded-2xl">
      <div>
        <strong>Email:</strong><br />
        resumetailor.project@gmail.com
      </div>
      <div>
        <strong>GitHub:</strong><br />
        github.com/your-username/ResumeTailor
      </div>
      <div>
        <strong>LinkedIn:</strong><br />
        linkedin.com/in/yourname
      </div>
    </div>
  </section>
</div>

    </main>
  );
}
