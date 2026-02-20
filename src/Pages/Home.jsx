import { Typewriter } from "react-simple-typewriter";

export default function Home() {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl min-h-screen mx-auto flex items-center justify-center pt-16 px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-18">
                    <div className="space-y-6 text-center lg:text-left order-last lg:order-first">
                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                                Hi, I'm <br />
                                <span className="font-bold">
                                    <Typewriter
                                        words={["Jessel Zapanta"]}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={150}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </span>
                            </h1>
                            <p className="text-xl font-semibold sm:text-xl md:text-2xl">
                                <span className="text-indigo-400">
                                    Instructor
                                </span> &{" "}
                                <span className="text-indigo-400"> Web Developer</span>
                            </p>
                        </div>
                        {/* todo */}
                        <p className="text-justify sm:text-lg text-slate-500">
                            I am Jessel Zapanta, an MSIT student at Northwestern Mindanao State College of Science and Technology and a BSCS graduate of Tangub City Global College. I am an instructor and a web developer who builds web applications using Laravel, React, and Inertia, focusing on modular components, and real-world solutions. I value simplicity, performance, and getting things done.
                        </p>
                        
                    </div>
                    <div className="flex justify-center items-center order-first lg:order-last">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-64 w-64 md:w-96 md:h-96 shadow-lg border-4 border-white hover:scale-105 transform transition-all duration-300">
                            <img
                            className="h-full w-full object-cover object-center"
                            src="./pfp.png"
                            alt="Jessel Zapanta"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
