import i8 from "../../assets/images/tools/ic1 (8).png";
import i33 from "../../assets/images/tools/ic1 (33).png";
import i23 from "../../assets/images/tools/ic1 (23).png";
import i26 from "../../assets/images/tools/ic1 (26).png";

const expertiseGroups = [
  {
    title: "Frontend",
    description: "Interactive, fast, and responsive UIs with modern tools.",
    icon: i26,
    tools: ["React.js", "HTML", "CSS", "JavaScript", "TailwindCSS", "Bulma CSS", "AngularJs", "Bootstrap"],
  },
  {
    title: "Backend",
    description: "APIs, databases, and business logic — all built cleanly.",
    icon: i23,
    tools: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Deployment",
    description: "Reliable deployment platforms for modern web apps.",
    icon: i33,
    tools: ["Vercel", "Render", "GitHub"],
  },
  {
    title: "Programming & Tools",
    description: "Clean code practices, version control, and scripting.",
    icon: i8,
    tools: ["Python", "C", "C++", "Core Java", "Git", "GitHub", "Figma", "VS Code", "WordPress", "Avada Builder"],
  },
];

const Expertise = () => {
  return (
    <section className="w-full h-auto rounded-4xl px-2 md:px-10 2xl:px-32">
      <h2 className="text-white text-4xl md:text-6xl font-gm mb-12 tracking-tight">
        My <span className="text-[#2FA4FF]">Expertise</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {expertiseGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl p-8 bg-[#111] border border-[#222] flex flex-col justify-between shadow-xl hover:scale-[1.03] transition-transform duration-300 group"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src={group.icon} alt={group.title} className="w-12 h-12 object-contain" />
                <h3 className="text-2xl font-gb text-white">{group.title}</h3>
              </div>
              <p className="text-[#b0b0b0] text-base mb-6">{group.description}</p>
              <div className="flex flex-wrap gap-3">
                {group.tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 bg-[#181818] px-3 py-1 rounded-full text-white text-xs font-gr border border-[#222]"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center gap-4">
        <span className="text-xs text-[#9D9D9D] font-gr">
          *Continuously learning and improving
        </span>
        <a
          href="https://www.linkedin.com/in/raghav-lahoti/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-0 md:ml-6 text-xs text-[#2FA4FF] font-gr underline hover:text-white transition"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Expertise;
