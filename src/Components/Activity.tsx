interface ActivityProps {
    title: String
    description: String
    closeActivity: Function
}

function Activity(props: ActivityProps) {
    console.log(props.title);
    console.log(props.description);

    return (
        <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-50 top-0 left-0">
            <div className="bg-white border-2 border-black max-w-5xl max-h-screen">
                <div className="w-full p-5 bg-blue-300 text-white text-center text-2xl font-bold border-b-2 border-black">Activity</div>
                <div className="p-5">
                    <div className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded mb-5">
                        <p className="">Title</p>
                        <div className="bg-white text-black border-2 border-black font-bold py-2 px-4 rounded">
                            <p className="">{props.title}</p>
                        </div>
                    </div>
                    <div className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded mb-5">
                        <p className="">Description</p>
                        <div className="bg-white text-black border-2 border-black font-bold py-2 px-4 rounded">
                            <p className="">{props.description}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded-md" onClick={() => props.closeActivity()}>
                            Exit
                        </button>
                    </div>
                </div>
            </div>
        </div>



        /*
                <div className="w-full p-5 bg-blue-300 text-white text-center text-2xl font-bold border-black">Title: {props.title} </div>
                <div className="w-full p-5 bg-blue-300 text-white text-center text-2xl font-bold border-black">Description: {props.description} </div>*/
    )
}

export default Activity;