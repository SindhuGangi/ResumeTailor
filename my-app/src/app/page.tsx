export default function Home() {
  return (
    <main className="min-h-screen  bg-white bg-[url('/grid-bg.png')] bg-repeat p-6"  >
      <h1 className="text-4xl font-bold text-center text-blue-700" style={{ letterSpacing:5}}>
        ResumeTailor
      </h1>
      <p className="text-center mb-16" style={{  color: '#ffb926', fontWeight: 400, fontStyle:"italic", fontSize:19 ,fontFamily:"cursive"   }}>
        AI-powered resume customization for every job
      </p>
     <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-6 px-6 md:px-12 py-10"  style={{ backgroundColor:"#146C94"}}>
  {/* Left: Image */}
  <img
    src="/resume.jpg"
    alt="AI Resume Illustration"
    className="w-full max-w-sm h-auto rounded-3xl"
  />

  {/* Right: Text + Button */}
  <div className="text-center p-8" >
    <p className="text-3xl font-semibold whitespace-nowrap mb-4 text-white "  >
      Upload your resume. Paste a job description. Let AI tailor your resume.
    </p>
    <a href="/analyze">
      <button className="bg-white text-blue px-6 py-3 rounded-xl hover:bg-white-700 hover:border-4 border-blue-600  transition mt-5">
        Get Started
      </button>
    </a>
  </div>
</div>

    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16 " >
  {[
    {
      icon:  "/upload.png" ,
      title: "Upload Resume",
      desc: "Upload PDF or DOCX, and we’ll extract it for AI editing.",
    },
    {
      icon: "./jd.png",
      title: "Paste JD",
      desc: "Paste a job description to analyze matching keywords.",
    },
    {
      icon: "./ai.png",
      title: "AI Suggestions",
      desc: "Get smart bullet points based on the job description.",
    },
  ].map((item, index) => (
    <div key={index} className=" text-white border-l-4 p-6 shadow hover:shadow-md transition border-l-[#1B56FD]" style={{ backgroundColor: '#fff'    }}>
      <div className="text-4xl mb-4" style={{ color:"#1B56FD" }}>
        < div className="flex items-center gap-4 mb-4">
        {item.icon.includes(".png") ? (
            <img src={item.icon} alt="icon" className="h-16 w-16 rounded-full border-2 border-[#1B56FD] p-1 bg-white" />
          ) : (
             <div className="text-4xl" style={{ color: "#1B56FD" }}>{item.icon}</div>
          )
  } 
      <h3 className="text-xl  font-bold mt-4" style={{ color:"#1B56FD" }}>{item.title}</h3>
      </div>
      </div>
      <p className=" text-gray-800 ml-20   ">{item.desc}</p>
    </div>
  ))}
</section>


   </main>
    
  );
}
