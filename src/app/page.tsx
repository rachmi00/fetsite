
// import Link from "next/link"
// import Image from "next/image"
// import {
//   Code,
//   Cpu,
//   Building2,
//   Cog,
//   Lightbulb,
//   GraduationCap,
//   Microscope,
//   Users,
//   Calendar,
//   ArrowRight,
//   ChevronRight,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import "../styles/page.module.css"

// export default function Home(){
//     return(
//       <div className="min-h-screen bg-slate-50">
//         <section className="hero-section">
//           {/* geometric elements */}
//           <div className="geometric-element geometric-element-1"></div>
//           <div className="geometric-element geometric-element-2"></div>
//           <div className="geometric-element geometric-element-3"></div>

//           {/* Floating shapes */}
//           <div className="floating-shape floating-shape-1"></div>
//           <div className="floating-shape floating-shape-2"></div>
//           <div className="floating-shape floating-shape-3"></div>

//           <div className="container">
//             <div className="hero-content">
//               <div>
//                 <div className="hero-tag">Engineering Your Future</div>
//                 <h1 className="hero-title">Faculty of Engineering & Technology</h1>
//                 <p className="hero-subtitle">
//                   Where innovation meets eductaion to shape tomorrow's technology leaders
//                 </p>
//                 <div className="hero-buttons">
//                   <button className="primary-button">Explore programs</button>
//                   <button className="secondary-button">Virtual Tour</button>
//                 </div>  
//               </div>

//               <div className="hero-image-container">
//                 <div className="hero-image-decoration-1"></div>
//                 <div className="hero-image-decoration-2"></div>
//               </div>

//               <div className="hero-image-wrapper">
//                 <Image
//                       src="/placeholder.svg?height=500&width=500"
//                       alt="Engineering students collaborating"
//                       width={500}
//                       height={500}
//                       className="hero-image"
//                 />  
//               </div>

//             </div>

//           </div>

//         </section>

//         <section className="research-section">
//           <div className="conatiner">
//             <div className="section-header">
//               <div className="section-tag">
//                 <Microscope className="h-4 w-4"></Microscope>
//                 Research Excellence
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     )
// }


