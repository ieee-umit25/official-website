import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const scImg =
"https://res.cloudinary.com/dunstvosl/image/upload/v1757869973/IMG-20250914-WA0011_1_pttydi.jpg"
// ================= (SC) =================
const members = [
  {
    name: "Shalvi Yeole",
    role: "Chairperson",
    email: "yeoleshalvi05@gmail.com",
    linkedin: "https://www.linkedin.com/in/shalvi-yeole-15b74b312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // github: "https://github.com/shalvi",
    img : "https://res.cloudinary.com/dunstvosl/image/upload/c_fill,w_800,h_700,g_faces/v1757869973/IMG-20250914-WA0011_1_pttydi.jpg"
  },
  {
    name: "Srushti Desai",
    role: "Co-Chairperson",
    email: "srushtiii2005@gmail.com",
    linkedin: "https://www.linkedin.com/in/srushti-desai-96417b2ab",
    img:"https://res.cloudinary.com/dunstvosl/image/upload/c_fill,w_800,h_700,g_faces/v1757870293/IMG-20250914-WA0015_1_f2hywf.jpg"

  },
  {
    name: "Vaishnavi Balodhi",
    role: "Secretary",
    img: "https://res.cloudinary.com/dunstvosl/image/upload/v1760027248/WhatsApp_Image_2025-10-09_at_9.49.24_PM_e4lvwk.jpg",
    email: "vbalodhi3155@gmail.com",
    linkedin:"https://www.linkedin.com/in/vaishnavi-balodhi-265828279/",
    // github: "https://github.com/vaishnavi",
  },
  {
    name: "Gayatri Naik",
    role: "Treasurer",
    email: "gmnaik7474@gmail.com",
    linkedin: "https://www.linkedin.com/in/gayatri-naik-7b1494208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://res.cloudinary.com/dunstvosl/image/upload/c_fill,w_800,h_700,g_faces/v1757869956/IMG-20250914-WA0013_1_egk1eo.jpg"
  },
  {
    name: "Rakshanda Arwari",
    role: "Technology & Publicity Director",
    img: "https://res.cloudinary.com/dunstvosl/image/upload/v1759572653/IMG_20250830_004257_297_gsayfd.webp",
    email: "rakshanda@example.com",
    linkedin:"https://www.linkedin.com/in/rakshanda-arwari-712366301"
    // github: "https://github.com/rakshanda",
  },
  {
    name: "Humaira Samani",
    role: "Technology & Publicity Director",
    img: "https://res.cloudinary.com/dunstvosl/image/upload/v1759485520/Screenshot_2025-10-03_152824_s5hgv6.png",
    email: "humairaworkc@gmail.com",
    linkedin: "https://www.linkedin.com/in/samani-humaira/",
  },
  {
    name: "Prachiti Shivalkar",
    role: "Event & Planning",
    email: "prachiti.s0834@gmail.com",
    linkedin:"https://www.linkedin.com/in/prachiti-shivalkar-9683b032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://res.cloudinary.com/dunstvosl/image/upload/c_fill,w_800,h_700,g_faces/v1757869987/IMG-20250914-WA0012_1_mbmelz.jpg"
  },
  {
    name: "Hibah Khatkhatay",
    role: "Event & Planning",
    img: "https://res.cloudinary.com/dunstvosl/image/upload/c_fill,w_800,h_700,g_faces/v1757871846/IMG-20250914-WA0018_1_s9ao9j.jpg",
    email: "hibahkhatkhatay@gmail.com",
    linkedin: "https://www.linkedin.com/in/hibah-khatkhatay-8375b62a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Sharvari Dhekre",
    role: "Art & Cultural Director",
    img: "https://res.cloudinary.com/dunstvosl/image/upload/v1759484874/WhatsApp_Image_2025-10-02_at_10.16.31_PM_cdszdi.jpg",
    linkedin:"https://www.linkedin.com/in/sharvari-dhekre",
    email: "sharvaridhekre05@gmail.com",
  },
  {
    name: "Zineera Kazi",
    role: "Social Media Director",
    img: "https://res.cloudinary.com/dunstvosl/image/upload/v1758983457/ra_hcmyjl.jpg",
    email: "kazizineera@gmail.com",
    linkedin: "https://www.linkedin.com/in/zineera-kazi-07351232a?trk=contact-info",
  },
  {
    name: "Adiba Shaikh",
    role: "Sponsorship & Marketing Director",
    img: "https://res.cloudinary.com/dunstvosl/image/upload/v1758983478/aa_kqjlh5.jpg",
    email: "shaikhadiba0802@gmail.com",
    linkedin:"https://www.linkedin.com/in/adiba-shaikh-569334378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // github: "https://github.com/adiba",
  },
  {
    name: "Bhumika Salvi",
    role: "Sponsorship & Marketing Director",
    img: "https://res.cloudinary.com/dunstvosl/image/upload/v1758983298/WhatsApp_Image_2025-09-27_at_7.45.12_PM_o9gugx.jpg",
    email: "bhumikasalvi29@gmail.com",
    linkedin: "https://www.linkedin.com/company/umit-ieee",
  },
  {
    name: "Parnika Devare",
    role: "Editorial & Community Director",
    img: "https://res.cloudinary.com/dunstvosl/image/upload/v1758983468/ar_qlyubi.jpg",
    email: "parnikadevare444@gmail.com",
    linkedin:"https://www.linkedin.com/in/parnika-devare-2631012bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Mugdha Bhavsar",
    role: "External Affairs Director",
    email: "mugdhabhavsar23@gmail.com",
    linkedin: "https://www.linkedin.com/in/mugdha-bhavsar-9609ab299",
    github: "https://github.com/mugdha",
    img:"https://res.cloudinary.com/dunstvosl/image/upload/c_fill,w_800,h_700,g_faces/v1757869999/IMG-20250914-WA0014_1_qgwe3w.jpg"
  },
];

