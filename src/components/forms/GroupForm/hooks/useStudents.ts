import { useState } from 'react';

export const useStudents = () => {
  const [selectedStudent, setSelectedStudent] = useState<{
    name: string;
  } | null>(null);
  const [selectedStudents, setSelectedStudents] = useState<{ name: string }[]>(
    [],
  );
  const [showStudentSearch, setShowStudentSearch] = useState(false);

  const handleStudentSelect = (student: { name: string }) => {
    if (
      !selectedStudents.some(
        s => s.name.toLowerCase() === student.name.toLowerCase(),
      )
    ) {
      setSelectedStudents(prev => [...prev, student]);
    }
    setSelectedStudent(null);
  };

  const toggleStudentSearch = () => {
    setShowStudentSearch(prev => !prev);
  };

  const removeStudent = (studentName: string) => {
    setSelectedStudents(prev =>
      prev.filter(student => student.name !== studentName),
    );
  };

  return {
    selectedStudent,
    selectedStudents,
    showStudentSearch,
    handleStudentSelect,
    toggleStudentSearch,
    removeStudent,
  };
};
