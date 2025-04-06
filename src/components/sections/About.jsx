import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills = ["React", "TailwindCSS", "TypeScript","JavaScript"]

    const backendSkills = ["Python", "Node.js"]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">

    <RevealOnScroll>
    <div className="max-w-3xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-800  bg-clip-text text-transparent text-center"> About Me</h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">

            <p className="text-pearl-200 mb-6">

            I'm a proactive developer passionate about technology and continuous learning. I have experience training teams and working with system data entry during my time at Araranguá City Hall. I'm currently focused on web and mobile development, always looking to improve my skills, stay updated with new technologies, and contribute to innovative and collaborative projects.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="rounded-xl p-6 hover:translate-y-1 transition-all">

                    <h3 className="text-xl font-bold mb-4">Frontend</h3>

                    <div className="flex flex-wrap gap-2">

                        {frontendSkills.map((tech, key) => (

                            <span key={key} className="bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(39,174,96,0.2)] transition">
                                
                                {tech}

                            </span>

                        ))}

                    </div>


                </div>

                <div className="rounded-xl p-6 hover:translate-y-1 transition-all">

                    <h3 className="text-xl font-bold mb-4">Backend</h3>

                    <div className="flex flex-wrap gap-2">

                        {backendSkills.map((tech, key) => (

                            <span key={key} className="bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(39,174,96,0.2)] transition">
                                
                                {tech}

                            </span>

                        ))}

                    </div>


                </div>


            </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">Education</h3>

                        <ul className="list-disc list-inside text-gray-100 space-y-2">

                            <li>

                                <strong>B.S in Analysis and Development of Systems</strong> - Unesc University    (2022-2024)


                            </li>

                            <li>

                                Relevante Coursework: FullStack Developer - OneBitCode

                            </li>

                        </ul>

                        

                

            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>

                        <div className="space-y-4 text-gray-100">

                            <div>

                                <h4 className="font-semibold">Software enginer (2021 - Present)</h4>

                                <p>Developed small automation solutions to improve internal processes, reducing repetitive tasks and increasing efficiency. These experiences strengthened my ability to communicate, solve problems, and contribute with practical and scalable solutions within the public sector environment.</p>

                            </div>

                        </div>

                

            </div>

        </div>

    </div>
    </RevealOnScroll>


    </section>

}