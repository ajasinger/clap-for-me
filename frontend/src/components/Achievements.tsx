import { useState } from "react";
import TagDropdown from "./TagDropdown";

// Data
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
                    body: "did a presentation.",
                    tags: ["work"] 
                },
            ]
        }
]

// Types
type Achievement = {
    id: number;
    body: string;
    tags: string[];
  };
  
  type Achievements = {
    date: string;
    achievements: Achievement[];
  };

// Styling
const tagColor = (tag: string) => {
    switch (tag) {
        case 'work':
          return '#BAFEC9'
        case 'health':
          return '#BAC5FE'
        case 'family':
          return '#FEBABA'
        default:
          return '#BAEAFE'
      }
}

export default function Achievements() {
    const [achievements, setAchievements] = useState<Achievements[]>(data);
    const [tagOptions, setTagOptions] = useState(tagOptionsArray)


    return(
        <div className="flex flex-col gap-6">
            <h1 className="text-xl font-bold">{achievements[0].date}</h1>
            <ol className="flex flex-col gap-6">
                {achievements[0].achievements.map((achievement) => (
                    <li key={achievement.id} className="flex items-center gap-12">
                        {/* dropdown */}
                        < TagDropdown id={achievement.id} tagOptions={tagOptions} setTagOptions={setTagOptions} setAchievements={setAchievements}/>
                        {/* achievement */}
                        <div className="flex items-center gap-6">
                            <p>{achievement.body}</p>
                            <ul className="flex gap-2">
                                {achievement.tags.map((tag, index) => (
                                    <li 
                                        key={index}
                                        style={{ backgroundColor: tagColor(tag) }}
                                        className="px-6 py-1 rounded-full"
                                    >
                                        {tag}
                                    </li>
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