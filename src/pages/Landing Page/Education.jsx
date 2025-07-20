const graduationData = [
    {
        level: 'Fifth Year',
        course: 'MCA – Master of Computer Applications',
        institution: 'Dr. D. Y. Patil School of Science and Technology, Tathawade-Pune',
        university: 'Dr. D. Y. Patil Vidyapeeth, Pune',
        year: '2025–2026',
        grade: 'Appearing',
    },
    {
        level: 'Fourth Year',
        course: 'MCA – Master of Computer Applications',
        institution: 'Dr. D. Y. Patil School of Science and Technology, Tathawade-Pune',
        university: 'Dr. D. Y. Patil Vidyapeeth, Pune',
        year: '2024–2025',
        grade: '8.05 CGPA',
    },
    {
        level: 'Third Year',
        course: 'BCA – Bachelor of Computer Applications',
        institution: 'Sangam University, Bhilwara-Rajasthan',
        university: 'Sangam University',
        year: '2023–2024',
        grade: '7.4 CGPA',
    },
    {
        level: 'Second Year',
        course: 'BCA – Bachelor of Computer Applications',
        institution: 'Sangam University, Bhilwara-Rajasthan',
        university: 'Sangam University',
        year: '2022–2023',
        grade: '6.36 CGPA',
    },
    {
        level: 'First Year',
        course: 'BCA – Bachelor of Computer Applications',
        institution: 'Sangam University, Bhilwara-Rajasthan',
        university: 'Sangam University',
        year: '2021–2022',
        grade: '6.4 CGPA',
        
    },
];

const schoolData = [
    {
        level: '12ᵗʰ (HSC)',
        stream: 'Commerce Stream (RBSE)',
        institution: 'Shri Adarsh Vidya Niketan School, Rajasthan',
        university: 'Board of Secondary Education, Rajasthan',
        year: '2020–2021',
        grade: '80.2%',
    },
    {
        level: '10ᵗʰ (SSC)',
        stream: 'General Education',
        institution: 'Shri Adarsh Vidya Niketan School, Rajasthan',
        university: 'Board of Secondary Education, Rajasthan',
        year: '2018–2019',
        grade: '66.17%',
    },
];

const EducationTable = ({ title, data, isGraduation }) => (
    <>
        <h3 className="text-white text-2xl font-gr md:text-3xl font-semibold mb-4 mt-8">{title}</h3>
        <div className="overflow-hidden mb-10 rounded-2xl border border-[#333]">
            <table className="w-full text-left text-sm text-[#b0b0b0]">
                <thead className="bg-[#1a1a1a] text-[#2FA4FF] uppercase text-xs">
                    <tr>
                        <th className="px-4 py-3 font-gr border-b border-r border-[#333] first:border-l-0">Level</th>
                        <th className="px-4 py-3 font-gr border-b border-r border-[#333]">Institution</th>
                        <th className="px-4 py-3 font-gr border-b border-r border-[#333] hidden md:table-cell">University</th>
                        <th className="px-4 py-3 font-gr border-b border-r border-[#333] hidden md:table-cell">Year</th>
                        <th className="px-4 py-3 font-gr border-b border-r border-[#333]">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((edu, index) => (
                        <tr key={index} className="bg-[#111] hover:bg-[#1e1e1e] transition-colors">
                            <td className="px-4 py-3 font-gr border-b border-r border-[#333] first:border-l-0">
                                <span className="font-semibold text-white">{edu.level}</span>
                                <div className="text-xs text-[#999]">{isGraduation ? edu.course : edu.stream}</div>
                            </td>
                            <td className="px-4 py-3 border-b font-gr border-r border-[#333]">{edu.institution}</td>
                            <td className="px-4 py-3 border-b font-gr border-r border-[#333] hidden md:table-cell">{edu.university}</td>
                            <td className="px-4 py-3 border-b font-gr border-r border-[#333] hidden md:table-cell">{edu.year}</td>
                            <td className="px-4 py-3 border-b font-gr border-r border-[#333]">{edu.grade}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);

const Education = () => (
    <section className="w-full h-auto rounded-4xl px-4 md:px-10 2xl:px-32">
        <h2 className="text-white text-4xl md:text-6xl font-gm mb-8 tracking-tight">
            My <span className="text-[#2FA4FF]">Education</span>
        </h2>

        <EducationTable title="Graduation (BCA & MCA - Computer Applications)" data={graduationData} isGraduation />
        <EducationTable title="Schooling (HSC & SSC)" data={schoolData} isGraduation={false} />
    </section>
);

export default Education;