// ================= (JC) =================
const juniorCouncil = [
  { name: "Hritika Chavan", role: "Technical & Publicity" },
  { name: "Chanda Jha", role: "Technical & Publicity" },
  { name: "Riya Sewatkar", role: "Technical & Publicity" },
   { name: "Shreya Tripathi", role: "Technical & Publicity" },

  { name: "Riddhi Vartak", role: "Events & Planning" },
  { name: "Tripti Sinha", role: "Events & Planning" },
  { name: "Riddhi Shende", role: "Events & Planning" },
  
  { name: "Sharvee Churi", role: "Art & Culture" },
  { name: "Srushti Yeltiwar", role: "Art & Culture" },

  { name: "Neettasha Wankhade", role: "Social Media" },
  { name: "Khushi Taneja", role: "Social Media" },
  { name: "Surabhi Sawant", role: "Social Media" },

  { name: "Riya Dwivedi", role: "Sponsorships" },
  { name: "Kanishka Gaikwad", role: "Sponsorships" },
  { name: "Aditi Pawar", role: "Sponsorships" },
  { name: "Samruddhi Badjate", role: "Sponsorships" },

  { name: "Maithili Yadav", role: "Editorial" },
  { name: "Pooja Zore", role: "Editorial" },
  
  { name: "Sabrin Rowther", role: "External Affairs" },
  { name: "Anika Kabra", role: "External Affairs" },
  { name: "Srushti Deshpande", role: "External Affairs" },
];

const faculty = {
  name: "Dr. Shikha Nema",
  role: "Professor, (HoD of ENC)",
  img: "https://res.cloudinary.com/dunstvosl/image/upload/v1759424067/WhatsApp_Image_2025-10-02_at_8.50.24_PM_jvby67.jpg",
  email: "#",
  linkedin:"https://www.linkedin.com/company/umit-ieee"
};

