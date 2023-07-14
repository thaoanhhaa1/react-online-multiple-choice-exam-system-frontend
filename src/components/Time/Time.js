import React from 'react';
import useQuestion from '~/hooks/useQuestion';
import { getTime } from '~/utils';

const Time = () => {
    const { time } = useQuestion();

    return <span className="text-xl">{getTime(time)}</span>;
};

export default Time;
