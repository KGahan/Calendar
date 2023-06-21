import { useState } from "react";
import Calendar from "./Components/Calendar";
import Header from "./Components/Header";
import PopUp from "./Components/PopUp";

function App() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(new Date().getFullYear(), new Date().getMonth(), 15));

  function plusMonth() {
    let currentDateCopy= new Date(currentDate);
    currentDateCopy.setMonth(currentDateCopy.getMonth()+1);
    setCurrentDate(currentDateCopy);    
  }

  function minusMonth() {
    let currentDateCopy= new Date(currentDate);
    currentDateCopy.setMonth(currentDateCopy.getMonth()-1);
    setCurrentDate(currentDateCopy);    
  }

  function plusYear() {
    let currentDateCopy= new Date(currentDate);
    currentDateCopy.setFullYear(currentDateCopy.getFullYear()+1);
    setCurrentDate(currentDateCopy); 
  }

  function minusYear() {
    let currentDateCopy= new Date(currentDate);
    currentDateCopy.setFullYear(currentDateCopy.getFullYear()-1);
    setCurrentDate(currentDateCopy);    
  }

  return (
    <div className="h-screen flex flex-col">
      <Header date={currentDate} plusMonth={plusMonth} minusMonth={minusMonth} plusYear={plusYear} minusYear={minusYear} />
      <Calendar date={currentDate}  />
    </div>
  );
}

export default App;