import { useState } from 'react';

export const useTeachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<{
    name: string;
  } | null>(null);
  const [selectedTeachers, setSelectedTeachers] = useState<{ name: string }[]>(
    [],
  );
  const [showTeacherSearch, setShowTeacherSearch] = useState(false);

  const handleTeacherSelect = (student: { name: string }) => {
    if (
      !selectedTeachers.some(
        s => s.name.toLowerCase() === student.name.toLowerCase(),
      )
    ) {
      setSelectedTeachers(prev => [...prev, student]);
    }
    setSelectedTeacher(null);
  };

  const toggleTeacherSearch = () => {
    setShowTeacherSearch(prev => !prev);
  };

  const removeTeacher = (teacherName: string) => {
    setSelectedTeachers(prev =>
      prev.filter(teacher => teacher.name !== teacherName),
    );
  };

  return {
    selectedTeacher,
    selectedTeachers,
    showTeacherSearch,
    handleTeacherSelect,
    toggleTeacherSearch,
    removeTeacher,
  };
};
