function PopUp() {

    return (
        <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="h-2/3 w-1/3 bg-white border-2 border-black">
                <div className="w-full p-5 bg-blue-300 text-white text-center text-2xl font-bold border-b-2 border-black">Add an Event</div>
                <div className="p-5">
                    <input
                        className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded"
                        type="text"
                        placeholder="Title"
                    />
                </div>
                <div className="pl-5 pb-5 pr-5">
                    <textarea                      
                        className="w-full bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded"
                        placeholder="Description"
                    ></textarea>
                </div>
                <div className="pl-5 pb-5 pr-5 flex justify-between">
                    <button className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded">
                        Exit
                    </button>
                    <button className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded">
                        Finish
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PopUp;