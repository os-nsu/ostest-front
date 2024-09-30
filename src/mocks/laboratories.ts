import { LaboratoryType } from '../types/LaboratoryType';

export const laboratories: LaboratoryType[] = [
  {
    id: 1,
    name: 'Лабораторная работа №1',
    description:
      'Изучение основ программирования является важнейшей частью современного образовательного процесса. В мире, где цифровые технологии становятся неотъемлемой частью практически всех сфер жизни, навыки программирования позволяют не только разбираться в работе компьютерных систем, но и создавать собственные решения, которые могут быть применены в различных областях — от создания простых веб-сайтов до разработки сложных систем искусственного интеллекта. Программирование учит решать задачи, находить и устранять ошибки, работать с данными и алгоритмами, а также структурировать процессы и оптимизировать их выполнение. Оно развивает логику и креативное мышление, что делает его полезным инструментом не только для ИТ-специалистов, но и для всех, кто хочет быть конкурентоспособным в современном мире. Изучение начинается с простых задач и постепенно усложняется, включая такие темы, как переменные, циклы, условия, функции, объекты, массивы, структуры данных, и многое другое. Каждый этап обучения нацелен на то, чтобы студент понимал не только синтаксис языка программирования, но и фундаментальные концепции, которые лежат в основе написания эффективного, чистого и поддерживаемого кода. Важно отметить, что программирование — это не просто набор технических навыков, но и форма мышления, которая помогает эффективно подходить к решению любых задач, будь то задачи автоматизации, анализа данных, разработки программного обеспечения или создания инновационных технологий, которые могут изменить наш мир. Цель изучения основ программирования — не просто научить писать код, но и научить думать как программист, анализировать задачи с точки зрения их структуры, сложности и возможности оптимизации, а также применять эти знания в реальной жизни. В конечном итоге, это обучение открывает двери к множеству возможностей, как в профессиональной карьере, так и в личностном развитии.',
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