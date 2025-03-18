
// app/departments/[departmentId]/curriculum/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { departments } from '@/data/departments';
import { curriculums } from '@/data/curriculum';

export default function CurriculumPage({ params }: { params: { departmentId: string } }) {
  const { departmentId } = params;
  
  const department = departments.find(dept => dept.id === departmentId);
  const curriculum = curriculums[departmentId];
  
  if (!department || !curriculum) {
    notFound();
  }
  
  // Group courses by level
  const coursesByLevel: Record<string, typeof curriculum.courses> = {};
  curriculum.courses.forEach(course => {
    if (!coursesByLevel[course.level]) {
      coursesByLevel[course.level] = [];
    }
    coursesByLevel[course.level].push(course);
  });
  
  // Sort levels
  const sortedLevels = Object.keys(coursesByLevel).sort();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">{department.name}</h1>
        <h2 className="text-xl text-gray-600 mb-8 text-center">Curriculum Overview</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="mb-4">
            The curriculum for the Department of {department.name} is designed to provide students with a 
            strong foundation in fundamental principles and practical skills. Our courses are regularly 
            updated to reflect advances in the field and industry requirements.
          </p>
          <p>
            Below you will find the courses offered at various levels of study. Each course is designed 
            to build upon previous knowledge and prepare students for advanced topics.
          </p>
        </div>
        
        {sortedLevels.map(level => (
          <div key={level} className="mb-10">
            <h3 className="text-2xl font-bold mb-4 pb-2 border-b">Level {level} Courses</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2 text-left">Code</th>
                    <th className="border px-4 py-2 text-left">Title</th>
                    <th className="border px-4 py-2 text-left">Description</th>
                    <th className="border px-4 py-2 text-center">Credit Hours</th>
                    <th className="border px-4 py-2 text-center">Semester</th>
                  </tr>
                </thead>
                <tbody>
                  {coursesByLevel[level].map(course => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="border px-4 py-2 font-medium">{course.code}</td>
                      <td className="border px-4 py-2">{course.title}</td>
                      <td className="border px-4 py-2 text-gray-700">{course.description}</td>
                      <td className="border px-4 py-2 text-center">{course.creditHours}</td>
                      <td className="border px-4 py-2 text-center">{course.semester}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
        
        <div className="flex space-x-4 mt-8">
          <Link 
            href={`/departments/${departmentId}`}
            className="text-blue-600 hover:underline"
          >
            ← Back to Department
          </Link>
          <Link 
            href="/departments"
            className="text-blue-600 hover:underline"
          >
            View All Departments
          </Link>
        </div>
      </div>
    </div>
  );
}