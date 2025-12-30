import { BarChart3Icon, FolderOpenIcon, WandSparklesIcon } from "lucide-react";
import Image from "next/image";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Tech Solutions Inc.",
        logo: (
            <Image
                src="/assets/company-01.svg"
                alt="Tech Solutions Inc. Logo"
                width={40}
                height={40}
            />
        ),
    },
    {
        name: "Global Innovations",
        logo: (
            <Image
                src="/assets/company-02.svg"
                alt="Global Innovations Logo"
                width={40}
                height={40}
            />
        ),
    },
    {
        name: "Future Systems Co.",
        logo: (
            <Image
                src="/assets/company-03.svg"
                alt="Future Systems Co. Logo"
                width={40}
                height={40}
            />
        ),
    },
    {
        name: "Digital Dynamics",
        logo: (
            <Image
                src="/assets/company-04.svg"
                alt="Digital Dynamics Logo"
                width={40}
                height={40}
            />
        ),
    },
    {
        name: "Apex Software",
        logo: (
            <Image
                src="/assets/company-05.svg"
                alt="Apex Software Logo"
                width={40}
                height={40}
            />
        ),
    },
    {
        name: "Innovate Corp.",
        logo: (
            <Image
                src="/assets/company-06.svg"
                alt="Innovate Corp. Logo"
                width={40}
                height={40}
            />
        ),
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
        name: "Mohammed Ihsan PS",
        username: "FOUNDER & CTO OF EBSM MALAYSIA",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 6,
        review: "Their team delivered an exceptional custom software solution that perfectly met our complex business needs. Especially they provided excellent post-launch support. Highly recommend!"
    },
    {
        name: "Abdul Basith",
        username: "FOUNDER & CEO OF IMMIX TECHNOLOGIES",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 6,
        review: "We partnered with them for our Datacenters Portal development, with impressive features for business operations. The results were impressive. Great communication and solid."
    },
    {
        name: "Lorenzo Faletra",
        username: "FOUNDER & CEO OF PARROT SECURITY",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 6,
        review: "Their cloud integration services transformed our workflow. Great communication and Seamless implementation and excellent post-launch support."
    },
    
] as const;
