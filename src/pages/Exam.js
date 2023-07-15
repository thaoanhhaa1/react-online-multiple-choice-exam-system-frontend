import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Actions from '../components/Actions';
import Question from '../components/Question';
import Summary from '../components/Summary';
import useQuestion from '../hooks/useQuestion';
import Loading from './Loading';
import PageNotFound from './PageNotFound';

const tags = [
    { tag: 'Chưa xem', color: '#F6F9FC' },
    { tag: 'Đã trả lời', color: '#f9d2bb' },
    { tag: 'Chưa trả lời', color: '#DEE5EF' },
];

const Exam = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const [firstRender, setFirstRender] = useState(true);
    const { fetch, isLoading, questions, time, countdown, handleSubmit } =
        useQuestion();

    useEffect(() => {
        document.title = 'Trắc nghiệm Online miễn phí - IUH';
    }, []);

    useEffect(() => {
        const subject = params.get('subject');
        const size = params.get('size');

        fetch(subject, size);
    }, [fetch, params]);

    useEffect(() => setFirstRender(false), []);

    useEffect(() => {
        let id;

        if (time > 0) id = setTimeout(countdown, 1000);
        else if (questions.length > 0 && !isLoading && !firstRender) {
            handleSubmit();
            navigate('/result');
        }

        return () => clearTimeout(id);
    }, [
        countdown,
        firstRender,
        handleSubmit,
        isLoading,
        navigate,
        questions.length,
        time,
    ]);

    if (isLoading) return <Loading />;
    else if (questions.length === 0) return <PageNotFound />;

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
