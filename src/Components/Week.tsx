import Day from "./Day";

interface WeekProps{
    weekArray: Date[]
}

function Week(props: WeekProps){
    return (
        <div className="flex flex-row w-full justify-between h-full">
            {
                props.weekArray.map((day: Date, index) => {
                    return (
                        <Day day={day} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Week;