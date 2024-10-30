import { useState } from "react"

type TagDropdownProps = {
    id: Number;
    tagOptions: string[];
    tagColor: (tag: string) => string;
    setTagOptions: React.Dispatch<React.SetStateAction<string[]>>;
    setAchievements: React.Dispatch<React.SetStateAction<{ date: string; achievements: { id: number; body: string; tags: string[]; }[]; }[]>>;
};

  

export default function TagDropdown({id, tagColor, tagOptions, setTagOptions, setAchievements}: TagDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleTagClick = (tag: string) => {
        setTagOptions((prevData) => [...prevData, tag])
        // setAchievements(prevData => 
        //     prevData.map(day => {
        //         ...day,
        //         achievements: 
        //     })
        // ])
        setIsOpen(false);

    }

    return(
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-40 py-1 border border-black relative z-1"
            >
                topic
            </button>
            {isOpen && 
                <div className="absolute bg-white border border-black w-40 py-1 z-50 mt-1 text-center shadow-lg">
                    <ul>
                        {tagOptions.map((tag, index) => (
                            <li 
                                key={index} 
                                onClick={() => handleTagClick(tag)}
                                style={{ backgroundColor: tagColor(tag) }}
                                className="px-6 py-1 m-4 rounded-full"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <button className="mb-4">+ add topic</button>
                </div>
            }
        </div>
    )
}