import { 
  Code2, 
  Server, 
  Database, 
  Layout, 
  Smartphone, 
  GitBranchPlus, 
  TestTube, 
  SendHorizonal,
  LayoutDashboard,
  Search,
  Bug,
  FigmaIcon,
  Workflow,
  Milestone,
  Microscope,
} from 'lucide-react';
import { SkillProps } from '../components/SkillItem';

export const skills: SkillProps[] = [
  {
    name: 'JavaScript',
    icon: Code2,
    color: 'bg-yellow-500',
    level: 5,
  },
  // {
  //   name: 'TypeScript',
  //   icon: Code2,
  //   color: 'bg-blue-500',
  //   level: 4,
  // },
  {
    name: 'React',
    icon: Code2,
    color: 'bg-cyan-500',
    level: 5,
  },
  {
    name: 'Node.js',
    icon: Server,
    color: 'bg-green-600',
    level: 4,
  },

   {
    name: 'Postman',
    icon: SendHorizonal,
    color: 'bg-orange-600',
    level: 4,
  },
  // {
  //   name: 'Express',
  //   icon: Server,
  //   color: 'bg-gray-600',
  //   level: 4,
  // },
  {
    name: 'MongoDB',
    icon: Database,
    color: 'bg-green-500',
    level: 3,
  },
  {
    name: 'SQL',
    icon: Database,
    color: 'bg-blue-600',
    level: 3,
  },
  {
    name: 'HTML/CSS',
    icon: Layout,
    color: 'bg-orange-500',
    level: 5,
  },
  {
    name: 'Tailwind CSS',
    icon: Layout,
    color: 'bg-cyan-400',
    level: 4,
  },
  {
    name: 'Reactjs',
    icon: Smartphone,
    color: 'bg-purple-500',
    level: 3,
  },
  {
    name: 'Git',
    icon: GitBranchPlus,
    color: 'bg-red-500',
    level: 4,
  },
  {
    name: 'Testing',
    icon: TestTube,
    color: 'bg-green-400',
    level: 3,
  },
  {
    name: 'UI/UX',
    icon: LayoutDashboard,
    color: 'bg-pink-500',
    level: 4,
  },

  {
    name: 'Figma',
    icon: FigmaIcon,
    color: 'bg-pink-500',
    level: 4,
  },
  {
  name: 'Debugging',
  icon: Bug,
  color: 'bg-red-600', // or any theme color
  level: 4,
}
  // {
  //   name: 'SEO',
  //   icon: Search,
  //   color: 'bg-indigo-500',
  //   level: 3,
  // },
  // {
  //   name: 'CI/CD',
  //   icon: Workflow,
  //   color: 'bg-amber-500',
  //   level: 3,
  // },
  // {
  //   name: 'Agile',
  //   icon: Milestone,
  //   color: 'bg-blue-400',
  //   level: 4,
  // },
];