function Header(){
    return (
    <div className="">
        <div className="bg-blue-300 p-5 border-b-2 border-black">
            <h1 className="text-white text-center text-4xl font-bold">Calendar</h1>
            <div className="flex items-center justify-left space-x-4">
                <button className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded">
                {'<<'}
                </button>
                <button className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded">
                {'<'}
                </button>
                <div className="bg-white text-black border-2 border-black font-bold py-2 px-4 rounded">
                    Testmonat
                </div>
                <button className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded">
                {'>'}
                </button>
                <button className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded">
                {'>>'}
                </button>
            </div>
        </div>
    </div>
    );        
}

export default Header;