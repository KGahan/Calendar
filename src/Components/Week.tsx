import Day from "./Day";

interface WeekProps{
    weekArray: Date[]
    currentDate: Date
}

function Week(props: WeekProps){
    return (
        <div className="flex flex-row w-full justify-between h-full border-b-2 border-neutral-200">
            {
                props.weekArray.map((day: Date, index) => {
                    return (
                        <Day day={day} key={index} currentDate={props.currentDate}/>
                    )
                })
            }
        </div>
    )
}

export default Week;