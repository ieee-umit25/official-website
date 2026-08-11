import React from "react";

const upcomingEvent = {
  title: "HACKFUSION 2026",
  location: "Location : Sardar Patel Institute of Technology, Andheri (W)",
  date: "Date : 7th & 8th February 2026",
  shortDesc: "International Hybrid Hackathon",
  image:
    "https://res.cloudinary.com/dunstvosl/image/upload/v1767864977/hackFusion_ighmce.jpg",
  details:
    "HackFusion 2026 is an international hybrid hackathon co-organized by IEEE UMIT and IEEE SPIT. Taking place on 7–8 February 2026, the event invites innovators and problem-solvers to collaborate on impactful ideas in a high-energy competitive setting. Teams of 2–4 members can participate, with online access available for international teams and offline participation for teams from India. With a total prize pool of ₹1.2 Lakhs, HackFusion is an exciting opportunity to learn, network, and push your creative limits.",
};

const sponsors = [
  {
    name: "SUNY Binghamton University",
    role: "Innovation Partner",
    logo: "https://res.cloudinary.com/dunstvosl/image/upload/v1770410142/bu_wnfo8u.png",
    description:
      "SUNY Binghamton University supports HackFusion 2026 as the Innovation Partner, contributing its strong academic foundation, cutting-edge research culture, and a global perspective that encourages forward-thinking solutions.",
  },
  {
    name: "IMFS",
    role: "Knowledge Partner",
    logo: "https://res.cloudinary.com/dunstvosl/image/upload/v1770410233/IMFS_Logo_Green_8_rafmq2.png",
    link: "https://www.imfs.co.in/",
    description:
      "IMFS joins HackFusion 2026 as the Knowledge Partner, bringing valuable insights into global education and international opportunities, while guiding students toward meaningful academic and career pathways abroad.",
  },
];

export default function UpcomingEventsPage() {
return(
  <div className="dark:text-white text-gray-600 dark:bg-[hsl(222.2_47.4%_11.2%)] min-h-screen flex items-center justify-center">
  <div className="px-4 text-center">
    <h1 className="text-3xl font-semibold">
      Stay tuned for the upcoming event
    </h1>
  </div>
</div>

);
}
