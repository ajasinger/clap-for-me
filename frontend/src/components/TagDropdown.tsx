import { useState } from "react"

type TagDropdownProps = {
    tagOptions: string[];
    setTagOptions: React.Dispatch<React.SetStateAction<string[]>>;
    setAchievements: React.Dispatch<React.SetStateAction<{ date: string; achievements: { id: number; body: string; tags: string[]; }[]; }[]>>;
  };

  

export default function TagDropdown({tagOptions, setTagOptions, setAchievements}: TagDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleTagClick = (tag: string) => {
        //setTagOptions((prevData) => [...prevData, tag])
        setAchievements(prevData => [...prevData, 
        ])
        setIsOpen(false);

    }

    return(
        <div>
            <button
                onClick={() => setIsOpen(true)}
            >
                topic
            </button>
            {isOpen && 
                <div>
                    <ul>
                        {tagOptions.map((tag, index) => (
                            <li key={index} onClick={() => handleTagClick(tag)}>{tag}</li>
                        ))}
                    </ul>
                    {/* <button>+ add topic</button> */}
                </div>
            }
        </div>
    )
}