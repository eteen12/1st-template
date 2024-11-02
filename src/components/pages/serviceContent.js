import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export const companyServices = [
  {
    id: "ssl-certificate",
    name: "SSL Certificates",
    title: "Secure Your Website with SSL",
    header1: "Why Choose SSL?",
    header2: "The Importance of Security",
    description1:
      "SSL (Secure Sockets Layer) encrypts the connection between your website and its users.",
    description2:
      "Enhance user trust and improve SEO rankings with our reliable SSL certificates.",
    link: "/services/ssl-certificate",
    description:
      "Protect your website and build trust with SSL certificates, ensuring secure connections for your users.",
    icon: LockClosedIcon,
    imageUrl: "path/to/image2.jpg",
  },
  {
    id: "push-to-deploy",
    name: "Push to Deploy",
    title: "Effortless Deployment",
    header1: "Instant Updates",
    header2: "Maximize Efficiency",
    description1: "Deploy your changes with a single command.",
    description2:
      "Streamline your workflow and reduce downtime with automatic deployments.",
    link: "/services/push-to-deploy",
    description:
      "Easily deploy your latest changes to production with our Push to Deploy feature, ensuring your site is always up to date.",
    icon: CloudArrowUpIcon,
    imageUrl: "path/to/image1.jpg",
  },
  {
    id: "simple-queues",
    name: "Simple Queues",
    title: "Manage Tasks Seamlessly",
    header1: "Efficient Task Management",
    header2: "Simplify Processes",
    description1: "Organize your workflows with simplicity and efficiency.",
    description2: "Easily manage background processes to improve performance.",
    link: "/services/simple-queues",
    description:
      "Implement a straightforward queue system to handle tasks without hassle, improving your application’s efficiency.",
    icon: ArrowPathIcon,
    imageUrl: "path/to/image3.jpg",
  },
  {
    id: "advanced-security",
    name: "Advanced Security",
    title: "Protect Your Data",
    header1: "Comprehensive Security Solutions",
    header2: "Stay Ahead of Threats",
    description1: "Keep your data safe with our advanced security measures.",
    description2: "Utilize multi-layered protection to safeguard your assets.",
    link: "/services/advanced-security",
    description:
      "Enhance your website’s security with our advanced solutions, including firewalls and monitoring services to protect against threats.",
    icon: ShieldCheckIcon,
    imageUrl: "path/to/image4.jpg",
  },
  {
    id: "powerful-api",
    name: "Powerful API",
    title: "Integrate with Ease",
    header1: "Robust Integration Options",
    header2: "Streamline Development",
    description1: "Connect your applications seamlessly with our powerful API.",
    description2: "Enhance functionality with easy-to-use endpoints.",
    link: "/services/powerful-api",
    description:
      "Leverage our powerful API to connect your applications and services effortlessly, facilitating smooth data exchange and functionality.",
    icon: CogIcon,
    imageUrl: "path/to/image5.jpg",
  },
  {
    id: "database-backups",
    name: "Database Backups",
    title: "Safeguard Your Data",
    header1: "Reliable Backup Solutions",
    header2: "Ensure Data Integrity",
    description1: "Protect your valuable data with automated backups.",
    description2: "Restore your database with ease when needed.",
    link: "/services/database-backups",
    description:
      "Ensure your data is safe with our comprehensive backup solutions, allowing for quick recovery in case of data loss.",
    icon: ServerIcon,
    imageUrl: "path/to/image6.jpg",
  },
];
