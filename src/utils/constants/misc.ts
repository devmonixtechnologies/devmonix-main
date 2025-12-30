import { BarChart3Icon, FolderOpenIcon, WandSparklesIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Tech Solutions Inc.",
        logo: "/assets/company-01.svg",
    },
    {
        name: "Global Innovations",
        logo: "/assets/company-02.svg",
    },
    {
        name: "Future Systems Co.",
        logo: "/assets/company-03.svg",
    },
    {
        name: "Digital Dynamics",
        logo: "/assets/company-04.svg",
    },
    {
        name: "Apex Software",
        logo: "/assets/company-05.svg",
    },
    {
        name: "Innovate Corp.",
        logo: "/assets/company-06.svg",
    }
] as const;

export const PROCESS = [
    {
        title: "Discovery & Planning",
        description: "Collaborate to define project scope, requirements, and strategic goals.",
        icon: FolderOpenIcon,
    },
    {
        title: "Development & Iteration",
        description: "Build and refine software with agile methodologies and continuous feedback.",
        icon: WandSparklesIcon,
    },
    {
        title: "Deployment & Support",
        description: "Launch your solution and provide ongoing maintenance and optimization.",
        icon: BarChart3Icon,
    },
] as const;

export const FEATURES = [
    {
        title: "Custom Software Development",
        description: "Tailored software solutions built to meet your unique business needs.",
    },
    {
        title: "Web and Mobile App Development",
        description: "Building responsive and intuitive applications for all platforms.",
    },
    {
        title: "Cloud Solutions and Integration",
        description: "Leveraging cloud technologies for scalable and efficient operations.",
    },
    {
        title: "UI/UX Design and Prototyping",
        description: "Creating engaging and user-friendly interfaces for optimal experience.",
    },
    {
        title: "Data Analytics and Business Intelligence",
        description: "Transforming raw data into actionable insights for strategic decisions.",
    },
    {
        title: "Quality Assurance and Testing",
        description: "Ensuring robust and bug-free software through comprehensive testing.",
    },
] as const;

export const REVIEWS = [
    {
        name: "Sarah Chen",
        username: "@sarahc",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 5,
        review: "Their team delivered an exceptional custom software solution that perfectly met our complex business needs. Highly recommend!"
    },
    {
        name: "David Lee",
        username: "@davidl",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 6,
        review: "We partnered with them for our mobile app development, and the results were impressive. Great communication and a solid product."
    },
    {
        name: "Jessica Kim",
        username: "@jessicak",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 5,
        review: "Their cloud integration services transformed our workflow. Seamless implementation and excellent post-launch support."
    },
    
] as const;
