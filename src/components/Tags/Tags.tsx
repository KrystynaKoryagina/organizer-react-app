import { FC, useState, useEffect } from 'react';

import { Tag } from './Tag';

import { useTags, useTasks } from '../../hooks';
import { TagsWrapper } from './Tags.styled';

export interface ITagsPropTypes {
    handleTagClick: (id: string) => void;
}

export const Tags: FC<ITagsPropTypes> = ({ handleTagClick }) => {
    const { data: tags } = useTags();
    const { selectedTask } = useTasks();
    const [selectedTagId, setSelectedTagId] = useState('');

    useEffect(() => {
        if (selectedTask) {
            setSelectedTagId(selectedTask.tag.id);
        } else {
            setSelectedTagId('');
        }
    }, [selectedTask]);

    const handleClick = (id: string) => {
        setSelectedTagId(id);
        handleTagClick(id);
    };

    const tagsJSX = tags?.map((tag) => <Tag
        key = { tag.id }
        { ...tag }
        isSelected = { selectedTagId === tag.id }
        handleClick = { () => handleClick(tag.id) } />);

    return (
        <TagsWrapper>{ tagsJSX }</TagsWrapper>
    );
};
