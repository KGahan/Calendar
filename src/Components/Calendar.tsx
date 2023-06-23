import { useEffect, useState } from "react";
import Week from "./Week";
import Day from "./Day";

interface CalendarProps{
    date: Date
}

function Calendar(props: CalendarProps){

    const [month, setMonth] = useState<Date[][]>();
    const [activity, SetActivity] = useState<Date[][]>();

    useEffect(() => {
        function InitDate(){
            const date = props.date;
            const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
            const firstdayWeekDay = firstDayOfMonth.getDay();
    
            let monthArray: Date[][] = [];
            let dateIterator = firstDayOfMonth;
            
            if(firstdayWeekDay === 0){
            dateIterator.setDate(dateIterator.getDate() - 6);
            }
            else{
                dateIterator.setDate(dateIterator.getDate() - (firstdayWeekDay-1));
            }
    
            do  {
                let weekArray: Date[] = [];
                for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
                    weekArray.push(new Date(dateIterator.getTime()));
                    dateIterator.setDate(dateIterator.getDate() + 1);
                } 
                monthArray.push(weekArray);
            } while (dateIterator.getMonth() <= date.getMonth() && dateIterator.getFullYear() <= date.getFullYear());
            setMonth(monthArray);
        }
        InitDate();
    }, [props.date]);

    return (
        <div className="flex flex-col h-full justify-between">
            {
                month?.map((weekArray, index) => {
                    return (
                        <Week weekArray={weekArray} currentDate={props.date} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Calendar;