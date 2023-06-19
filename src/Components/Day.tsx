interface DayProps{
    day: Date
}

function Day(props: DayProps){
    function isCurrentMonth() : boolean {
        let currentDate = new Date();
        if (props.day.getMonth() == currentDate.getMonth()) {
            return true;
        }
        return false;
    }
    return (
        <div className="w-full" style={{backgroundColor: isCurrentMonth()?"#ffffff":"#DEDEDE"}}>
            {props.day.getDate()}

        </div>
    )
}

export default Day;