
import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {

    return <section id="home" className="
    min-h-screen flex items-center justify-center relative">


        <RevealOnScroll>
        <div className="text-center z-10 px-4 ">

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent leading-right">

                Hi, I'm Kauet

            </h1>

            <p className="text-gray-300 text-lg- mb-8 max-w-lg mx-auto">

            I’m a front-end developer passionate about crafting modern, responsive, and user-friendly interfaces. I focus on turning ideas into intuitive digital experiences, always aiming for clean code, great performance, and a seamless user journey.

            </p>

            <div className="flex justify-center space-x-4">

                <a href="#projects" className="bg-emerald-600 text-gray-200 py-3 px-6 rounded font-medium transition relative overflow-hidden hover: -translate-y-0.5 hover:shadow-[0_0_15px_rgba(39,174,96,0.6)]">View Projects</a>

                <a href="#contact" className=" border border-emerald-600/60 text-emerald-600 py-3 px-6 rounded font-medium transition-all duration-200 hover: -translate-y-0.5 hover:shadow-[0_0_15px_rgba(39,174,96,0.2)]
                hover: bg-emerald-600/10">Contact Me</a>


            </div>

        </div>
        </RevealOnScroll>


    </section>

}