import React, { useEffect, useState } from 'react';
import useQuestion from '~/hooks/useQuestion';
import Radio from '../Radio';

const Question = ({ isResult = false }) => {
    const { questions, activeNumber } = useQuestion();
    const [question, setQuestion] = useState();

    useEffect(
        () => setQuestion(questions?.[activeNumber]),
        [activeNumber, questions],
    );

    return (
        <>
            <header className="px-3">
                <div className="mb-1 text-xl font-bold color-[#333d46]">
                    Câu {activeNumber + 1}
                </div>
                <p className="py-5 border-b border-[#e2e8f0]">
                    {question?.questionText}
                </p>
            </header>
            <section className="flex-1 px-3">
                <div className="mt-5 font-bold">Chọn đáp án đúng:</div>
                {question?.options.map((item, index) => {
                    return (
                        <Radio
                            correctIndex={question.options.findIndex(
                                (item) => item === question.correctOption,
                            )}
                            disabled={isResult}
                            value={item}
                            number={index}
                            key={index}
                        />
                    );
                })}
            </section>
        </>
    );
};

export default Question;
