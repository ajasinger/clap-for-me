import { useState } from "react";
import TagDropdown from "./TagDropdown";

const tagOptionsArray = ["work", "fitness", "family"]

const data = [
        {
            date: "Friday, September 20",
            achievements: [
                {
                    id: 1,
                    body: "went to yoga in the morning.",
                    tags: ["health"] 
                },
                {
                    id: 2,
                    body: "ate healthy breakfast with family.",
                    tags: ["health", "family"] 
                },
                {
                    id: 3,
                    body: "read 1 chapter of my book.",
                    tags: ["health"] 
                },
            ]
        }
]

export default function Achievements() {
    const [achievements, setAchievements] = useState(data);
    const [tagOptions, setTagOptions] = useState(tagOptionsArray)


    return(
        <div className="flex flex-col gap-6">
            <h1 className="text-xl font-bold">{achievements[0].date}</h1>
            <ol className="flex flex-col gap-6">
                {achievements[0].achievements.map((achievement) => (
                    <li key={achievement.id} className="flex gap-24">
                        {/* dropdown */}
                        < TagDropdown tagOptions={tagOptions} setTagOptions={setTagOptions} setAchievements={setAchievements}/>
                        {/* achievement */}
                        <div className="flex gap-6">
                            <p>{achievement.body}</p>
                            <ul className="flex gap-2">
                                {achievement.tags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                        {/* edit button */}
                    </li>
                ))}
            </ol>
            {/* add achievement */}
        </div>
    )
}