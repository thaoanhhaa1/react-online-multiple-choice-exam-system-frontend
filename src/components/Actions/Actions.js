import Button from '~/components/Button';
import { NOT_ANSWERED } from '~/constant';
import useQuestion from '~/hooks/useQuestion';
import { getTime } from '~/utils';

const Actions = () => {
    const {
        activeNumber,
        time,
        numberQuestions,
        handleChangeQuestion,
        handleStatusQuestion,
        handleResult,
        handleSubmit,
    } = useQuestion();

    const handleRemoveResult = () => {
        handleStatusQuestion(NOT_ANSWERED);
        handleResult();
    };

    return (
        <div className="p-3 border-t border-[#e2e8f0]">
            <div className="flex justify-between items-center">
                <span
                    onClick={handleRemoveResult}
                    className="select-none cursor-pointer text-[red] font-bold leading-10"
                >
                    Xóa câu trả lời
                </span>
                <span>{getTime(time)}</span>
            </div>
            <div className="mt-2 flex flex-col lg:flex-row lg:justify-between gap-3 flex-wrap">
                <Button
                    onClick={() => handleChangeQuestion(-1)}
                    disabled={activeNumber === 0}
                    backgroundColor="#25a55f"
                >
                    Quay lại câu trước
                </Button>
                <Button
                    onClick={() => handleChangeQuestion(1)}
                    disabled={activeNumber === numberQuestions - 1}
                    backgroundColor="#f31f67"
                >
                    Lưu và chuyển câu
                </Button>
                <Button
                    to="/result"
                    onClick={handleSubmit}
                    fontWeight="700"
                    backgroundColor="#f26c4f"
                >
                    Nộp bài
                </Button>
            </div>
        </div>
    );
};

export default Actions;
