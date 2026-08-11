import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";

export const EventCard = ({ title, date, description, image, type, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group rounded-xl overflow-hidden shadow-lg w-full max-w-xs h-[450px] mx-auto cursor-pointer"
      onClick={() => setIsOpen(!isOpen)} // Toggle overlay on mobile click
    >
      {/* Event image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Type badge */}
      <span className="absolute top-3 right-3 font-bold bg-[hsl(222.2_47.4%_11.2%)] text-white text-xs px-3 py-1 rounded-full">
        {type}
      </span>

      {/* Overlay */}
      <div
        className={`
          absolute inset-0 bg-black/80 text-white flex flex-col justify-center p-6 
          transition-all duration-500 ease-out
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"}
        `}
      >
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-4">{description}</p>

        <div className="flex items-center text-sm mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>

        {location && (
          <div className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
        )}
      </div>
    </div>
  );
};



const pastEvents = [
   {
    title: "Murder Mystery (IEEE Day Pre Event)",
    date: "Sep 30, 2024",
    description: "An interactive pre-event to IEEE Day, designed to challenge participants’ critical thinking and teamwork skills through an immersive murder mystery experience.",
    image: "https://res.cloudinary.com/dunstvosl/image/upload/v1759502066/Screenshot_2025-10-03_200401_lxsux5.png", 
    type: "IEEE DAY PRE EVENT",
    location: "UMIT , Conference Room",
  },
  {
    title: "IEEE Day 2024-25",
    date: "Oct 01, 2024",
    description: "Celebrating IEEE Day with talks, networking, competition and innovation showcases.",
    image: "https://res.cloudinary.com/dunstvosl/image/upload/v1759501663/Screenshot_2025-10-03_195732_bzay7h.png",
    type: "IEEE DAY",
    location: "UMIT , Conference Room",
  },
  {
  title: "Gen AI with Pieces",
  date: "Nov 14, 2024",
  description: "Introductory Workshop on Gen AI fundamentals using Pieces.",
  image: "https://res.cloudinary.com/dunstvosl/image/upload/v1759501529/Screenshot_2025-10-03_195511_jp1emn.png",
  type: "WORKSHOP",
  location: "UMIT , Room No 405"
},
  {
    title: "Industrial Visit - Udaipur, Jodhpur, Jaisalmer & Sam(Desert)",
    date: "Dec 28-29, 2024",
    description: "An educational industrial visit combined with travel experiences in Udaipur, Jodhpur, Jaisalmer and Sam(Desert).",
    image: "https://res.cloudinary.com/dunstvosl/image/upload/v1759510398/Screenshot_2025-10-03_222207_a2n07j.png", 
    type: "INDUSTRIAL VISIT",
    location: "Udaipur, Jodhpur, Jaisalmer, Sam(Desert)",
  },
  {
    title: "HackX 2024-25",
    date: "Feb 22-23, 2025",
    description: "Annual Hackathon HackX 2024-25 featuring student innovation and problem solving.",
    image: "https://res.cloudinary.com/dunstvosl/image/upload/v1759501305/Screenshot_2025-10-03_195115_es91pf.png",
    type: "HACKATHON",
    location: "NMIMS Navi Mumbai",
  },
];


export default function PastEventsPage() {
  return (
    <div className="dark:text-white dark:bg-[hsl(222.2_47.4%_11.2%)]">
        <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center dark:text-gray-300 text-gray-700 mb-6">
        PAST ACTIVITIES
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {pastEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
    </div>
  );
}
