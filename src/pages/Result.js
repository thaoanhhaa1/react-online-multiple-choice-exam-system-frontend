import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import useQuestion from '~/hooks/useQuestion';
import Question from '../components/Question';
import Summary from '../components/Summary';

const tags = [
    { tag: 'Trả lời đúng', color: '#00C48C' },
    { tag: 'Trả lời sai', color: '#ff7272' },
];

const Result = () => {
    const { activeNumber, numberQuestions, handleChangeQuestion } =
        useQuestion();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Trắc nghiệm Online miễn phí - IUH';
    }, []);

    useEffect(() => {
        if (!numberQuestions) navigate('/');
    }, [navigate, numberQuestions]);

    return (
        <div className='flex flex-col md:flex-row gap-5'>
            <Summary tags={tags} title='Kết quả bài thi' />
            <div className='flex flex-col py-3 bg-[#fff] rounded-xl flex-1'>
                <Question isResult />
                <div className='p-3 border-t border-[#e2e8f0] mt-2 flex flex-col md:flex-row md:justify-between gap-3 flex-wrap'>
                    <Button
                        onClick={() => handleChangeQuestion(-1)}
                        disabled={activeNumber === 0}
                        backgroundColor='#25a55f'
                    >
                        Quay lại câu trước
                    </Button>
                    <Button
                        onClick={() => handleChangeQuestion(1)}
                        disabled={activeNumber === numberQuestions - 1}
                        backgroundColor='#f31f67'
                    >
                        Câu tiếp theo
                    </Button>
                    <Button
                        onClick={() => navigate(-1)}
                        fontWeight='700'
                        backgroundColor='#f26c4f'
                    >
                        Làm lại bài thi
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Result;
