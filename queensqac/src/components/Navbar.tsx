import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          QAC
        </Link>
        
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/events">Events</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/exam-prep">Exam Prep</Link>
        </div>
      </div>
    </nav>
  );
}
