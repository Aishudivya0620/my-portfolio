import { ProjectProps } from "../components/ProjectCard";
import bot from "../images/bot-manager.jpg";
import registration from "../images/registration.jpg";
import patient from "../images/patient.jpg";

export const projects: ProjectProps[] = [
  {
    id: "1",
    title: "Bot-Manager",
    description:
      "Bot-Manager is a client-focused WhatsApp automation platform designed to simplify communication and improve outreach. The application enables clients to efficiently manage users and send bulk messages, including text, images, and YouTube video links via WhatsApp. It also includes an insightful summary dashboard to monitor message delivery and engagement.",
    imageUrl: bot,
    technologies: ["HTML/CSS", "Javascript", "MongoDB"],
    category: "office",
  },
  {
    id: "2",
    title: "Alumni-Registration",
    description:
      "Alumni Registration is a web-based application designed to collect and manage data of recently graduated students. The platform stores alumni contact details, enabling institutions to maintain a strong alumni network and streamline communication for event announcements, reunions, or important updates",
    imageUrl: registration,
    technologies: ["HTML/CSS", "Javascript", "MongoDB"],
    category: "office",
  },
  {
    id: "3",
    title: "TelleCaller Application",
    description:
      "TelleCaller is a web-based application developed for a medical hospital to help collect patient information and efficiently manage appointment bookings. The platform is designed to assist call center staff or front desk employees in gathering patient data over the phone and scheduling appointments with doctors in real-time.",
    imageUrl: patient,
    technologies: ["Vuejs", "MongoDB", "Tailwind CSS"],
    category: "office",
  },
  {
    id: "4",
    title: "Social Media Dashboard",
    description:
      "A comprehensive analytics dashboard for social media managers showing engagement metrics, audience growth, and content performance across platforms.",
    imageUrl:
      "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Tailwind CSS"],
    category: "personal",

    liveUrl: "https://example.com/social-dashboard",
    githubUrl: "https://github.com/username/social-dashboard",
  },
  {
    id: "5",
    title: "Fitness Tracking App",
    description:
      "A mobile-first application for tracking workouts, nutrition, and progress with data visualization and personalized workout recommendations.",
    imageUrl:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", " Tailwind CSS"],
    category: "personal",

    liveUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/username/fitness",
  },
  {
    id: "6",
    title: "Real Estate Listing Platform",
    description:
      "A comprehensive platform for property listings featuring search filters, interactive maps, virtual tours, and mortgage calculators.",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Tailwind CSS", "MongoDB"],
    category: "personal",

    liveUrl: "https://example.com/realestate",
    githubUrl: "https://github.com/username/realestate",
  },
];
