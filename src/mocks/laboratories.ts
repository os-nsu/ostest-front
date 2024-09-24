import { Laboratory } from '../types/labratory';

export const laboratories: Laboratory[] = [
  {
    id: 1,
    name: 'Лабораторная работа №1',
    description: 'Изучение основ программирования.',
    deadline: new Date('2024-10-10'), // Устанавливаем дату дедлайна
    isHidden: false, // Лабораторная видна
    semesterNumber: 1, // Номер семестра
  },
  {
    id: 2,
    name: 'Лабораторная работа №2',
    description:
      'Разработка веб-приложений с использованием HTML, CSS и JavaScript.',
    deadline: new Date('2024-11-01'),
    isHidden: false,
    semesterNumber: 1,
  },
  {
    id: 3,
    name: 'Лабораторная работа №3',
    description: 'Работа с базами данных и SQL-запросами.',
    deadline: new Date('2024-12-05'),
    isHidden: true, // Лабораторная скрыта
    semesterNumber: 1,
  },
];
