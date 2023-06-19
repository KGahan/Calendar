import { useState } from "react";
import Calendar from "./Components/Calendar";
import Header from "./Components/Header";
import PopUp from "./Components/PopUp";

function App() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  function plusMonth() {
    let newDate = new Date(currentDate.getFullYear(),currentDate.getMonth()+1,currentDate.getDay());
    setCurrentDate(newDate);    
  }

  function minusMonth() {
    let newDate = new Date(currentDate.getFullYear(),currentDate.getMonth()-1,currentDate.getDay());
    setCurrentDate(newDate);    
  }

  function plusYear() {
    let newDate = new Date(currentDate.getFullYear()+1,currentDate.getMonth(),currentDate.getDay());
    setCurrentDate(newDate);    
  }

  function minusYear() {
    let newDate = new Date(currentDate.getFullYear()-1,currentDate.getMonth(),currentDate.getDay());
    setCurrentDate(newDate);    
  }

  return (
    <div className="h-screen flex flex-col">
      <Header date={currentDate} plusMonth={plusMonth} minusMonth={minusMonth} plusYear={plusYear} minusYear={minusYear} />
      <Calendar date={currentDate}  />
      <PopUp />
    </div>
  );
}

export default App;
