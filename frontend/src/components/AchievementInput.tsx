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

    const handleDelete = (deleteTag:string) => {
        const filteredTags = newTags.filter(tag => tag !== deleteTag);
        setNewTags(filteredTags);
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <label htmlFor="achievementInput" className="font-semibold">Add an achievement:</label>
                <div className=" flex flex-col gap-2 border border-black p-2">
                    <textarea 
                        id="achievementInput"
                        className="w-full"
                        rows={4}
                        placeholder="your achievement"
                        onChange={e => setNewAchievement(e.target.value)}
                        value={newAchievement}
                    />
                    <ul className="flex gap-2 min-h-8">
                        {newTags.length > 0 && newTags.map((tag, index) => (
                            <li 
                                key={index}
                                style={{ backgroundColor: tagColor(tag) }}
                                className="flex gap-2 px-6 py-1 rounded-full"
                            >
                                {tag}
                                <button onClick={()=>handleDelete(tag)}>x</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                    <p className="font-semibold">Add tags:</p>
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