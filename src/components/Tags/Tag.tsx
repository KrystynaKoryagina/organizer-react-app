import { FC, MouseEvent } from 'react';

import { ITag } from '../../types';
import { TagWrapper } from './Tags.styled';

export interface ITagPropTypes extends ITag {
    isSelected?: boolean;
    handleClick?: (event: MouseEvent<HTMLSpanElement>) => void;
}

export const Tag: FC<ITagPropTypes> = ({
    bg, color, name, isSelected, handleClick,
}) => {
    const selected = isSelected ? 'selected' : '';

    return (
        <TagWrapper
            className = { `${selected}` }
            onClick = { handleClick }
            bg = { bg }
            color = { color }>
            { name }
        </TagWrapper>
    );
};
