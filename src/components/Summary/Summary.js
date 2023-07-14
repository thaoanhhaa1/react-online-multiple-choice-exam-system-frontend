import { v4 } from 'uuid';
import SummaryItem from '~/components/SummaryItem';
import Tag from '~/components/Tag';
import Time from '~/components/Time';
import { CORRECT } from '~/constant';
import useQuestion from '~/hooks/useQuestion';

const Summary = ({ title, tags, isExam = false }) => {
    const { questions, activeNumber, statusQuestions, numberQuestions } =
        useQuestion();

    return (
        <div className="max-h-[500px] flex flex-col md:w-1/3 p-3 pb-5 bg-white rounded-xl overflow-hidden">
            <div className="py-5 flex gap-4 items-center justify-between border-b border-[#f3f3f3]">
                <div className="text-xl font-bold color-[#3c4852]">{title}</div>
                {(isExam && <Time />) || (
                    <span className="font-semibold">
                        <span className="text-[#00C48C]">
                            {
                                statusQuestions?.filter(
                                    (statusQuestion) =>
                                        statusQuestion === CORRECT,
                                ).length
                            }
                        </span>
                        /{numberQuestions} đáp án đúng
                    </span>
                )}
            </div>
            <div className="mb-5 border-b border-[#f3f3f3]">
                <div className="py-5 flex flex-wrap justify-center gap-3">
                    {tags.map((tag) => (
                        <Tag color={tag.color} key={v4()}>
                            {tag.tag}
                        </Tag>
                    ))}
                </div>
                <div className="pb-5 text-center text-xs">
                    Bấm vào ô để xem câu hỏi
                </div>
            </div>
            <div className="justify-start flex flex-wrap gap-5 overflow-y-auto">
                {questions.map((item, index) => (
                    <SummaryItem
                        number={index}
                        isActive={activeNumber === index}
                        status={statusQuestions[index]}
                        key={v4()}
                    />
                ))}
            </div>
        </div>
    );
};

export default Summary;
