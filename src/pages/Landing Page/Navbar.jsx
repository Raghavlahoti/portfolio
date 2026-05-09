import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onReachOutClick }) => {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isMenuOpen]);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.5 },
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: { duration: 0.5 },
        },
    };

    return (
        <>
            <header
                className="
                fixed top-0 left-0 w-full z-[100]
                flex justify-center items-center
                border-b border-white/10
                bg-black/30
                backdrop-blur-2xl
                shadow-[0_10px_80px_rgba(0,0,0,0.45)]
                transition-all duration-500
            "
            >
                <nav className="flex items-center justify-between w-[90%] md:w-[78%] py-5">

                    {/* LOGO */}

                    <div
                        onClick={() => navigate("/")}
                        className="
                        text-2xl md:text-3xl
                        font-gb
                        leading-4 md:leading-5
                        text-white
                        cursor-pointer
                        tracking-tight
                    "
                    >
                        Raghav
                        <span className="text-[#2FA4FF]">
                            <br />
                            Lahoti
                        </span>
                    </div>

                    {/* DESKTOP NAV */}

                    <div className="hidden md:flex items-center gap-3">

                        <button
                            onClick={() => navigate("/work")}
                            className="
                            px-7 py-3 rounded-full
                            font-gb border border-white/15
                            text-white bg-white/5
                            backdrop-blur-xl
                            hover:bg-[#2FA4FF]
                            hover:text-black
                            hover:scale-105
                            transition-all duration-500
                        "
                        >
                            Work
                        </button>

                        <button
                            onClick={() => navigate("/")}
                            className="
                            px-7 py-3 rounded-full
                            font-gb bg-white text-black
                            border border-white/10
                            hover:bg-[#2FA4FF]
                            hover:scale-105
                            transition-all duration-500
                        "
                        >
                            Background
                        </button>

                        <button
                            onClick={onReachOutClick}
                            className="
                            px-7 py-3 rounded-full
                            font-gb border border-white/15
                            text-white bg-white/5
                            backdrop-blur-xl
                            hover:bg-[#2FA4FF]
                            hover:text-black
                            hover:scale-105
                            transition-all duration-500
                        "
                        >
                            Reach Out
                        </button>
                    </div>

                    {/* MOBILE MENU BUTTON */}

                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span
                            className={`block absolute h-0.5 w-7 bg-white rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 top-5" : "top-3"
                                }`}
                        ></span>

                        <span
                            className={`block absolute h-0.5 w-7 bg-white rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : "top-5"
                                }`}
                        ></span>

                        <span
                            className={`block absolute h-0.5 w-7 bg-white rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-5" : "top-7"
                                }`}
                        ></span>
                    </button>
                </nav>
            </header>

            {/* MOBILE MENU */}

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="
                        fixed inset-0 z-[99]
                        bg-[#050505]/95
                        backdrop-blur-2xl
                        md:hidden
                    "
                    >
                        <div className="flex flex-col items-center justify-center h-screen gap-6">

                            <button
                                onClick={() => {
                                    navigate("/work");
                                    setIsMenuOpen(false);
                                }}
                                className="
                                w-[240px]
                                py-4 rounded-full
                                border border-white/10
                                bg-white/5
                                text-white font-gb
                                hover:bg-[#2FA4FF]
                                hover:text-black
                                transition-all duration-500
                            "
                            >
                                Work
                            </button>

                            <button
                                onClick={() => {
                                    navigate("/");
                                    setIsMenuOpen(false);
                                }}
                                className="
                                w-[240px]
                                py-4 rounded-full
                                bg-white text-black
                                font-gb
                                hover:bg-[#2FA4FF]
                                transition-all duration-500
                            "
                            >
                                Background
                            </button>

                            <button
                                onClick={() => {
                                    onReachOutClick();
                                    setIsMenuOpen(false);
                                }}
                                className="
                                w-[240px]
                                py-4 rounded-full
                                border border-white/10
                                bg-white/5
                                text-white font-gb
                                hover:bg-[#2FA4FF]
                                hover:text-black
                                transition-all duration-500
                            "
                            >
                                Reach Out
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;