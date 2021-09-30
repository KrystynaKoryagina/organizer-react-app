import { useQuery } from 'react-query';

import { api } from '../api';

export const useTags = () => {
    const query = useQuery('tags', api.getTags);

    return query;
};
