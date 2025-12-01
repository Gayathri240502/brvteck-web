import {
  Brain,
  Building2,
  Database,
  UserCog,
  Server,
  Puzzle,
  Cloud,
  TrendingUp,
  GitMerge,
  Code,
  Cpu,
} from "lucide-react";

const Services = [
  {
    id: "1",
    icon: Brain,
    title: "Technology",
    href: "/service/technology",
    category: "AI & Automation",
    description:
      "Leverage cutting-edge AI technologies to automate and optimize enterprise workflows.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Intelligent Automation",
      "AI & ML",
    ],
  },
  {
    id: "2",
    icon: Building2,
    title: "Software Enterprise",
    href: "/service/software-enterprise",
    category: "Enterprise Solutions",
    description:
      "Build and scale enterprise-grade software with modern cloud-native architecture.",
    features: [
      "Enterprise Application Development",
      "Microservices Architecture",
      "API Management",
      "Scalable System Design",
    ],
  },
  {
    id: "3",
    icon: Database,
    title: "Data Engineering & Analytics",
    href: "/service/data-engineering-analytics",
    category: "Data & Analytics",
    description:
      "Transform data into actionable insights using robust engineering pipelines.",
    features: [
      "ETL/ELT Pipeline Development",
      "Data Warehouse Solutions",
      "Real-time Analytics",
    ],
  },
  {
    id: "4",
    icon: UserCog,
    title: "Workforce Management",
    href: "/service/work-force-management",
    category: "Operations & HR",
    description:
      "Optimize your human resources with tools and strategies for efficient workforce planning, scheduling, and performance tracking.",
    features: [
      "Employee Scheduling & Shift Planning",
      "Attendance & Leave Management",
      "Performance Monitoring",
      "HR Analytics & Reporting",
    ],
  },
  {
    id: "5",
    icon: Server,
    title: "IT Infrastructure & Networking",
    href: "/service/it-infrastructure-and-networking",
    category: "Infrastructure",
    description:
      "Design, deploy, and maintain scalable and secure IT infrastructure.",
    features: [
      "Network Architecture Design",
      "Server Virtualization",
      "Load Balancing Solutions",
    ],
  },
  {
    id: "6",
    icon: Puzzle,
    title: "Application Integration",
    href: "/service/application-integration",
    category: "System Integration",
    description:
      "Seamlessly connect and optimize applications across your tech stack.",
    features: [
      "API Development & Integration",
      "Enterprise Service Bus (ESB)",
      "Data Synchronization",
      "Workflow Automation",
    ],
  },
  {
    id: "7",
    icon: Cloud,
    title: "Cloud Services",
    href: "/service/cloud",
    category: "Cloud & DevOps",
    description:
      "Move to the cloud with confidence using robust and scalable strategies.",
    features: [
      "Multi-Cloud Strategy",
      "Cloud Migration Services",
      "Container Orchestration",
      "Cost Optimization",
    ],
  },
  {
    id: "8",
    icon: TrendingUp,
    title: "Consulting Services",
    href: "/service/consulting",
    category: "Advisory",
    description: "Get expert guidance to align your IT with business goals.",
    features: [
      "Digital Strategy Planning",
      "Technology Roadmapping",
      "Process Re-engineering",
      "Change Management",
    ],
  },
  {
    id: "9",
    icon: GitMerge,
    title: "DevOps Services",
    href: "/service/devops",
    category: "Cloud & DevOps",
    description:
      "Accelerate delivery and enhance quality with DevOps best practices.",
    features: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code (IaC)",
      "Automated Testing",
      "Performance Monitoring",
    ],
  },
  {
    id: "10",
    icon: Code,
    title: "Custom Software Development",
    href: "/service/custom-software-development",
    category: "Software Development",
    description:
      "Tailored software solutions built to solve specific business needs.",
    features: [
      "Full-Stack Development",
      "Progressive Web Apps",
      "Mobile Application Development",
    ],
  },
  {
    id: "11",
    icon: Cpu,
    title: "Custom Embedded Solutions",
    href: "/service/custom-embedded-solutions",
    category: "Embedded Systems",
    description:
      "Build powerful and secure embedded solutions for IoT and edge devices.",
    features: [
      "Embedded Software Development",
      "Hardware-Software Integration",
      "IoT Connectivity Solutions",
    ],
  },
];

export default Services;
