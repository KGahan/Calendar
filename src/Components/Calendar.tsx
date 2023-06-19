import { useEffect, useState } from "react";
import Week from "./Week";

interface CalendarProps{
    date: Date
}

function Calendar(props: CalendarProps){

    const [month, setMonth] = useState<Date[][]>();

    useEffect(() => {
        InitDate();
    }, [props.date]);

    function InitDate(){
        const dateToday = props.date;
        console.log(dateToday.toString());
        const firstDayOfMonth = new Date(dateToday.getFullYear(), dateToday.getMonth(), 1);
        const firstdayWeekDay = firstDayOfMonth.getDay();

        //console.log(firstDayOfMonth);d
        //console.log(firstdayWeekDay);

        let monthArray: Date[][] = [];
        let dateIterator = firstDayOfMonth;
        dateIterator.setDate(dateIterator.getDate() - (firstdayWeekDay - 1));
        //console.log(dateIterator); 

        for (let week = 0; week < 5; week++) {
            let weekArray: Date[] = [];
            for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
                weekArray.push(new Date(dateIterator.getTime()));
                dateIterator.setDate(dateIterator.getDate() + 1);
            } 
            monthArray.push(weekArray);
        }
        setMonth(monthArray);
    }

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