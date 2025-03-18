// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white rounded-lg p-8 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Faculty of Engineering & Technology</h1>
          <p className="text-xl mb-6">
            Shaping the future through innovation and technology
          </p>
          <Link 
            href="/departments" 
            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
          >
            Explore Departments
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome to FET</h2>
          <p className="text-lg mb-4">
            The Faculty of Engineering and Technology (FET) is dedicated to providing 
            world-class education and research opportunities in various engineering disciplines. 
            Our programs are designed to equip students with the knowledge and skills needed 
            to tackle real-world challenges and drive innovation.
          </p>
          <p className="text-lg mb-4">
            With state-of-the-art laboratories, experienced faculty members, and 
            industry partnerships, we offer a comprehensive learning experience that 
            prepares our students for successful careers in engineering and technology.
          </p>
        </div>
      </section>

      {/* Featured Departments */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Departments</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="h-48 bg-gray-200 relative">
              {/* In real app, use actual images */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Computer Science Image
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Computer Science</h3>
              <p className="text-gray-600 mb-4">
                Programming, algorithms, AI, and more.
              </p>
              <Link 
                href="/departments/computer-science" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Curriculum →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Electrical Engineering Image
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Electrical Engineering</h3>
              <p className="text-gray-600 mb-4">
                Electronic systems, circuits, and telecommunications.
              </p>
              <Link 
                href="/departments/electrical-engineering" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Curriculum →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Mechanical Engineering Image
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Mechanical Engineering</h3>
              <p className="text-gray-600 mb-4">
                Thermodynamics, mechanics, and manufacturing.
              </p>
              <Link 
                href="/departments/mechanical-engineering" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Curriculum →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Civil Engineering Image
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Civil Engineering</h3>
              <p className="text-gray-600 mb-4">
                Structural engineering, construction, and infrastructure.
              </p>
              <Link 
                href="/departments/civil-engineering" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Curriculum →
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/departments" 
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
          >
            View All Departments
          </Link>
        </div>
      </section>

      {/* News and Events Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Latest News & Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">New Research Lab Opening</h3>
            <p className="text-gray-500 mb-2">March 15, 2025</p>
            <p className="text-gray-600">
              FET is proud to announce the opening of our new AI and Robotics Research Laboratory.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Engineering Career Fair</h3>
            <p className="text-gray-500 mb-2">April 10, 2025</p>
            <p className="text-gray-600">
              Join us for our annual Engineering Career Fair with top industry recruiters.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Student Project Showcase</h3>
            <p className="text-gray-500 mb-2">May 5, 2025</p>
            <p className="text-gray-600">
              Final year students will be showcasing their innovative engineering projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}