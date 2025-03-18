// app/departments/page.tsx
import Link from 'next/link';
import { departments } from '@/data/departments';

export default function DepartmentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Departments</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                {dept.name} Image
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{dept.name}</h2>
              <p className="text-gray-600 mb-4">{dept.description}</p>
              <div className="flex space-x-4">
                <Link 
                  href={`/departments/${dept.id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                  Department Details
                </Link>
                <Link 
                  href={`/departments/${dept.id}/curriculum`}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300"
                >
                  View Curriculum
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}