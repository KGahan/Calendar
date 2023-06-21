import { useEffect, useState } from "react";
import PopUp from "./PopUp";

interface DayProps {
    day: Date
    currentDate: Date
}

function Day(props: DayProps) {

    const [popupState, setPopupState] = useState<Boolean>(false);

    function isCurrentMonth(): boolean {
        let currentDate = props.currentDate;
        if (props.day.getMonth() === currentDate.getMonth()) {
            return true;
        }
        return false;
    }

    function openPopup() {
        setPopupState(true);
    }

    function closePopup() {
        setPopupState(false);
    }

    useEffect(() => {
        console.log(popupState);
    }, [popupState])

    return (
        <>
            <div className="w-full p-2" style={{ backgroundColor: isCurrentMonth() ? "#ffffff" : "#DEDEDE" }} onClick={() => setPopupState(true)}>
                <p style={{ opacity: isCurrentMonth() ? 1 : 0.5 }}>
                    {props.day.getDate()}
                </p>
            </div>
            {popupState ? <PopUp closePopup={closePopup}/> : <></>}
        </>
    )
}

export default Day;