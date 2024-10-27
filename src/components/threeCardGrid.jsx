import { SlPhone, SlEnvolope, SlLocationPin } from "react-icons/sl";
import Link from "next/link";

const cardsData = [
  {
    title: "Call Us",
    text: "+1(123)-123-1234",
    hyperText: "Give us a call",
    link: "/contact",
    icon: SlPhone,
  },
  {
    title: "Email us",
    text: "your@email.com",
    hyperText: "Send us an email",
    link: "/contact",
    icon: SlEnvolope,
  },
  {
    title: "Visit us in person",
    text: "123 W 70th St",
    hyperText: "See address",
    link: "/contact",
    icon: SlLocationPin,
  },
];

export default function ThreeCardGrid() {
  return (
    <div className="grid grid-cols-1 max-w-7xl h-[400px] md:h-[250px] lg:h-[220px] mx-auto px-8 sm:px-6 md:grid-cols-3 ">
      {cardsData.map((card, index) => {
        const IconComponent = card.icon;

        // Conditional styles for the third card
        const isThirdCard = index === 2;
        const cardBgClass = isThirdCard ? "bg-indigo-500" : "bg-white";
        const iconBgClass = isThirdCard ? "bg-white" : "bg-indigo-500";
        const iconColorClass = isThirdCard ? "text-indigo-500" : "text-white";
        const iconTextColorClass = isThirdCard ? "text-white" : "text-black";
        const iconTextHoverColor = isThirdCard
          ? "hover:text-black"
          : "hover:text-indigo-500";

        return (
          <div
            key={index}
            className={`w-full h-full flex flex-row md:flex-col lg:flex-row justify-start   ${iconTextColorClass} p-10  ${cardBgClass}`}
          >
            <div className="w-[80px]">
              <div
                className={`w-16 h-16 flex items-center justify-center md:mb-2 lg:mb-0 ${iconBgClass}`}
              >
                <IconComponent className={`w-10 h-10  ${iconColorClass}`} />
              </div>
            </div>
            <div className="w-[170px] flex flex-col gap-2 ">
              <h2 className="bold text-xl">{card.title}</h2>
              <p className="text-lg mt-2 ">{card.text}</p>
              <Link
                href={card.link}
                className={`underline-animated underline mediumBold text-lg mt-8 ${iconTextHoverColor}  transition-colors ease-in-out duration-300`}
              >
                {card.hyperText}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
