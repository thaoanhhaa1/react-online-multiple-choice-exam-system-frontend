import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Actions from '../components/Actions';
import Question from '../components/Question';
import Summary from '../components/Summary';
import useQuestion from '../hooks/useQuestion';
import Loading from './Loading';

const tags = [
    { tag: 'Chưa xem', color: '#F6F9FC' },
    { tag: 'Đã trả lời', color: '#f9d2bb' },
    { tag: 'Chưa trả lời', color: '#DEE5EF' },
];

const Exam = () => {
    const [params] = useSearchParams();
    const { fetch, isLoading, time, countdown } = useQuestion();

    useEffect(() => {
        const subject = params.get('subject');
        const size = params.get('size');

        fetch(subject, size);
    }, [fetch, params]);

    useEffect(() => {
        let id;

        if (time > 0) id = setTimeout(countdown, 1000);

        return () => clearTimeout(id);
    }, [countdown, time]);

    if (isLoading) return <Loading />;

    return (
        <div className='flex flex-col md:flex-row gap-5'>
            <Summary isExam tags={tags} title='Danh sách câu hỏi' />
            <div className='flex flex-col py-3 bg-[#fff] rounded-xl flex-1'>
                <Question />
                <Actions />
            </div>
        </div>
    );
};

export default Exam;
