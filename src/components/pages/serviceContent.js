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
    title: "lorem of all lorems",
    link: "/services/ssl-certificate",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: LockClosedIcon,
    imageUrl: "path/to/image2.jpg",
  },
  {
    id: "push-to-deploy",
    name: "Push to Deploy",
    title: "This one",
    link: "/services/push-to-deploy",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: CloudArrowUpIcon,
    imageUrl: "path/to/image1.jpg",
  },
  {
    id: "simple-queues",
    name: "Simple Queues",
    title: "Simple Queues",
    link: "/services/simple-queues",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ArrowPathIcon,
    imageUrl: "path/to/image3.jpg", // Add a path for the image
  },
  {
    id: "advanced-security",
    name: "Advanced Security",
    title: "Advanced Security",
    link: "/services/advanced-security",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ShieldCheckIcon,
    imageUrl: "path/to/image4.jpg", // Add a path for the image
  },
  {
    id: "powerful-api",
    name: "Powerful API",
    title: "Powerful API",
    link: "/services/powerful-api",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: CogIcon,
    imageUrl: "path/to/image5.jpg", // Add a path for the image
  },
  {
    id: "database-backups",
    name: "Database Backups",
    title: "Database Backups",
    link: "/services/database-backups",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
    imageUrl: "path/to/image6.jpg", // Add a path for the image
  },
];
