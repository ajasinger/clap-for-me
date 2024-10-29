import Achievements from "../components/Achievements";
import Calendar from "../components/Calendar";

export default function Home() {
    return(
        <div className="w-full flex justify-between">
            <Achievements />
            <Calendar />
        </div>
    )
}