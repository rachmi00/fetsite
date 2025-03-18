
// app/departments/[departmentId]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { departments } from '@/data/departments';

export default function DepartmentPage({ params }: { params: { departmentId: string } }) {
  const { departmentId } = params;
  const department = departments.find(dept => dept.id === departmentId);
  
  if (!department) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="h-64 bg-gray-200 rounded-t-lg relative mb-6">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xl">
            {department.name} Department Header Image
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">{department.name}</h1>
        <p className="text-lg text-gray-700 mb-6">{department.description}</p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">About the Department</h2>
          <p className="mb-4">
            The Department of {department.name} is committed to excellence in teaching, research, and service. 
            Our faculty members are experts in their fields and are dedicated to providing students with a 
            high-quality education that prepares them for successful careers in {department.name.toLowerCase()}.
          </p>
          <p className="mb-4">
            We offer a comprehensive curriculum that covers the fundamental principles and advanced topics in 
            {department.name.toLowerCase()}. Our programs are designed to develop students' technical knowledge, 
            problem-solving skills, and professional competencies.
          </p>
        </div>
        
        // app/departments/[departmentId]/page.tsx (continued)
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Programs Offered</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>B.Eng in {department.name}</li>
            <li>M.Eng in {department.name}</li>
            <li>Ph.D in {department.name}</li>
          </ul>
          <p>
            Our programs are accredited by relevant professional bodies and meet international standards.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Research Areas</h2>
          <p className="mb-4">
            Our department conducts cutting-edge research in various areas of {department.name.toLowerCase()}.
            Students have opportunities to participate in research projects and gain hands-on experience.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Advanced Computing Systems and Applications</li>
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Data Science and Analytics</li>
            <li>Cybersecurity and Network Systems</li>
            <li>Software Engineering and Development</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
          <p className="mb-4">
            The department is equipped with modern laboratories and facilities to support teaching and research activities.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Computing Labs</li>
            <li>Research Labs</li>
            <li>Project Workspaces</li>
            <li>Seminar Rooms</li>
          </ul>
        </div>
        
        <div className="text-center mb-8">
          <Link 
            href={`/departments/${departmentId}/curriculum`}
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View Department Curriculum
          </Link>
        </div>
        
        <Link href="/departments" className="text-blue-600 hover:underline">
          ← Back to All Departments
        </Link>
      </div>
    </div>
  );
}