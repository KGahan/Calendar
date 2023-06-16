import { useEffect, useState } from "react";
import Week from "./Week";

function Calendar(){

    const [month, setMonth] = useState<Date[][]>();

    useEffect(() => {
        InitDate();

    }, []);

    function InitDate(){
        const dateToday = new Date();
        const firstDayOfMonth = new Date(dateToday.getFullYear(), dateToday.getMonth(), 1);
        const firstdayWeekDay = firstDayOfMonth.getDay();

        //console.log(firstDayOfMonth);
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
                        <Week weekArray={weekArray} key={index}/>
                    )
                })
            }
            
        </div>
    )
}

export default Calendar;