// hero section
const HeroSection = ({ title, subtitle, bgImage }) => (
  <section
    className="relative h-72 flex flex-col items-center justify-center bg-cover bg-center text-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="absolute inset-0 bg-blue-50 dark:bg-gray-800 bg-opacity-70 "></div>
    <h1 className="relative text-4xl md:text-5xl font-bold text-cyan-700 dark:text-cyan-400 z-10">
      {title}
    </h1>
    <p className="relative text-lg text-black dark:text-white z-10 mt-2">
      {subtitle}
    </p>
  </section>
);

// section title
const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold text-cyan-700 dark:text-cyan-400 text-center mb-8 border-b-4 border-cyan-600 dark:border-cyan-600 inline-block pb-2">
    {children}
  </h2>
);

export const MemberCard = ({ name, role, img , linkedin , email}) => (
  <div className="relative bg-white dark:bg-gray-800 border border-cyan-100 dark:border-none rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden group p-6 text-center">
    {img && (
      <img
        src={img}
        alt={name}
        className="w-60 h-60 mx-auto rounded-full object-cover"
      />
    )}

    {/* default name and role */}
    <div className="mt-6 transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{role}</p>
    </div>

    {/* desktop hover */}
    <div
      className="absolute left-1/2 bottom-6 transform -translate-x-1/2 translate-y-10 opacity-0 
                    group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 
                    flex justify-center gap-4 hidden sm:flex"
    >
      <a
        href={`mailto:${email}`} target="_blank"
        className="text-cyan-600 dark:text-cyan-300 hover:scale-110 transition"
      >
        <EmailIcon />
      </a>
      <a
        href={linkedin} target="_blank"
        className="text-cyan-600 dark:text-cyan-300 hover:scale-110 transition"
      >
        <LinkedInIcon />
      </a>
      {/* <a
        href="#"
        className="text-cyan-600 dark:text-cyan-300 hover:scale-110 transition"
      >
        <GitHubIcon />
      </a> */}
    </div>

    {/* mobile touch */}
    <div className="mt-4 flex justify-center gap-4 sm:hidden">
      <a href={`mailto:${email}`} target="_blank" className="text-cyan-600 dark:text-cyan-300">
        <EmailIcon />
      </a>
      <a href={linkedin} target="_blank" className="text-cyan-600 dark:text-cyan-300">
        <LinkedInIcon />
      </a>
    </div>
  </div>
);

const JuniorCard = ({ name, role }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-4 text-center">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
      {name}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">{role}</p>
  </div>
);

export function Council() {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-100">
      {/* hero sec */}
      <HeroSection
        title="Meet Our Team"
        subtitle="The driving force behind our success"
        bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1950&q=80"
      />

      {/* FA */}
      <section className="px-6 md:px-16 py-12 bg-gray-50 dark:bg-gray-900 text-center">
        <SectionTitle>Faculty Advisor</SectionTitle>
        <div className="max-w-sm mx-auto">
          <MemberCard {...faculty} />
          <blockquote className="italic text-lg mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            "IEEE UMIT strives to foster innovation, collaboration, and
            technical excellence among students, helping them grow as future
            leaders."
          </blockquote>
        </div>
      </section>

      {/* SC*/}
      <section className="px-6 md:px-16 py-12 bg-gray-50  dark:bg-gray-900 text-center">
        <SectionTitle>Senior Council</SectionTitle>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
          The leadership team guiding the IEEE Student Chapter
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {members.map((m, i) => (
            <MemberCard key={i} {...m} />
          ))}
        </div>
      </section>

      {/* JC */}
      <section className="px-6 md:px-16 py-12 bg-gray-50  dark:bg-gray-900 text-center">
        <SectionTitle>Junior Council</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {juniorCouncil.map((m, i) => (
            <JuniorCard key={i} {...m} />
          ))}
        </div>
      </section>
    </div>
  );
}
