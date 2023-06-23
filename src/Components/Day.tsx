import { useEffect, useRef, useState } from "react";
import PopUp from "./PopUp";
import Activity from "./Activity";

interface DayProps {
    day: Date
    currentDate: Date
}

function Day(props: DayProps) {

    const [popupState, setPopupState] = useState<Boolean>(false);
    const [activities, setActivities] = useState<any[]>([]);
    const [activityState, setActivityState] = useState<Boolean>(true);
    const activityTitle = useRef("");
    const activityDescription = useRef("");

    function isCurrentMonth(): boolean {
        let currentDate = props.currentDate;
        if (props.day.getMonth() === currentDate.getMonth()) {
            return true;
        }
        return false;
    }

    function closePopup() {
        setPopupState(false);
    }

    function saveActivity(title: string, description:string) {
        let activitiesCopy: any[] = activities;
        let newActivity = {"title": title, "description": description};
        activitiesCopy.push(newActivity);
        setActivities(activitiesCopy);
        closePopup();
    }

    function showActivity(title:string, description:string){
        setActivityState(false);
        setPopupState(false);
        activityTitle.current = title;
        activityDescription.current = description;
    }

    function closeActivity() {
        setPopupState(false)
        setActivityState(true);
    }

    return (
        <>
            <div className="w-full p-2" style={{ backgroundColor: isCurrentMonth() ? "#ffffff" : "#DEDEDE" }} onClick={() => setPopupState(true)}>
                <p style={{ opacity: isCurrentMonth() ? 1 : 0.5 }}>
                    {props.day.getDate()}
                </p>
                <div className="flex flex-col text-center">
                    {
                        activities.map((activity, index) => {
                            return (
                                <div key={index} className="bg-blue-300 rounded-md m-1" onClick={() => showActivity(activity.title, activity.description)}>
                                    {activity.title}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {popupState&&activityState ? <PopUp closePopup={closePopup} saveActivity={saveActivity} day={props.day} /> : <></>}
            {!activityState ?  <Activity title={activityTitle.current.toString()} description={activityDescription.current.toString()} closeActivity={closeActivity} /> : <></>}
        </>
    )
}

export default Day;