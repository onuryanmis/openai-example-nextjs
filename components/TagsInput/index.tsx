"use client";
import React, {useState} from 'react';
import './style.scss';
import {BsMusicNoteBeamed} from "react-icons/bs";

function TagsInput({tags, setTags}: any) {
    const [error, setError] = useState(false);

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter' && event.target.value.trim()) {
            if (tags.length >= 3) {
                setError(true);
                setTimeout(() => setError(false), 4000);
                return;
            }

            setTags([...tags, event.target.value.trim()]);
            event.target.value = '';
        }
    };

    const handleTagClick = (tag: any) => {
        setTags(tags.filter((t) => t !== tag));
    };

    return (
        <>
            <input type="text" onKeyDown={handleKeyDown} placeholder="Şarkı adı giriniz ve enter'a basınız."/>
            {error && <span className="validationError">En Fazla 3 şarkı ekleyebilirsiniz</span>}
            <div className="tags">
                {tags.map((tag, index) => (
                    <div key={index} className="tag" onClick={() => handleTagClick(tag)}>
                        <BsMusicNoteBeamed className="musicIcon"/>
                        <span className="musicName">{tag}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default TagsInput;
