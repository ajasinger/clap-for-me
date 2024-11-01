
type CalendarProps = {
    date: string; 
    setDate: React.Dispatch<React.SetStateAction<string>>;
};

export default function Calendar({ date, setDate }: CalendarProps) {
    return(
        <div>
            <h1>CALENDAR</h1>
            <p>{date}</p>
        </div>
    )
}