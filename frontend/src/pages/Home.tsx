import Achievements from "../components/Achievements";
import Calendar from "../components/Calendar";
import { useState } from "react";

export default function Home() {
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const [date, setDate] = useState<string>(today);



    return(
        <div className="w-full flex justify-between">
            <Achievements date={date}/>
            <Calendar date={date} setDate={setDate} />
        </div>
    )
}