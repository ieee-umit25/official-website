

function TestimonialCard({ text, name, role, image }) {
  return (
    <div className="border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition duration-300">
      <p className="text-gray-700 dark:text-gray-300  text-medium leading-relaxed mb-6">"{text}"</p>
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-300">{name}</h4>
          <p className="text-cyan-600 text-sm font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      text: "Being the Chairperson has been a rewarding journey—leading projects and guiding members has shaped my leadership and teamwork skills.",
      name: "Tejashree Deore",
      role: "Chairperson",
      image: "https://res.cloudinary.com/dunstvosl/image/upload/v1759506135/Screenshot_2025-10-03_211054_ayb67s.png",
    },
    {
      text: "As Vice Chairperson, I’ve had the opportunity to coordinate events and expand my professional network beyond academics.",
      name: "Sanjana Shetty",
      role: "Co-Chairperson",
      image: "https://res.cloudinary.com/dunstvosl/image/upload/v1759506217/Screenshot_2025-10-03_211327_hnjdaw.png",
    },
    {
  text: "Serving as the Secretary has improved my organizational and communication skills. IEEE gave me the platform to document, coordinate, and keep our team aligned.",
  name: "Tanishqua Tidke",
  role: "Secretary",
  image: "https://res.cloudinary.com/dunstvosl/image/upload/v1759506240/Screenshot_2025-10-03_211351_yys1ot.png",
}
,
    {
      text: "IEEE has enhanced my skills in management and collaboration. Serving as Treasurer helped me learn accountability and leadership.",
      name: "Anjali Sanap",
      role: "Treasurer",
      image: "https://res.cloudinary.com/dunstvosl/image/upload/v1759506257/Screenshot_2025-10-03_211408_wfevz4.png",
    },
  ];

  return (
    <section className="py-16 bg-inherit">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Members Say</h2>
        <p className="text-gray-600 dark:text-white mb-12">
          Hear from our members about their IEEE journey and leadership roles
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              text={t.text}
              name={t.name}
              role={t.role}
              image={t.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
