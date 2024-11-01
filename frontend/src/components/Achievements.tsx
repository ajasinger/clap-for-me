import { useState } from "react";
import TagDropdown from "./TagDropdown";
import AchievementInput from "./AchievementInput";

// Data
const tagOptionsArray = ["work", "health", "family"]

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
type AchievementProps = {
    date: string;
};

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
          return 'bg-green-200'
        case 'health':
          return 'bg-indigo-200'
        case 'family':
          return 'bg-red-200'
        default:
          return 'bg-lightBlue-200'
      }
}

export default function Achievements({ date }: AchievementProps) {
    const [achievements, setAchievements] = useState<Achievements[]>(data);
    const [tagOptions, setTagOptions] = useState<string[]>(tagOptionsArray)
    const [isEditing, setIsEditing] = useState<boolean>(false);


    return(
        <div className="flex flex-col gap-6">
            <h1 className="text-xl font-bold">{date}</h1>
            <ol className="flex flex-col gap-6">
                {achievements[0].achievements.map((achievement, index) => (
                    <li key={achievement.id} className="flex items-center gap-12">
                        {/* dropdown */}
                        {isEditing && 
                            < TagDropdown 
                                id={achievement.id} 
                                tagOptions={tagOptions} 
                                setTagOptions={setTagOptions} 
                                setAchievements={setAchievements} 
                                tagColor={tagColor}
                            />
                        }
                        {/* achievement */}
                        <div className="flex items-center gap-6">
                            <p>{`${index +1}. ${achievement.body}`}</p>
                            <ul className="flex gap-2">
                                {achievement.tags.map((tag, index) => (
                                    <li 
                                        key={index}
                                        //style={{ backgroundColor: tagColor(tag) }}
                                        className={`px-6 py-1 rounded-full ${tagColor(tag)}`}
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
            <AchievementInput 
                date={date}
                setAchievements={setAchievements} 
                tagColor={tagColor}
                setTagOptions={setTagOptions} 
                tagOptions={tagOptions}
            />
        </div>
    )
}