export default function Hero() {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center px-10 py-20">
      <div className="flex gap-16 flex-col md:flex-row items-center">

        {/* Avatar + Status */}
        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/00000000" 
            alt="profile"
            className="w-48 h-48 rounded-full border-2 border-blue-500 shadow-lg object-cover"
          />

          <p className="mt-5 text-sm px-4 py-2 rounded-lg border border-green-400 bg-green-600/20">
            &lt;/&gt; Currently Building
          </p>
        </div>

        {/* About Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-xl max-w-2xl">
          <p className="text-blue-300 mb-3">$ whoami</p>

          <h1 className="text-4xl font-bold">Vishwajit Sutar</h1>
          <h2 className="text-xl mt-2 text-blue-400">Java Fullstack Developer</h2>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Passionate developer focused on building scalable, modern applications 
            using Java, React, and cloud technologies. Always exploring, always learning.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition">
              Download CV
            </button>

            <button className="px-4 py-2 border border-blue-300 rounded-md hover:bg-white/10 transition">
              Contact Me
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
