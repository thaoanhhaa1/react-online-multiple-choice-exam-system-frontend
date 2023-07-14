import { useMemo } from 'react';
import { ANSWERED, CORRECT, NOT_ANSWERED, WRONG } from '~/constant';
import useQuestion from '~/hooks/useQuestion';

const SummaryItem = ({ number, status, isActive }) => {
    const setActiveNumber = useQuestion((state) => state.setActiveNumber);
    const style = useMemo(() => {
        let s = {};

        if (status === CORRECT)
            s = {
                color: '#fff',
                backgroundColor: '#00C48C',
                borderColor: '#00C48C',
            };
        else if (status === WRONG)
            s = {
                color: '#fff',
                backgroundColor: '#ff7272',
                borderColor: '#ff7272',
            };
        else if (status === ANSWERED)
            s = {
                color: '#EF803D',
                backgroundColor: '#f9d2bb',
                borderColor: '#f9d2bb',
            };
        else if (status === NOT_ANSWERED)
            s = {
                color: '#fff',
                backgroundColor: '#DEE5EF',
                borderColor: '#DEE5EF',
            };
        else
            s = {
                color: '#67758D',
                backgroundColor: '#F6F9FC',
                borderColor: '#F6F9FC',
            };

        if (isActive)
            s = {
                ...s,
                borderColor: '#67758D',
                fontSize: '20px',
            };

        return s;
    }, [isActive, status]);

    return (
        <div
            style={style}
            className="select-none cursor-pointer flex justify-center items-center w-10 h-10 border-2 font-bold rounded"
            onClick={() => setActiveNumber(number)}
        >
            {number + 1}
        </div>
    );
};

export default SummaryItem;
