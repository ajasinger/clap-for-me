import { useState } from "react";

const data = [
        {
            date: "Friday, September 20, 2024",
            achievements: [
                {
                    body: "went to yoga in the morning.",
                    tags: ["health"] 
                },
                {
                    body: "ate healthy breakfast with family.",
                    tags: ["health", "family"] 
                },
                {
                    body: "read 1 chapter of my book.",
                    tags: ["health"] 
                },
            ]
        }
]

export default function Achievements() {
    const [achievements, setAchievements] = useState([]);
    return(
        <div>
            <h1>ACHIEVEMENTS</h1>
        </div>
    )
}