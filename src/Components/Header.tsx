interface HeaderProps{
    date: Date,
    plusMonth: Function,
    minusMonth: Function,
    plusYear: Function,
    minusYear: Function
}

function Header(props: HeaderProps){
    
    function getMonth(date: Date) {
        return date.toLocaleString('en-US', { month: 'long' });
    }
   
    function getYear(date: Date) {
        return date.getFullYear();
    }

    return (
    <div className="">
        <div className="bg-blue-300 p-5 border-b-2 border-black">
            <h1 className="text-white text-center text-4xl font-bold">Calendar</h1>
            <div className="flex items-center justify-left space-x-4">
                <button className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded" onClick={() => props.minusYear()}>
                {'<<'}
                </button>
                <button className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded" onClick={() => props.minusMonth()}>
                {'<'}
                </button>
                <div className="bg-white text-black border-2 border-black font-bold py-2 px-4 rounded">
                    {getMonth(props.date) + " " + getYear(props.date)}
                </div>
                <button className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded" onClick={() => props.plusMonth()}>
                {'>'}
                </button>
                <button className="bg-white text-black hover:bg-blue-200 border-2 border-black font-bold py-2 px-4 rounded" onClick={() => props.plusYear()}>
                {'>>'}
                </button>
            </div>
        </div>
    </div>
    );        
}

export default Header;