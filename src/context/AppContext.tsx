
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define types for our context
type Department = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

type Curriculum = {
  departmentId: string;
  courses: Array<{
    id: string;
    code: string;
    title: string;
    description: string;
    creditHours: number;
    level: string;
    semester: string;
  }>;
};

type AppContextType = {
  departments: Department[];
  curriculums: Record<string, Curriculum>;
  currentDepartment: Department | null;
  setCurrentDepartment: (department: Department | null) => void;
  loading: boolean;
  error: string | null;
};

// Create the context with default values
const AppContext = createContext<AppContextType>({
  departments: [],
  curriculums: {},
  currentDepartment: null,
  setCurrentDepartment: () => {},
  loading: false,
  error: null,
});

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);

// Provider component
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [curriculums, setCurriculums] = useState<Record<string, Curriculum>>({});
  const [currentDepartment, setCurrentDepartment] = useState<Department | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch departments and curriculum data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // In a real application, these would be API calls
        // For now, we're importing from our data files
        // This would be replaced with actual API calls
        const deptData = await import('../data/departments');
        const currData = await import('../data/curriculum');
        
        setDepartments(deptData.departments);
        setCurriculums(currData.curriculums);
        setLoading(false);
      } catch (err) {
        setError('Failed to load data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Value object that will be provided to consumers
  const value = {
    departments,
    curriculums,
    currentDepartment,
    setCurrentDepartment,
    loading,
    error,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};