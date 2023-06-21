interface PopupProps{
    closePopup: Function
}

function PopUp(props: PopupProps) {

    return (
        <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-50 top-0 left-0">
            <div className="w-1/3 bg-white border-2 border-black">
                <div className="w-full p-5 bg-blue-300 text-white text-center text-2xl font-bold border-b-2 border-black">Add an Event</div>
                <div className="p-5">
                    <input
                        className="mb-5 w-full bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded"
                        type="text"
                        placeholder="Title"
                    />
                    <textarea
                        className="mb-5 w-full bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded"
                        placeholder="Description"
                    ></textarea>
                    <div className="flex justify-end">
                        <button className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 mr-2 rounded-md" onClick={() => props.closePopup()}>
                            Exit
                        </button>
                        <button className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded-md" onClick={() => props.closePopup()}>
                            Finish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;