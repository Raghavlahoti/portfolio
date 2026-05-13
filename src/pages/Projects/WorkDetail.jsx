import React, { useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SmoothScrollProvider from '../../SmoothScrollProvider';
import Navbar from '../Landing Page/Navbar';
import Footer from '../Landing Page/Footer';
import ReachOutDrawer from '../Landing Page/ReachOutDrawer';
import WorkShowcase from '../Landing Page/WorkShowcase';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import img1 from "../../assets/images/portfolio.png";
import img2 from "../../assets/images/ai_assistant.png";
import bitssImg from "../../assets/images/bitss.png";
import squigglesImg from "../../assets/images/squiggles.png";
import video700 from "../../assets/images/700.mp4";

const projectsData = [
    {
        id: "portfolio",
        title: "Portfolio Website",
        description: "A cinematic developer portfolio crafted with immersive animations and modern interaction design.",
        year: "2025",
        image: img1,
        live: "https://raghavlahoti.in",
        tags: ["React", "Framer Motion", "GSAP", "Responsive"],
        type: "web",
        content: (
            <>
                <p>
                    <b>About:</b> Built as a personal creative playground focused on motion design, smooth scrolling experiences, and premium visual presentation.
                </p>

                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>Advanced scroll-based animations</li>
                    <li>Responsive across all devices</li>
                    <li>Built with React, GSAP, and Framer Motion</li>
                    <li>Performance-focused interaction design</li>
                </ul>
            </>
        )
    },

    {
        id: "ai_assistant",
        title: "SmartEdu - AI-Powered Education",
        description: "A modern web platform that enhances learning through AI-generated content, quizzes, and dynamic study tools tailored for students.",
        year: "2025",
        image: img2,
        tags: ["React", "AI", "Education", "TailwindCSS"],
        type: "web",
        content: (
            <>
                <p>
                    <b>About:</b> A cutting-edge educational platform leveraging AI to create personalized learning experiences.
                </p>

                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>AI-generated quizzes and content</li>
                    <li>Dynamic study tools for enhanced learning</li>
                    <li>Responsive design with TailwindCSS</li>
                    <li>Interactive educational workflows</li>
                </ul>
            </>
        )
    },

    {
        id: "bitss-techniques",
        title: "Bitss Techniques Website",
        description: "A professional company website developed during internship using WordPress and Avada Builder.",
        year: "2024",
        image: bitssImg,
        live: "https://bitss.tech/",
        tags: ["WordPress", "Avada Builder", "Responsive", "UI/UX"],
        type: "web",
        content: (
            <>
                <p>
                    <b>About:</b> Designed and developed the official BITSSTechniques website during internship, focusing on responsive layouts, modern presentation, and professional user experience.
                </p>

                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>Built responsive multi-page website layouts</li>
                    <li>Designed service-focused UI sections</li>
                    <li>Worked with WordPress and Avada Builder</li>
                    <li>Improved branding and visual hierarchy</li>
                </ul>
            </>
        )
    },
    {
        id: "squiggles-library",
        title: "Squiggles Library Management System",
        description: "A modern library management platform designed to streamline book tracking, member management, and order operations.",
        year: "2025",
        image: squigglesImg,
        live: "https://pos.worldofsquiggles.com/dashboard",
        tags: ["React", "TailwindCSS", "Node.js"],
        type: "web",
        content: (
            <>
                <p>
                    <b>About:</b> Developed a comprehensive library management system focused on efficient book handling, member records, and real-time inventory management with a clean and intuitive interface.
                </p>

                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>Managed books, members, and order fulfillment</li>
                    <li>Implemented real-time stock and availability tracking</li>
                    <li>Designed responsive admin dashboard layouts</li>
                    <li>Built with modern full-stack web technologies</li>
                </ul>
            </>
        )
    },
];

const WorkDetail = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.08,
            multiplier: 1,
            class: 'is-reveal',
        });

        setTimeout(() => {
            scroll.update();
        }, 1000);

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    const project = projectsData.find((p) => p.id === id);

    if (!project) {
        return (
            <>
                <Navbar onReachOutClick={() => setDrawerOpen(true)} />

                <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white">
                    <div className="text-center">
                        <h1 className="text-3xl font-gb mb-4">
                            Project Not Found
                        </h1>

                        <button
                            onClick={() => navigate('/work')}
                            className="mt-4 px-6 py-2 rounded-full bg-white text-black font-gb"
                        >
                            Back to Work
                        </button>
                    </div>
                </div>

                <Footer />
            </>
        );
    }

    return (
        <div className="bg-[#0A0A0A] w-full h-full">
            <ReachOutDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />

            <Navbar
                onReachOutClick={() => setDrawerOpen(true)}
                isSticky={true}
            />

            <div
                ref={scrollRef}
                data-scroll-container
                className="min-h-screen h-full bg-[#0A0A0A] text-white relative"
            >
                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[80vh] flex items-end overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-b-3xl"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10"></div>

                    <div className="absolute inset-0 flex items-end z-20">
                        <div className="w-[90vw] md:w-[70vw] mx-auto pb-10">
                            <h1 className="text-4xl md:text-6xl font-gm mb-4">
                                {project.title}
                            </h1>

                            <p className="text-lg md:text-2xl text-[#9D9D9D] mb-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs px-3 py-1 rounded-full border border-[#333] text-[#9D9D9D] bg-[#181818]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <span className="text-sm text-[#9D9D9D]">
                                {project.year}
                            </span>

                            <div className="mt-6 flex gap-4 flex-wrap">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#333] bg-[#111] text-white font-gb hover:bg-white hover:text-black transition-all duration-500"
                                    >
                                        Visit Live Site

                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            →
                                        </span>
                                    </a>
                                )}

                                <button
                                    onClick={() => navigate('/work')}
                                    className="px-6 py-3 rounded-full border border-[#333] bg-[#181818] text-white font-gb hover:bg-[#222] transition-all duration-300"
                                >
                                    Back to Work
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="w-[90vw] md:w-[70vw] mx-auto py-16 md:py-24">
                    <div className="prose prose-invert max-w-none text-white text-lg leading-relaxed">
                        {project.content}
                    </div>
                </section>

                {/* Image Showcase */}
                <section className="w-[90vw] md:w-[70vw] mx-auto pb-16 md:pb-24">
                    <div className="md:flex justify-center space-y-6 md:space-y-0 items-center gap-10">
                        <div className="md:w-1/2">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </div>

                        <div className="md:w-1/2">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </section>

                {/* Description Section */}
                <section className="w-[90vw] md:w-[70vw] mx-auto pb-16 md:pb-24">
                    <h3 className="text-3xl md:text-4xl leading-relaxed text-[#d0d0d0]">
                        {project.description}
                    </h3>
                </section>

                {/* Video Section */}
                <section className="w-[90vw] md:w-[70vw] mx-auto pb-16 md:pb-24">
                    <div className="flex justify-center items-center gap-10">
                        <div className="w-full">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full rounded-3xl object-cover brightness-75"
                            >
                                <source src={video700} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </section>

                <div className="px-4 md:px-25">
                    <div className="w-full h-[1px] bg-[#9D9D9D]"></div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default WorkDetail;