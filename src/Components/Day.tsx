interface DayProps{
    day: Date
    currentDate: Date
}

function Day(props: DayProps){
    function isCurrentMonth() : boolean {
        let currentDate = props.currentDate;
        if (props.day.getMonth() === currentDate.getMonth()) {
            return true;
        }
        return false;
    }
    return (
        <div className="w-full p-2" style={{backgroundColor: isCurrentMonth()?"#ffffff":"#DEDEDE"}}>
            <p style={{opacity: isCurrentMonth()?1:0.5}}>
                {props.day.getDate()}
            </p>

        </div>
    )
}

export default Day;