import React from "react";
import {
  Code,
  Cpu,
  Building2,
  Cog,
  Lightbulb,
  GraduationCap,
  Microscope,
  Users,
  Calendar,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import "./page.modules.css"

export default function Home(){
  return(
   <div className="faculty-engineering">
    <section className="hero-section">
       <div className="hero-geometric">
          <div className="hero-circle-1"></div>
          <div className="hero-circle-2"></div>
          <div className="hero-circle-3"></div>
          <div className="hero-shape-1"></div>
          <div className="hero-shape-2"></div>
          <div className="hero-shape-3"></div>
        </div>

        <div className="container px-4 py-16 md:py-24 relative z-10">
          <div className="hero-container mx-auto">
            <div className="hero-grid">
              <div className="order-2 md:order-1">
                <div className="hero-badge">Engineering Your Future</div>
                <h1 className="hero-title">
                  Faculty of Engineering & Technology
                </h1>
                <p className="hero-subtitle">
                  Where innovation meets education to shape tomorrow's technology leaders
                </p>
                <div className="hero-buttons">
                  <button className="hero-primary-btn">Explore Programs</button>
                  <button className="hero-secondary-btn">Virtual Tour</button>
                </div>
              </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="hero-image-container">
                  <div className="hero-image-decor-1"></div>
                  <div className="hero-image-decor-2"></div>
                  <div className="hero-image-wrapper">
                  <img
                      src="/placeholder.svg"
                      alt="Engineering students collaborating"
                      className="hero-image"
                    />
                  </div>
                  <div className="hero-floating-1">
                    <Cpu className="h-8 w-8" />
                  </div>
                  <div className="hero-floating-2">
                    <Cog className="h-6 w-6" />
                  </div>
            </div>
          </div>


          <div className="hero-stats">
            <div className="hero-stat-item">
              <p className="hero-stat-number hero-stat-number-1">15+</p>
               <p className="hero-stat-text">Years of Excellence</p>
            </div>
            <div className="hero-stat-item">
              <p className="hero-stat-number hero-stat-number-2">4500+</p>
               <p className="hero-stat-text">Students enrolled</p>
            </div>
            <div className="hero-stat-item">
              <p className="hero-stat-number hero-stat-number-3">30+</p>
               <p className="hero-stat-text">Faculty Members</p>
            </div>
            <div className="hero-stat-item">
              <p className="hero-stat-number hero-stat-number-4">Success Rate</p>
               <p className="hero-stat-text">98%</p>
            </div>
          </div>
          <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f8fafc"
              fillOpacity="1"
              d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,90.7C672,107,768,117,864,106.7C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>  

      <section className="about-section">
        <div className="container px-4">
          <div className="about-container mx-auto">
            <div className="about-content">
              <div className="about-image-container order-2 md:order-1">
              <div className="about-image-decor-1"></div>
                <div className="about-image-decor-2"></div>
                <img
                  src="/placeholder.svg"
                  alt="Engineering laboratory"
                  className="about-image"
                />
              </div>

              <div className="about-text-container order-1 md:order-2">
                <div className="about-badge">
                  <Microscope className="h-4 w-4"></Microscope>
                  About FET
                </div>
                <h2 className="about-title">Pioneering The Future Of Engineering</h2>
                <p className="about-descripption">
                The Faculty of Engineering and Technology (FET) is dedicated to providing world-class education and
                  research opportunities in various engineering disciplines. Our programs are designed to equip students
                  with the knowledge and skills needed to tackle real-world challenges and drive innovation.
                </p>
                <div className="about-features">
                  <div className="about-feature">
                    <div className="about-feature-icon-1">
                    <GraduationCap className="h-5 w-5"></GraduationCap>
                    </div>
                     <h3 className="about-feature-title">Expert Faculty</h3>
                     <p className="about-feature-text">Learn From Industry Leaders</p>

                  </div>

                  <div className="about-feature">
                    <div className="about-feature-icon-2">
                    <Cog className="h-5 w-5"></Cog>
                    </div>
                     <h3 className="about-feature-title"> Modern Labs</h3>
                     <p className="about-feature-text">Cutting Edge Equipment</p>

                  </div>

                  <div className="about-feature">
                    <div className="about-feature-icon">
                    <Lightbulb className="h-5 w-5"></Lightbulb>
                    </div>
                     <h3 className="about-feature-title">Innovation Hub</h3>
                     <p className="about-feature-text">Create and Invent</p>

                  </div>

                  <div className="about-feature">
                    <div className="about-feature-icon">
                    <Users className="h-5 w-5"></Users>
                    </div>
                     <h3 className="about-feature-title">Industry Partners</h3>
                     <p className="about-feature-text">Real-World Connections</p>

                  </div>
                </div>
                <button className="about-button">
                  Learn More About FET
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="departments-section">
        <div className="container px-4">
          <div className="departments-header">
            <div className="departments-badge">
              <Cpu className="h-4 w-4">
              </Cpu>
              Academic Excellence
            </div>

           <h2 className="departments-title">Our departments</h2>
           <p className="departments-description">Explore our diverse range of engineering disciplines to prepare you for success in your chosen field</p>
          </div>
           <div className="departments-grid">
            
             <div className="department-card group">
              <div className="department-image-container department-image-gradient-1">
                <img
                  src="/placeholder.svg"
                  alt="Computer Engineering"
                  className="department-image"
                />
                <div className="department-image-overlay"></div>
                <div className="department-icon-container">
                  <Code className="h-6 w-6 department-icon-1" />
                </div>
              </div>
              <div className="department-content">
                <h3 className="department-name">Computer Engineering</h3>
                <p className="department-description">
                  Programming, algorithms, artificial intelligence, Software engineering and Network engineering.
                </p>
                <div className="department-tags">
                  <span className="department-tag-1 text-xs px-2 py-1 rounded-full">Network Engineering</span>
                  
                  <span className="department-tag-1 text-xs px-2 py-1 rounded-full">Software Engineering</span>
                </div>
                <a href="/departments/computer-science" className="department-link">
                  View Curriculum
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

              {/* Electrical */}
            <div className="department-card group">
              <div className="department-image-container department-image-gradient-1">
                <img
                  src="/placeholder.svg"
                  alt="Computer Science"
                  className="department-image"
                />
                <div className="department-image-overlay"></div>
                <div className="department-icon-container">
                  <Code className="h-6 w-6 department-icon-1" />
                </div>
              </div>
              <div className="department-content">
                <h3 className="department-name">Electrical Engineering</h3>
                <p className="department-description">
                  Telecommunications and Power Systems
                </p>
                <div className="department-tags">
                  <span className="department-tag-1 text-xs px-2 py-1 rounded-full">Circuits</span>
                  <span className="department-tag-1 text-xs px-2 py-1 rounded-full">Power</span>
                  <span className="department-tag-1 text-xs px-2 py-1 rounded-full">Telecom</span>
                </div>
                <a href="/departments/electrical-engineering" className="department-link">
                  View Curriculum
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

             {/* Mecha*/}
             <div className="department-card group">
              <div className="department-image-container department-image-gradient-1">
                <img
                  src="/placeholder.svg"
                  alt="Computer Science"
                  className="department-image"
                />
                <div className="department-image-overlay"></div>
                <div className="department-icon-container">
                  <Code className="h-6 w-6 department-icon-1" />
                </div>
              </div>
              <div className="department-content">
                <h3 className="department-name">Mechanical Engineering</h3>
                <p className="department-description">
                  Thermodynamics and Manufacturing
                </p>
                <div className="department-tags">
                  <span className="department-tag-1 text-xs px-2 py-1 rounded-full">Thermodynamics</span>
                  <span className="department-tag-1 text-xs px-2 py-1 rounded-full">Design</span>
                  
                </div>
                <a href="/departments/mechanical-engineering" className="department-link">
                  View Curriculum
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
             {/* Civil */}
             <div className="department-card group">
              <div className="department-image-container department-image-gradient-1">
                <img
                  src="/placeholder.svg"
                  alt="Computer Science"
                  className="department-image"
                />
                <div className="department-image-overlay"></div>
                <div className="department-icon-container">
                  <Code className="h-6 w-6 department-icon-1" />
                </div>
              </div>
              <div className="department-content">
                <h3 className="department-name">Electrical Engineering</h3>
                <p className="department-description">
                  Telecommunications and Power Systems
                </p>
                <div className="department-tags">
                  <span className="department-tag-1 text-xs px-2 py-1 rounded-full">Circuits</span>
                  <span className="department-tag-1 text-xs px-2 py-1 rounded-full">Power</span>
                  <span className="department-tag-1 text-xs px-2 py-1 rounded-full">Telecom</span>
                </div>
                <a href="/departments/electrical-en" className="department-link">
                  View Curriculum
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          
          </div>
        </div>
      </section>
  </div>
  );
}
























// // app/page.tsx
// // import Link from 'next/link';
// // import Image from 'next/image';

// // export default function Home() {
// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       {/* Hero Section */}
// //       <section className="bg-blue-700 text-white rounded-lg p-8 mb-12">
// //         <div className="max-w-4xl mx-auto text-center">
// //           <h1 className="text-4xl font-bold mb-4">Faculty of Engineering & Technology</h1>
// //           <p className="text-xl mb-6">
// //             Shaping the future through innovation and technology
// //           </p>
// //           <Link 
// //             href="/departments" 
// //             className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
// //           >
// //             Explore Departments
// //           </Link>
// //         </div>
// //       </section>

// //       {/* About Section */}
// //       <section className="mb-12">
// //         <div className="max-w-4xl mx-auto">
// //           <h2 className="text-3xl font-bold mb-6 text-center">Welcome to FET</h2>
// //           <p className="text-lg mb-4">
// //             The Faculty of Engineering and Technology (FET) is dedicated to providing 
// //             world-class education and research opportunities in various engineering disciplines. 
// //             Our programs are designed to equip students with the knowledge and skills needed 
// //             to tackle real-world challenges and drive innovation.
// //           </p>
// //           <p className="text-lg mb-4">
// //             With state-of-the-art laboratories, experienced faculty members, and 
// //             industry partnerships, we offer a comprehensive learning experience that 
// //             prepares our students for successful careers in engineering and technology.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Featured Departments */}
// //       <section className="mb-12">
// //         <h2 className="text-3xl font-bold mb-6 text-center">Our Departments</h2>
// //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
// //             <div className="h-48 bg-gray-200 relative">
          
// //               <div className="absolute inset-0 flex items-center justify-center text-gray-500">
// //                 Computer Science Image
// //               </div>
// //             </div>
// //             <div className="p-4">
// //               <h3 className="text-xl font-semibold mb-2">Computer Science</h3>
// //               <p className="text-gray-600 mb-4">
// //                 Programming, algorithms, AI, and more.
// //               </p>
// //               <Link 
// //                 href="/departments/computer-science" 
// //                 className="text-blue-600 hover:text-blue-800 font-medium"
// //               >
// //                 View Curriculum →
// //               </Link>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
// //             <div className="h-48 bg-gray-200 relative">
// //               <div className="absolute inset-0 flex items-center justify-center text-gray-500">
// //                 Electrical Engineering Image
// //               </div>
// //             </div>
// //             <div className="p-4">
// //               <h3 className="text-xl font-semibold mb-2">Electrical Engineering</h3>
// //               <p className="text-gray-600 mb-4">
// //                 Electronic systems, circuits, and telecommunications.
// //               </p>
// //               <Link 
// //                 href="/departments/electrical-engineering" 
// //                 className="text-blue-600 hover:text-blue-800 font-medium"
// //               >
// //                 View Curriculum →
// //               </Link>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
// //             <div className="h-48 bg-gray-200 relative">
// //               <div className="absolute inset-0 flex items-center justify-center text-gray-500">
// //                 Mechanical Engineering Image
// //               </div>
// //             </div>
// //             <div className="p-4">
// //               <h3 className="text-xl font-semibold mb-2">Mechanical Engineering</h3>
// //               <p className="text-gray-600 mb-4">
// //                 Thermodynamics, mechanics, and manufacturing.
// //               </p>
// //               <Link 
// //                 href="/departments/mechanical-engineering" 
// //                 className="text-blue-600 hover:text-blue-800 font-medium"
// //               >
// //                 View Curriculum →
// //               </Link>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
// //             <div className="h-48 bg-gray-200 relative">
// //               <div className="absolute inset-0 flex items-center justify-center text-gray-500">
// //                 Civil Engineering Image
// //               </div>
// //             </div>
// //             <div className="p-4">
// //               <h3 className="text-xl font-semibold mb-2">Civil Engineering</h3>
// //               <p className="text-gray-600 mb-4">
// //                 Structural engineering, construction, and infrastructure.
// //               </p>
// //               <Link 
// //                 href="/departments/civil-engineering" 
// //                 className="text-blue-600 hover:text-blue-800 font-medium"
// //               >
// //                 View Curriculum →
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="text-center mt-8">
// //           <Link 
// //             href="/departments" 
// //             className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
// //           >
// //             View All Departments
// //           </Link>
// //         </div>
// //       </section>

// //       {/* News and Events Section */}
// //       <section className="mb-12">
// //         <h2 className="text-3xl font-bold mb-6 text-center">Latest News & Events</h2>
// //         <div className="grid md:grid-cols-3 gap-6">
// //           <div className="bg-white rounded-lg shadow-md p-6">
// //             <h3 className="text-xl font-semibold mb-2">New Research Lab Opening</h3>
// //             <p className="text-gray-500 mb-2">March 15, 2025</p>
// //             <p className="text-gray-600">
// //               FET is proud to announce the opening of our new AI and Robotics Research Laboratory.
// //             </p>
// //           </div>
          
// //           <div className="bg-white rounded-lg shadow-md p-6">
// //             <h3 className="text-xl font-semibold mb-2">Engineering Career Fair</h3>
// //             <p className="text-gray-500 mb-2">April 10, 2025</p>
// //             <p className="text-gray-600">
// //               Join us for our annual Engineering Career Fair with top industry recruiters.
// //             </p>
// //           </div>
          
// //           <div className="bg-white rounded-lg shadow-md p-6">
// //             <h3 className="text-xl font-semibold mb-2">Student Project Showcase</h3>
// //             <p className="text-gray-500 mb-2">May 5, 2025</p>
// //             <p className="text-gray-600">
// //               Final year students will be showcasing their innovative engineering projects.
// //             </p>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

