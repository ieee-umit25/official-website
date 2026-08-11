import  {MemberCard}  from "../pages/Council";

const scImg =
  "https://res.cloudinary.com/ddhhqsm5p/image/upload/c_fill,w_1300,h_700,g_west,/v1756571844/WhatsApp_Image_2025-08-30_at_22.07.02_ee0c59ec_avlffx.jpg";


export function Developer(){
    const members = [
  {
    name: "Humaira Samani",
    role: "Technology and Publicity Director",
    email: "humairaworkc@gmail.com",
    linkedin: "https://www.linkedin.com/in/samani-humaira/",
    github: "https://github.com/Samani-Humaira/",
    img : "https://res.cloudinary.com/dunstvosl/image/upload/v1759509526/Humaira_ulcxsr.png"
  },
  {
    name: "Rakshanda Arwari",
    role: "Technology and Publicity Director",
    email: "rakshandaarwari659@gmail.com",
    linkedin: "https://www.linkedin.com/in/rakshanda-arwari-712366301",
    img:"https://res.cloudinary.com/dunstvosl/image/upload/v1759572653/IMG_20250830_004257_297_gsayfd.webp",
  },
  {
    name: "Riya Kailash Sewatkar",
    role: "Tech & Publicity JC",
    img:"https://res.cloudinary.com/dunstvosl/image/upload/c_fill,g_face,h_700,w_800,y_50/v1759421413/20250916_204251_bbbaem.jpg",
    linkedin:"https://www.linkedin.com/in/riya-sewatkar-7a74b332a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "#",
    github: "https://github.com/riya1730",
  },
  {
    name: "Hritika Chavan",
    role: "Tech & Publicity JC",
    email: "#",
    linkedin: "https://www.linkedin.com/in/hritika-chavan-68865932b",
    img:"https://res.cloudinary.com/dunstvosl/image/upload/v1759509359/Screenshot_2025-10-03_220547_onlqse.png"
  },
  {
    name: "Chanda Rakesh Jha",
    role: "Tech & Publicity JC",
    img: "https://res.cloudinary.com/dunstvosl/image/upload/c_fill,w_800,h_900/v1759421441/IMG-20250927-WA0100_mum9ds.jpg",
    email: "#",
    linkedin:"https://www.linkedin.com/in/chanda-rakesh-jha-340b5432a",
    github: "https://github.com/chandajha7570",
  },
  {
    name: "Shreya Tripathi",
    role: "Tech & Publicity JC",
    img: "https://res.cloudinary.com/dunstvosl/image/upload/c_fill,w_800,h_900/v1759421465/c5ae6244-ab22-456e-9ac0-6c289adac06f_nvsj2w.jpg",
    email: "#",
    linkedin: "https://www.linkedin.com/in/shreya-tripathi-sndt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github:"https://github.com/shrwya"
  }
];
    return(
        <>
         <section className="px-6 md:px-16 py-12 bg-gray-50  dark:bg-gray-900 text-center">
        {/* <SectionTitle>Senior Council</SectionTitle> */}
        <p className="max-w-4xl mx-auto text-4xl font-semibold leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
          MINDS BEHIND THE CODE
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {members.map((m, i) => (
            <MemberCard key={i} {...m} />
          ))}
        </div>
      </section>
         
    </>
    );
}