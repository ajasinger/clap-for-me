import { useState } from "react";

type AchievementInputProps = {
    tagColor: (tag: string) => string;
    tagOptions: string[];
    setTagOptions: React.Dispatch<React.SetStateAction<string[]>>;
    setAchievements: React.Dispatch<React.SetStateAction<{ date: string; achievements: { id: number; body: string; tags: string[]; }[]; }[]>>;
};

export default function AchievementInput({ setAchievements, tagColor, setTagOptions, tagOptions}: AchievementInputProps) {
    const [newAchievement, setNewAchievement] = useState('');
    const [newTags, setNewTags] = useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //match date
        //for that date add object 
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <label htmlFor="achievementInput">Add an achievement:</label>
                <div className=" flex flex-col gap-2 border border-black p-2">
                    <textarea 
                        id="achievementInput"
                        className="w-full"
                        rows={4}
                        placeholder="your achievement"
                        onChange={e => setNewAchievement(e.target.value)}
                        value={``}
                    />
                    <ul>
                        {newTags.length > 0 && newTags.map((tag, index) => (
                            <li key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                    <p>Add tags:</p>
                    <ul className="flex gap-2">
                        {tagOptions.map((tag, index) => (
                            <li 
                                key={index}
                                className="border border-black px-6 py-1 rounded-full"
                                onClick={() => setNewTags(prevTags => [...prevTags, tag])}
                            >
                                {`+ ${tag}`}
                            </li>
                        ))}
                    </ul>
                </div>
                <button type="submit" className="bg-black rounded-full text-white w-fit px-6 py-2 mt-6">
                    Add achievement
                </button>
            </form>
        </div>
    )
}