import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import SectionMenu from "../../SectionMenu";
import Education from "./Education";
import Experience from "./Experience";
import Expertise from "./Expertise";
import Footer from "./Footer";
import Mission from "./Mission";
import Navbar from "./Navbar";
import Overview from "./Overview";
import ReachOutDrawer from "./ReachOutDrawer";
import WorkShowcase from "./WorkShowcase";

import video500 from "../../assets/images/500.mp4";
import video700 from "../../assets/images/700.mp4";
import profileImage from "../../assets/images/profile.png";

gsap.registerPlugin(ScrollTrigger);

const LOADER_DURATION = 3200;
const LOADER_FADE = 800;

const PARTICLES = [
    { top: "18%", left: "12%", delay: "0s" },
    { top: "38%", right: "18%", delay: "0.4s" },
    { top: "62%", left: "28%", delay: "0.8s" },
    { top: "55%", right: "32%", delay: "0.2s" },
    { top: "22%", right: "8%", delay: "1.1s" },
    { top: "78%", left: "60%", delay: "0.6s" },
];

const Content = () => {
    const navigate = useNavigate();

    const loaderVideoRef = useRef(null);
    const heroVideoRef = useRef(null);
    const heroTitleRef = useRef(null);
    const heroSubtitleRef = useRef(null);
    const heroButtonsRef = useRef(null);
    const mouseGlowRef = useRef(null);
    const scrollRef = useRef(null);
    const locomotiveRef = useRef(null);

    const [loading, setLoading] = useState(true);
    const [hideLoader, setHideLoader] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        document.documentElement.style.overflow = loading ? "hidden" : "";
        document.body.style.overflow = loading ? "hidden" : "";

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [loading]);

    useEffect(() => {
        const t1 = setTimeout(() => {
            setHideLoader(true);

            const t2 = setTimeout(() => {
                setLoading(false);
            }, LOADER_FADE);

            return () => clearTimeout(t2);
        }, LOADER_DURATION);

        return () => clearTimeout(t1);
    }, []);

    useEffect(() => {
        if (!loading) return;

        const ctx = gsap.context(() => {
            const chars = gsap.utils.toArray(".loader-char");

            gsap.set(chars, {
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
            });

            gsap.to(chars, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                stagger: 0.05,
                duration: 1.2,
                ease: "power3.out",
            });

            gsap.to(chars, {
                opacity: 0.4,
                repeat: -1,
                yoyo: true,
                duration: 0.05,
                delay: 1.5,
                stagger: {
                    each: 0.08,
                    from: "random",
                },
            });
        });

        return () => ctx.revert();
    }, [loading]);

    useEffect(() => {
        if (!scrollRef.current) return;

        locomotiveRef.current = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.08,
            multiplier: 1,
            class: "is-reveal",
        });

        return () => locomotiveRef.current?.destroy();
    }, []);

    useEffect(() => {
        if (loading) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            tl.fromTo(
                heroTitleRef.current,
                {
                    opacity: 0,
                    y: 30,
                    filter: "blur(12px)",
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1,
                }
            )
                .fromTo(
                    heroSubtitleRef.current,
                    {
                        opacity: 0,
                        y: 80,
                        filter: "blur(18px)",
                    },
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 1.3,
                    },
                    "-=0.5"
                )
                .fromTo(
                    heroButtonsRef.current,
                    {
                        opacity: 0,
                        y: 40,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                    },
                    "-=0.7"
                );
        });

        return () => ctx.revert();
    }, [loading]);

    useEffect(() => {
        const el = mouseGlowRef.current;
        if (!el) return;

        const xTo = gsap.quickTo(el, "x", {
            duration: 0.6,
            ease: "power3.out",
        });

        const yTo = gsap.quickTo(el, "y", {
            duration: 0.6,
            ease: "power3.out",
        });

        const onMove = (e) => {
            xTo(e.clientX - 200);
            yTo(e.clientY - 200);
        };

        window.addEventListener("mousemove", onMove);

        return () => {
            window.removeEventListener("mousemove", onMove);
        };
    }, []);

    useEffect(() => {
        const video = heroVideoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => { });
                } else {
                    video.pause();
                }
            },
            { threshold: 0 }
        );

        observer.observe(video);

        return () => observer.disconnect();
    }, []);

    const openDrawer = useCallback(() => {
        setDrawerOpen(true);
    }, []);

    const closeDrawer = useCallback(() => {
        setDrawerOpen(false);
    }, []);

    return (
        <div className="bg-black overflow-hidden">

            <div
                ref={mouseGlowRef}
                className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#2FA4FF]/10 blur-[180px] opacity-70 -z-10"
                aria-hidden="true"
            />

            <AnimatePresence>
                {loading && (
                    <motion.div
                        key="loader"
                        animate={{ opacity: hideLoader ? 0 : 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            ref={loaderVideoRef}
                            className="absolute w-full h-full object-cover opacity-60"
                        >
                            <source src={video700} type="video/mp4" />
                        </video>

                        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

                        <div className="relative z-10 text-center px-6">
                            <h1 className="text-white text-5xl md:text-7xl font-gb leading-[1.15] tracking-tight select-none">
                                {"Raghav".split("").map((char, i) => (
                                    <span key={i} className="inline-block loader-char">
                                        {char}
                                    </span>
                                ))}

                                <br />

                                {"Lahoti".split("").map((char, i) => (
                                    <span
                                        key={i + 20}
                                        className="inline-block loader-char text-[#2FA4FF]"
                                    >
                                        {char}
                                    </span>
                                ))}
                            </h1>

                            <p className="mt-5 uppercase tracking-[0.45em] text-[10px] md:text-xs text-[#9D9D9D]">
                                Creative Developer • UI Designer • Motion Builder
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ReachOutDrawer open={drawerOpen} onClose={closeDrawer} />

            <Navbar
                onReachOutClick={openDrawer}
                isSticky={true}
            />

            <div ref={scrollRef} data-scroll-container>

                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        ref={heroVideoRef}
                        className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
                    >
                        <source src={video500} type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10" />

                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#2FA4FF]/20 blur-[160px] z-10 pointer-events-none" />

                    <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[180px] z-10 pointer-events-none" />

                    <div className="absolute inset-0 z-10 opacity-25 pointer-events-none">
                        {PARTICLES.map((p, i) => (
                            <div
                                key={i}
                                className="absolute w-[3px] h-[3px] bg-white rounded-full animate-pulse"
                                style={{
                                    top: p.top,
                                    left: p.left,
                                    right: p.right,
                                    animationDelay: p.delay,
                                    animationDuration: "2.5s",
                                }}
                            />
                        ))}
                    </div>

                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')] z-10 pointer-events-none" />

                    <div className="relative z-20 w-[88vw] max-w-[1400px] mx-auto flex flex-col items-center text-center pt-52 pb-40">

                        <div
                            ref={heroTitleRef}
                            className="opacity-0"
                            style={{ filter: "blur(10px)" }}
                        >
                            <p className="uppercase tracking-[0.45em] text-[#8A8A8A] text-xs md:text-sm">
                                Creative Developer • UI Designer • Motion Builder
                            </p>
                        </div>

                        <div
                            ref={heroSubtitleRef}
                            className="mt-10 opacity-0"
                            style={{ filter: "blur(20px)" }}
                        >
                            <h1 className="
                                animate-[float_6s_ease-in-out_infinite]
                                max-w-3xl mx-auto
                                text-white
                                text-[1.9rem]
                                sm:text-[2.4rem]
                                md:text-[3rem]
                                lg:text-[3.6rem]
                                xl:text-[4rem]
                                leading-[1.05]
                                tracking-[-0.04em]
                                font-gm
                                ">
                                Crafting{" "}

                                <span className="text-[#2FA4FF] italic font-gb">
                                    modern digital
                                </span>

                                <br />

                                experiences through motion,
                                <br />

                                clean interfaces, and
                                <br />

                                performance-focused{" "}

                                <span className="text-[#2FA4FF] italic font-gb">
                                    development.
                                </span>
                            </h1>

                            <p className="mt-10 text-[#B5B5B5] text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
                                Every interaction is designed to feel smooth,
                                intentional, immersive, and visually refined.
                            </p>
                        </div>

                        <div
                            ref={heroButtonsRef}
                            className="flex flex-col sm:flex-row items-center gap-5 mt-14 opacity-0"
                        >
                            <button
                                onClick={() => navigate("/work")}
                                className="group relative overflow-hidden px-9 md:px-11 py-4 rounded-full bg-white text-black font-gb transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:bg-[#2FA4FF] hover:shadow-[0_0_80px_rgba(47,164,255,0.45)]"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    View My Work

                                    <FaArrowRightLong
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </span>
                            </button>

                            <button
                                onClick={openDrawer}
                                className="px-9 md:px-11 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white font-gb hover:bg-white/10 hover:-translate-y-1 transition-all duration-500"
                            >
                                Start a Project
                            </button>
                        </div>

                        <p className="mt-10 text-[#777] text-sm tracking-wide">
                            Available for freelance projects, collaborations,
                            and creative development.
                        </p>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[10px] tracking-[0.35em] uppercase text-[#777]">
                                Scroll
                            </span>

                            <div className="w-[1px] h-14 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-20 pointer-events-none" />
                </section>

                <main className="w-full mt-24 md:mt-32 flex flex-col items-center">

                    <div className="w-[90vw] flex flex-col space-y-24 2xl:space-y-36 mx-auto">

                        <section
                            id="about"
                            className="w-full py-10 md:py-10"
                        >
                            <div className="w-[90vw] max-w-[1400px] mx-auto max-w-5xl mx-auto text-center">

                                <div className="flex flex-col items-center">

                                    <p className="uppercase tracking-[0.4em] text-[#777] text-xs mb-6">
                                        About Me
                                    </p>

                                    <h2 className="text-white text-4xl md:text-6xl leading-[1.1] font-gm max-w-4xl mx-auto">
                                        Building modern digital experiences
                                        with motion, clarity,
                                        and premium interaction.
                                    </h2>

                                    <div className="mt-10 space-y-6 text-[#A5A5A5] text-lg leading-relaxed max-w-3xl mx-auto">

                                        <p>
                                            I’m Raghav Lahoti — a developer and
                                            creative builder focused on modern
                                            digital experiences, premium UI systems,
                                            and interactive web development.
                                        </p>

                                        <p>
                                            I enjoy creating websites that combine
                                            smooth motion, strong visual identity,
                                            and clean engineering into a seamless experience.
                                        </p>

                                        <p>
                                            My approach focuses on building interfaces
                                            that feel intentional, immersive,
                                            and performance-driven.
                                        </p>
                                    </div>

                                    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">

                                        <div className="stat-card">
                                            <h3>5+</h3>
                                            <p>Creative Projects</p>
                                        </div>

                                        <div className="stat-card">
                                            <h3>Modern</h3>
                                            <p>UI Systems</p>
                                        </div>

                                        <div className="stat-card">
                                            <h3>Responsive</h3>
                                            <p>Development</p>
                                        </div>

                                        <div className="stat-card">
                                            <h3>Motion</h3>
                                            <p>Driven Interfaces</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="w-full py-10 md:py-10">

                            <div className="w-[90vw] max-w-[1400px] mx-auto">

                                <div className="text-center mb-20">

                                    <p className="uppercase tracking-[0.4em] text-[#777] text-xs mb-6">
                                        What I Do
                                    </p>

                                    <h2 className="text-white text-4xl md:text-6xl font-gm leading-[1.1]">
                                        Premium digital experiences
                                        built with precision.
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                                    <div className="service-card">
                                        <h3>UI/UX Design</h3>

                                        <p>
                                            Creating visually refined interfaces
                                            with clean layouts and intuitive user experiences.
                                        </p>
                                    </div>

                                    <div className="service-card">
                                        <h3>Frontend Development</h3>

                                        <p>
                                            Building responsive and interactive websites
                                            with modern technologies and smooth performance.
                                        </p>
                                    </div>

                                    <div className="service-card">
                                        <h3>Motion Design</h3>

                                        <p>
                                            Adding cinematic transitions and animations
                                            that enhance user engagement.
                                        </p>
                                    </div>

                                    <div className="service-card">
                                        <h3>Premium Branding</h3>

                                        <p>
                                            Designing digital experiences that feel
                                            modern, elegant, and memorable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div id="background">
                            <Overview />
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div id="education">
                            <Education />
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div id="experience">
                            <Experience />
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div id="expertise">
                            <Expertise />
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div>
                            <WorkShowcase />
                        </div>

                        <section className="min-h-[50vh] flex flex-col items-center justify-center text-center">

                            <h2 className="text-white text-5xl md:text-7xl leading-[1.1] font-gb">
                                Designed To Feel
                                <span className="text-[#2FA4FF] italic">
                                    {" "}Smooth.
                                </span>
                            </h2>

                            <p className="mt-8 max-w-3xl text-[#A5A5A5] text-lg leading-relaxed">
                                Every transition, interaction, and animation
                                was carefully crafted to feel seamless,
                                cinematic, and intentional.
                            </p>
                        </section>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div id="mission">
                            <Mission />
                        </div>
                    </div>
                </main>

                <Footer />

                <SectionMenu />
            </div>
        </div>
    );
};

export default Content;