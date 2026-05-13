import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 mt-40">

            {/* BACKGROUND GLOW */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#2FA4FF]/10 blur-[180px] rounded-full"></div>

            <div className="relative z-10 w-[90vw] max-w-[1500px] mx-auto py-28">

                {/* CTA */}
                <div className="text-center mb-24">

                    <p className="uppercase tracking-[0.4em] text-[#777] text-xs mb-6">
                        Let’s Connect
                    </p>

                    <h2 className="text-white text-4xl md:text-6xl xl:text-7xl leading-[1.1] font-gb max-w-5xl mx-auto">
                        Let’s Build Something
                        <span className="text-[#2FA4FF] italic"> Exceptional.</span>
                    </h2>

                    <p className="mt-8 text-[#A5A5A5] text-lg max-w-2xl mx-auto leading-relaxed">
                        Modern interfaces. Smooth motion.
                        Premium digital experiences crafted
                        with precision and creativity.
                    </p>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-10">

                    {/* BRAND */}
                    <div>
                        <h3 className="font-gb text-5xl md:text-7xl text-white leading-[0.9] tracking-tight">
                            Raghav
                            <span className="text-[#2FA4FF]">
                                <br />
                                Lahoti
                            </span>
                        </h3>

                        <p className="mt-6 text-[#777] max-w-md leading-relaxed">
                            Crafting modern digital experiences
                            through cinematic interaction,
                            premium aesthetics, and
                            performance-focused development.
                        </p>
                    </div>

                    {/* SOCIALS */}
                    <div className="flex flex-col items-center md:items-end gap-5">

                        <div className="flex gap-4">

                            <a
                                href="https://www.instagram.com/raghav_lahoti16?igsh=dGs1ZWxodHNxMGNx&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                        w-12 h-12 rounded-full
                        flex items-center justify-center
                        bg-white/5 backdrop-blur-xl
                        border border-white/10
                        text-white
                        hover:bg-[#2FA4FF]
                        hover:text-black
                        hover:scale-110
                        transition-all duration-500
                    "
                            >
                                <FaInstagram size={18} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/raghav-lahoti/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                        w-12 h-12 rounded-full
                        flex items-center justify-center
                        bg-white/5 backdrop-blur-xl
                        border border-white/10
                        text-white
                        hover:bg-[#2FA4FF]
                        hover:text-black
                        hover:scale-110
                        transition-all duration-500
                    "
                            >
                                <CiLinkedin size={18} />
                            </a>

                            <a
                                href="https://github.com/Raghavlahoti"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                        w-12 h-12 rounded-full
                        flex items-center justify-center
                        bg-white/5 backdrop-blur-xl
                        border border-white/10
                        text-white
                        hover:bg-[#2FA4FF]
                        hover:text-black
                        hover:scale-110
                        transition-all duration-500
                    "
                            >
                                <FaGithub size={18} />
                            </a>
                        </div>

                        <span className="text-[11px] tracking-wide text-[#666]">
                            © 2026 Raghav Lahoti. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;