export default function Code() {
    return (
        <div className="relative">
            <div className="bg-gray-900 border rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gray-700 px-4 py-3 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="p-6 font-mono text-sm text-white">
                    <div className="space-y-2">
                        <div>
                            <span className="text-purple-500">const</span>{" "}
                            <span className="text-blue-500">aboutMe</span> ={" "}
                            {"{"}
                        </div>
                        <div className="ml-4">
                            <span className="text-green-500">fullname</span>:{" "}
                            <span className="text-orange-500">
                                "Jessel Lomongo Zapanta"
                            </span>
                            ,
                        </div>
                        <div className="ml-4">
                            <span className="text-green-500">address</span>:{" "}
                            <span className="text-orange-500">
                                "Tabid, Ozamiz City"
                            </span>
                            ,
                        </div>
                        <div className="ml-4">
                            <span className="text-green-500">degree</span>:{" "}
                            <span className="text-orange-500">
                                "Computer Science"
                            </span>
                            ,
                        </div>
                        <div className="ml-4">
                            <span className="text-green-500">work</span>:{" "}
                            <span className="text-orange-500">
                                "Instructor @ Tangub City Global College"
                            </span>
                            ,
                        </div>
                        <div className="ml-4">
                            <span className="text-green-500">work_address</span>:{" "}
                            <span className="text-orange-500">
                                "Maloro, Tangub City"
                            </span>
                            ,
                        </div>
                        <div className="ml-4">
                            <span className="text-green-500">skills</span>: [
                            <span className="text-orange-500">"Web development"</span>
                            ],
                        </div>
                        <div>{"};"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
