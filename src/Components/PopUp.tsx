interface PopupProps {
    closePopup: Function
}

function PopUp(props: PopupProps) {

    return (
        <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-50 top-0 left-0">
            <div className="bg-white border-2 border-black">
                <div className="w-full p-5 bg-blue-300 text-white text-center text-2xl font-bold border-b-2 border-black">Add an Event</div>
                <div className="p-5">
                    <input
                        className="mb-5 w-full bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded"
                        type="text"
                        placeholder="Title"
                    />
                    <div className="flex flex-col md:flex-row justify-between mb-5">
                        <div className="flex flex-col mr-5 w-1/2">
                            <label htmlFor="dateInput" className="font-bold mr-2">StartDate</label>
                            <input
                                id="dateInput"
                                className="w-full bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded"
                                type="date"
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="dateInput" className="font-bold mr-2">EndDate</label>
                            <input
                                id="dateInput"
                                className="w-full bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded"
                                type="date"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mb-5">
                        <div className="flex flex-col mr-5 w-1/2">
                            <label htmlFor="timeInput" className="font-bold mr-2">StartTime</label>
                            <input
                                id="timeInput"
                                className="w-full bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded"
                                type="time"
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="timeInput" className="font-bold mr-2">EndTime</label>
                            <input
                                id="timeInput"
                                className="w-full bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded"
                                type="time"
                            />
                        </div>
                    </div>
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