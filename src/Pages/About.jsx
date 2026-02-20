import Code from "../Components/Code";
import Tag from "../Components/Tag";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto p-16 px-6 ">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl text-gray-700 font-bold mb-4">
                    About Me
                </h2>
                <div className="w-24 h-1 bg-indigo-400 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                <Code />
                <div className="text-justify">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">
                        Web Developer
                    </h3>
                    <p className="text-gray-500 mb-4">
                        I am Jessel Lomongo Zapanta, a Computer Science graduate from Ozamiz City and an instructor at Tangub City Global College. I specialize in web development, building web applications that address real-world problems. 
                    </p>
                    <p className="text-gray-500 mb-6">
                        Beyond coding, I’m passionate about teaching and sharing knowledge, helping students and peers understand technology in a meaningful way. I value simplicity, clarity, and creating solutions that are not only functional but genuinely useful, bridging the gap between ideas and impact.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <Tag
                            label="Student"
                            bgColor="bg-blue-100"
                            textColor="text-blue-800"
                        />
                        <Tag
                            label="Educator"
                            bgColor="bg-purple-100"
                            textColor="text-purple-800"
                        />
                        <Tag
                            label="Growth-Minded"
                            bgColor="bg-green-100"
                            textColor="text-green-800"
                        />
                        <Tag
                            label="Coachable"
                            bgColor="bg-red-100"
                            textColor="text-red-800"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
