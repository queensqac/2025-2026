export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="text-center">
          
          {/* Logo - change this */}
          <div className="mb-8">
            <div className="text-6xl font-bold text-blue-600">QAC</div>
          </div>

          {/* Title - also change this*/}
          <h1 className="text-4xl font-bold mb-4">
            Queen&apos;s Actuarial Science Club
          </h1>
          
          <div className="flex gap-4 justify-center mt-8">
            <button className="px-6 py-2 bg-blue-600 text-white rounded">
              Join QAC
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* What is QAC Section */}
      <section className="min-h-screen flex flex-col items-center p-8">
        <h2 className="text-4xl font-bold text-center mt-8 mb-8">What is QAC?</h2>
      </section>

      {/* Meet the Team Section */}
      <section className="min-h-screen flex flex-col items-center p-8">
        <h2 className="text-4xl font-bold text-center mt-8 mb-8">Meet the Team</h2>
      </section>
    </div>
  );
}
