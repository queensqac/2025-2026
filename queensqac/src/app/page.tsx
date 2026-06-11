import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="text-center">
          {/* Logo - change this */}
          <div className="mb-8">
            <div className="text-6xl font-bold text-primary">QAC</div>
          </div>

          {/* Title - also change this*/}
          <h1 className="text-4xl font-bold mb-4">
            Queen&apos;s Actuarial Science Club
          </h1>

          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg" className="px-6">
              Join QAC
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-6"
              render={<Link href="/about" />}
              nativeButton={false}
            >
              Learn More
            </Button>
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
