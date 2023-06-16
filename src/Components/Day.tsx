interface DayProps{
    day: Date
}

function Day(props: DayProps){
    return (
        <div className="w-full">
            {props.day.getDate()}
        </div>
    )
}

export default Day;