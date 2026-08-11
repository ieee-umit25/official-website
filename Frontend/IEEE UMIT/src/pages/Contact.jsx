import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import emailjs from "emailjs-com";
import { CheckCircle } from "lucide-react"; 

// member card component
function MemberCard({ name, role, image, email, linkedin }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-lg p-4 mb-3 cursor-pointer transition ${
        open ? "bg-cyan-600/60 dark:bg-cyan-600/40" : "bg-cyan-200/60 dark:bg-cyan-900/40"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{name}</h3>
            {open && role && <p className="text-sm opacity-80">{role}</p>}
          </div>
        </div>
        <span className="text-xl">
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </span>
      </div>

      {open && (
        <div className="mt-3 flex space-x-4">
          {email && (
            <a
              href={`mailto:${email}`}
              className="opacity-80 hover:opacity-100"
            >
              <MailIcon />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100"
            >
              <LinkedInIcon />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // hide after 3s
  };

  const members = [
    {
      name: "Dr. Shikha Nema",
      role: "Professor, (HoD of ENC)",
      image:
        "https://res.cloudinary.com/dunstvosl/image/upload/v1759424067/WhatsApp_Image_2025-10-02_at_8.50.24_PM_jvby67.jpg",
      email: "mailto:ieeeumit2025.26@gmail.com/",
      linkedin: "https://www.linkedin.com/company/umit-ieee",
    },
    {
      name: "Shalvi Yeole",
      role: "IEEE Chairperson",
      image:
        "https://res.cloudinary.com/dunstvosl/image/upload/c_fill,w_800,h_700,g_face/IMG-20250914-WA0011_1_pttydi.jpg",
      email: "yeoleshalvi05@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/shalvi-yeole-15b74b312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Srushti Desai",
      role: "IEEE Co-Chairperson",
      image:
        "https://res.cloudinary.com/dunstvosl/image/upload/c_fill,w_800,h_700,g_faces/v1757870293/IMG-20250914-WA0015_1_f2hywf.jpg",
      email: "srushtiii2005@gmail.com",
      linkedin: "www.linkedin.com/in/srushti-desai-96417b2ab",
    },
    {
      name: "Vaishnavi Balodhi",
      role: "IEEE Secretary",
      image:
        "https://res.cloudinary.com/dunstvosl/image/upload/v1759485175/Screenshot_2025-10-03_152229_uw3xqq.png",
      email: "vbalodhi3155@gmail.com",
      linkedin: "https://www.linkedin.com/in/vaishnavi-balodhi-265828279/",
    },
    {
      name: "Gayatri Naik",
      role: "IEEE Treasurer",
      image:
        "https://res.cloudinary.com/dunstvosl/image/upload/c_fill,w_800,h_700,g_faces/v1757869956/IMG-20250914-WA0013_1_egk1eo.jpg",
      email: "gmnaik7474@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/gayatri-naik-7b1494208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fld3jzn",
        "template_hwupvol",
        e.target,
        "5YFpsBQZwhrKjW2BD"
      )
      .then(
        () => {
          handleClick();
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section className="dark:text-white dark:bg-[hsl(222.2_47.4%_11.2%)] mx-auto py-12 px-6 sm:px-10 lg:px-20 bg-inherit text-inherit">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
        <p className="text-lg md:text-xl opacity-80 mt-4">
          We&apos;d love to hear from you! Whether you have a question,
          suggestion, or just want to say hello, feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* contact form */}
        <div className="rounded-lg p-6 shadow-lg bg-gray-100 dark:bg-gray-800">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Send a Message
          </h3>
          <form className="space-y-4" onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="p-3 rounded-md w-full bg-white dark:bg-gray-700 shadow-sm focus:outline-none"
                required
              />
              <input
                type="text"
                name="user_contact"
                placeholder="Contact Number"
                className="p-3 rounded-md w-full bg-white dark:bg-gray-700 shadow-sm focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_year"
                placeholder="Year"
                className="p-3 rounded-md w-full bg-white dark:bg-gray-700 shadow-sm focus:outline-none"
              />
              <input
                type="text"
                name="user_branch"
                placeholder="Branch"
                className="p-3 rounded-md w-full bg-white dark:bg-gray-700 shadow-sm focus:outline-none"
              />
            </div>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="p-3 rounded-md w-full bg-white dark:bg-gray-700 shadow-sm focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-md w-full bg-white dark:bg-gray-700 shadow-sm focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full font-semibold bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-500 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* member section */}
        <div>
          {members.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
      
      {showPopup && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg 
                          bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100
                          transition-all">
            <CheckCircle className="text-green-500" />
            <span>Message sent successfully!</span>
          </div>
        </div>
      )}
    </section>
  );
}
