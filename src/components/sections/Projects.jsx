import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {


    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-800  bg-clip-text text-transparent text-center">

                Feature Projects

            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-600/30 hover:shadow-[0_2px_8px_rgba(39,174,96,0.1)] transition-all">

                    <h3 className="text-xl font-bold mb-2">Automation of Invoice Data Extraction and Spreadsheet Filling</h3>

                    <p className="text-pearl-100 mb-4">This project automates the process of reading PDF invoices and extracting key information — such as Consumer Unit and Total Amount — to populate an Excel spreadsheet. Built with Python, it leverages libraries like PyPDF2, openpyxl, and tkinter to provide a simple and effective graphical interface.
                    The automation significantly reduces manual work, minimizes input errors, and saves time when handling large volumes of invoices, making it ideal for administrative and financial tasks.</p>

                    <div>

                        {["Python"].map((tech, key) => (

                        <span key={key} className="bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(39,174,96,0.2)] transition">
                                
                        {tech}

                        </span>

                        ))}

                    </div>

                    <div className="flex justify-start items-center gap-2">

                        <a href="https://github.com/Kauet-Martins/processamentoFatura" className="text-emerald-500 hover: text-emerald-300 transition-colors my-4">View Project →</a>

                        <a href="https://github.com/Kauet-Martins/processamentoFatura" className="my-4"><img src="src\assets\icons8-github-64.png" alt=""/></a>

                    </div>

                    

                    


                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-600/30 hover:shadow-[0_2px_8px_rgba(39,174,96,0.1)] transition-all">

                    <h3 className="text-xl font-bold mb-2">Automated Invoice Processing with OCR-based Data Extraction</h3>

                    <p className="text-pearl-100 mb-4">This project focuses on the automated processing of scanned invoices in PDF format. It uses OCR (Optical Character Recognition) to extract relevant data such as Consumer Unit, Client Number, and Total Amount.

                    Developed with Python, it leverages tools like pytesseract, pdf2image, and Pillow to read, convert, and interpret the content of scanned documents. Extracted data is structured and printed in the terminal for further use.

                    This automation streamlines the handling of scanned documents and reduces manual workload in administrative and financial tasks.</p>

                    <div>

                        {["Python"].map((tech, key) => (

                        <span key={key} className="bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(39,174,96,0.2)] transition">
                                
                        {tech}

                        </span>

                        ))}

                    </div>

                    <div className="flex justify-start items-center gap-2">

                        <a href="https://github.com/Kauet-Martins/downloadFaturas" className="text-emerald-500 hover: text-emerald-300 transition-colors my-4">View Project →</a>

                        <a href="https://github.com/Kauet-Martins/downloadFaturas" className="my-4"><img src="src\assets\icons8-github-64.png" alt=""/></a>

                    </div>

                    

                    


                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-600/30 hover:shadow-[0_2px_8px_rgba(39,174,96,0.1)] transition-all">

                    <h3 className="text-xl font-bold mb-2">Responsive Form Page with Validation Using HTML, CSS and JavaScript</h3>

                    <p className="text-pearl-100 mb-4">This project is a responsive and modern form page built using HTML, CSS, and JavaScript. It features a clean layout, interactive fields, and client-side validation to ensure proper data input before submission. The form includes essential fields such as name, email, subject, and message, offering a user-friendly experience across both desktop and mobile devices.The focus of this project is to practice form handling, responsive design, and vanilla JavaScript validation, making it an ideal portfolio piece for front-end development. It demonstrates core web development skills and attention to user experience (UX) and interface design (UI).</p>

                    <div>

                        {["Html", "Css", "Javascript"].map((tech, key) => (

                        <span key={key} className="bg-emerald-600/10 text-emerald-600 py-1 px-3 rounded-full text-sm hover:bg-emerald-600/20 hover:shadow-[0_2px_8px_rgba(39,174,96,0.2)] transition mr-3">
                                
                        {tech}

                        </span>

                        ))}

                    </div>

                    <div className="flex justify-start items-center gap-2">

                        <a href="https://github.com/Kauet-Martins/Form-Page" className="text-emerald-500 hover: text-emerald-300 transition-colors my-4 ">View Project →</a>

                        <a href="https://github.com/Kauet-Martins/Form-Page" className="my-4"><img src="src\assets\icons8-github-64.png" alt="Github Logo"/></a>

                    </div>

                    

                    


                </div>

                

                        

            </div>

            

            

        </div>
        </RevealOnScroll>

    </section>

}