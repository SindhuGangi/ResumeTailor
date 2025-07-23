
import Image from "next/image";
export default function About() {
  return (
     
    <main className="min-h-screen bg-white bg-[url('/grid-bg.png')] bg-repeat p-6">
   
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
  <span className="text-indigo-700">ResumeTailor</span>
</h1>
<h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-medium text-center text-yellow-500 mb-4">
  AI Powered Resume Customizer
</h1>
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-gray-700 font-semibold">
     Instantly generate tailored resumes that match job descriptions using AI.
    </p>
    <section className="flex justify-center items-center py-4">
  <div className="relative w-full max-w-4xl p-6 md:p-10 rounded-3xl shadow-xl text-white bg-[linear-gradient(93deg,_#240bb5_0.55%,_#00ccea_119.94%)]">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 sm:text-3xl lg:text-3xl text-center font-inter">Why Resume Tailor?</h2>
    <p className="text-base md:text-xl sm:text-lg lg:text-2xl leading-relaxed">
      Resume Tailor uses AI to help job seekers build smarter resumes that align with job descriptions.
      It generates personalized edits, enhances ATS compatibility, and highlights your strongest skills.
      You save time and apply more confidently to every opportunity!
    </p>
  </div>
</section>
    
       <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-200 px-6 gap-6">
      
      {/* Vision Box */}
      <div className="bg-white text-gray rounded-r-full w-full md:w-1/3 mb-60 p-4 flex flex-col items-center text-center shadow-lg "style={{height:250}}>
        <div className="  w-16 h-16 border-2 border-[#1b56fd] rounded-full flex items-center justify-center mb-4 ">
          <Image src="/vision.svg" alt="Vision Icon" width={45} height={45} items-center style={{ border: "2px solid #1b56fd",padding:"2px",borderRadius:"50%" }} />
        </div>
        <h2 className="text-2xl sm:text-1xl md:text-2xl lg:text-3xl ">Vision</h2>
        <p className=" text-md  px-6 mb-20 ">
          To become the largest website design firm by empowering innovative thinking to establish ourselves
          as a worldwide recognized company by offering the highest standard services and solutions.
        </p>
      </div>
     <div className="relative flex justify-center items-center w-full md:w-1/3 h-1/2 border-4 border-black ">
     
         <div className="rounded-full bg-gray-200  rounded-t-full rounded-b-full flex justify-center items-center overflow-hidden  shadow-2xl h-full w-full"> 
          <Image
            src="/mv.jpg" 
            alt="Team"
            width={350}
             height={500}
            className="object-contain"
          />
        </div>
        </div>
  
  <div className="bg-gray-900  text-white rounded-l-full w-full md:w-1/3 mt-60 p-4 flex flex-col items-center text-center shadow-lg "style={{height:250}}>
        <div className="  border-2 border-[#1b56fd] rounded-full flex items-center justify-center mb-4 ">
          <Image src="/image.png" alt="Mission Icon" width={45} height={45}  items-center  style={{ border: "2px solid #1b56fd ",padding:"2px",borderRadius:"50%" }} />
        </div>
  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl
">Mission</h2>

  <p className="text-md px-6 mb-20">
    To provide customer-centric, result-oriented, cost-competitive, innovative, and functional IT
    solutions to our valuable worldwide customers.
  </p>
</div>


    </div>




  
<section className="py-12 px-4">
  <h2 className="text-5xl font-bold text-center text-indigo-700 mb-8">Tech Stack</h2>
  <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-x-64 text-center">
    <div className="gap-x-64">
      <h3 className="text-2xl font-semibold mb-6 text-blue-600">Frontend</h3>
      <div className="flex flex-col items-center space-y-8">
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
      <h3 className="text-2xl font-semibold mb-6 text-blue-600">Backend</h3>
      <div className="flex flex-col items-center space-y-8">
        <div className="flex items-center space-x-4">
          <span className="text-xl">🌐</span>
          <span className="text-lg">Node.js</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xl">🚀</span>
          <span className="text-lg">Express.js</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xl">🧠</span>
          <span className="text-lg text-center">OpenAI API</span>
        </div>
      </div>
    </div>
  </div>
</section>


  <section className="my-12 justify-center ml-32">
    <h2 className="text-5xl font-heading font-semibold text-neutral-700 mb-10 text-center "> Privacy Policy</h2>
  <div className="grid md:grid-cols-2 gap-8 items-start ">
    <div>
      <img
      src="/privacy.svg" 
      alt="Privacy Policy Illustration"
      className="w-full h-auto rounded-lg shadow-md bg-neutral-200"
    />
  </div>
    <div className="flex flex-col justify-between h-full space-y-4 text-indigo-700 text-lg text-semibold">
      <div className="flex items-center gap-3">
        <p>We do not store your uploaded resumes or job descriptions.</p>
      </div>
      <div className="flex items-center gap-3">
     
        <p>Your data is used only during your session — never saved.</p>
      </div>
      <div className="flex items-center gap-2">
        
        <p>No third-party sharing or ads involved.</p>
      </div>
      <div className="flex items-center gap-2">
       
        <p>Use the app without login or personal identification.</p>
      </div>
      <div className="flex items-center gap-2">
  
        <p>You're in full control of what you generate and download.</p>
        </div>
        <div className="flex items-center gap-2">
       
        <p>We do not display ads or sell user data for any monetization purpose.</p>
      </div>
    </div>
    </div>
</section>
<div className=" rounded-3xl w-auto bg-gray-200 p-4 ">
<p className="text-5xl font-bold text-black text-center leading-none mb-2 ">
  📬 Contact Us
</p>
<p className="text-2xl text-center text-black mb-12 leading-tight mt-2">
  We’d love to hear your feedback, questions, or collaboration ideas!
</p>
  <section className="flex  items-center w-full ">
   <div className=" w-full p-6 md:p-10   shadow-xl text-center gap-40  flex justify-center text-white text-2xl bg-[linear-gradient(93deg,#2a2f35_48%,#002658_100.36%)]
">
  <div><strong>Email:</strong><br/> resumetailor.project@gmail.com</div>
   <div><strong>GitHub:</strong><br/> github.com/your-username/ResumeTailor</div>
   <div><strong>LinkedIn:</strong> <br/>linkedin.com/in/yourname</div>
   </div>
    </section>
    </div>
    </main>
  );
}
