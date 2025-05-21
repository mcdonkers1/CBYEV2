export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfdfa] text-gray-900 px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">The Modern Way To Get An Internship</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <button className="bg-green-100 px-6 py-3 rounded-full font-semibold hover:bg-green-200 transition">📍 Anywhere</button>
        <button className="bg-green-100 px-6 py-3 rounded-full font-semibold hover:bg-green-200 transition">🏭 Industry</button>
        <button className="bg-green-100 px-6 py-3 rounded-full font-semibold hover:bg-green-200 transition">🎯 Skill Level</button>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">Find Internship</button>
      </div>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Student Reviews</h2>
        <p className="text-gray-700 max-w-xl mx-auto">"This platform changed my life. I landed an internship at a top company in just 3 weeks!"</p>
      </section>

      <section className="mt-12 overflow-x-auto whitespace-nowrap">
        <div className="inline-block mx-4 p-4 bg-white rounded shadow-md">"Easy to use and highly effective!"</div>
        <div className="inline-block mx-4 p-4 bg-white rounded shadow-md">"Highly recommend CBYE InternMatch!"</div>
        <div className="inline-block mx-4 p-4 bg-white rounded shadow-md">"A must-have for any student!"</div>
      </section>
    </main>
  )
}
