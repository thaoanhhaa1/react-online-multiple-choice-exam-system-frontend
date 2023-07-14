import { useMemo } from 'react';
import { ANSWERED } from '~/constant';
import useQuestion from '~/hooks/useQuestion';

const Radio = ({ correctIndex, value, number, disabled }) => {
    const { activeNumber, results, handleStatusQuestion, handleResult } =
        useQuestion();
    const color = useMemo(() => {
        if (disabled) {
            if (number === correctIndex) return '#00C48C';
            if (results[activeNumber] === number) return 'red';
            return '#C4CFDD';
        }
        if (results[activeNumber] === number) return '#EF803D';
        return '#C4CFDD';
    }, [activeNumber, correctIndex, disabled, number, results]);

    const handleClick = () => {
        if (!disabled) {
            handleResult(number);
            handleStatusQuestion(ANSWERED);
        }
    };

    return (
        <label
            onClick={handleClick}
            className='flex gap-2 my-[10px] cursor-pointer group'
        >
            <input className='hidden' name='question' type='radio' />
            <div
                style={{
                    borderColor: color,
                }}
                className='flex-shrink-0 transition-all flex justify-center items-center w-[22px] h-[22px] border-2 group-hover:border-[#EF803D] rounded-full'
            >
                <div
                    style={{
                        backgroundColor: color === '#C4CFDD' ? '#fff' : color,
                    }}
                    className='transition-all w-[12px] h-[12px] rounded-full group-hover:bg-[#EF803D]'
                ></div>
            </div>
            <span className='select-none transition-all group-hover:text-[#EF803D] group-hover:font-bold'>
                {String.fromCharCode(65 + number)}. {value}
            </span>
        </label>
    );
};

export default Radio;
