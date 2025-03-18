// components/ui/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FET</h3>
            <p className="mb-4">
              Faculty of Engineering & Technology
            </p>
            <p className="text-gray-400">
              Shaping the future through innovation and technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link href="/departments" className="hover:text-blue-300">Departments</Link></li>
              <li><Link href="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link href="/news" className="hover:text-blue-300">News & Events</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Departments</h3>
            <ul className="space-y-2">
              <li><Link href="/departments/computer-science" className="hover:text-blue-300">Computer Science</Link></li>
              <li><Link href="/departments/electrical-engineering" className="hover:text-blue-300">Electrical Engineering</Link></li>
              <li><Link href="/departments/mechanical-engineering" className="hover:text-blue-300">Mechanical Engineering</Link></li>
              <li><Link href="/departments/civil-engineering" className="hover:text-blue-300">Civil Engineering</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 University Avenue</p>
              <p className="mb-2">City, State 12345</p>
              <p className="mb-2">Email: info@fet.edu</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Faculty of Engineering & Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}