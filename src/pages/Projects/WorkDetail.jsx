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
import video700 from "../../assets/images/700.mp4"; // ✅ fixed casing
const projectsData = [
    // Web Projects
    
    {
        id: "portfolio",
        title: "Portfolio Website",
        description: "A personal developer portfolio showcasing skills, projects, and animations.",
        year: "2025",
        image: img1,
        tags: ["React", "Framer Motion", "GSAP", "Responsive"],
        type: "web",
        content: (
            <>
                <p>
                    <b>About:</b> A sleek developer portfolio to present personal and academic projects using rich animations and responsive design.
                </p>
                <ul className="list-disc ml-6 mt-4 text-[#9D9D9D]">
                    <li>Uses Framer Motion and GSAP for animations</li>
                    <li>Responsive layout for all devices</li>
                    <li>Built with React</li>
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
        }, 1000); // Adjust timing if needed

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);


    // Find the project by id
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return (
            <>
                <Navbar onReachOutClick={() => setDrawerOpen(true)} />
                <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white">
                    <div className="text-center">
                        <h1 className="text-3xl font-gb mb-4">Project Not Found</h1>
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
            <ReachOutDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
            <Navbar onReachOutClick={() => setDrawerOpen(true)} isSticky={true} />
            <div ref={scrollRef}
                data-scroll-container
                className="min-h-screen h-full bg-[#0A0A0A] text-white relative">
                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[80vh] flex items-end overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-b-3xl"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10"></div>
                    {/* Hero Content */}
                    <div className="absolute inset-0 flex items-end z-20">
                        <div className="w-[90vw] md:w-[70vw] mx-auto pb-10">
                            <h1 className="text-4xl md:text-6xl font-gm mb-2">{project.title}</h1>
                            <p className="text-lg md:text-2xl text-[#9D9D9D] mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="text-xs px-3 py-1 rounded-full border border-[#333] text-[#9D9D9D] bg-[#181818]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-sm text-[#9D9D9D]">{project.year}</span>
                        </div>
                    </div>
                </section>

                {/* Project Content */}
                <section className="w-[90vw] md:w-[70vw] mx-auto py-16 md:py-24">
                    <div className="prose prose-invert max-w-none text-white text-lg leading-relaxed">
                        {project.content}
                    </div>
                    <button
                        onClick={() => navigate('/work')}
                        className="mt-12 px-8 py-3 rounded-full bg-white text-black font-gb hover:bg-[#222] hover:text-white transition"
                    >
                        ← Back to Work
                    </button>
                </section>
                <section className="w-[90vw] md:w-[70vw] mx-auto pb-16 md:pb-24">
                    <div className="md:flex justify-center space-y-6 md:space-y-0 items-center gap-10 ">
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
                <section className="w-[90vw] md:w-[70vw] mx-auto pb-16 md:pb-24">
                    <h3 className='text-4xl'>{project.description}</h3>
                </section>
                <section className="w-[90vw] md:w-[70vw] mx-auto pb-16 md:pb-24">
                    <div className="flex justify-center items-center gap-10 ">
                        <div className="w-full">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full rounded-3xl object-cover z-0 brightness-75"
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