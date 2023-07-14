import axios from 'axios';
import { create } from 'zustand';
import { CORRECT, NOT_ANSWERED, NOT_SEEN, WRONG } from '../constant';

const useQuestion = create((set) => ({
    questions: [],
    numberQuestions: 0,
    activeNumber: 0,
    statusQuestions: [],
    results: [],
    time: 0,
    isLoading: true,
    fetch: (subject, size) =>
        set(async (state) => {
            state.setLoading(true);
            const r = await axios.get(
                `${process.env.REACT_APP_ENDPOINT}/question/all?subject=${subject}&size=${size}`,
            );

            const res = r.data;
            const length = res.length;

            const arr = new Array(length).fill(NOT_SEEN);
            arr[0] = NOT_ANSWERED;

            const result = {
                isLoading: false,
                activeNumber: 0,
                numberQuestions: length,
                questions: res,
                statusQuestions: arr,
                results: new Array(length).fill(null),
                time: length * 60,
            };

            state.setValue(result);
        }),
    setValue: (value) => set(() => value),
    setLoading: (isLoading) => set(() => ({ isLoading })),
    setActiveNumber: (activeNumber) =>
        set((state) => {
            if (state.statusQuestions[state.activeNumber] === NOT_SEEN)
                state.handleStatusQuestion(NOT_ANSWERED);

            return { activeNumber };
        }),
    setTime: (time) => set(() => ({ time })),
    handleStatusQuestion: (status) =>
        set((state) => {
            const statusQuestions = [...state.statusQuestions];
            statusQuestions[state.activeNumber] = status;
            return {
                statusQuestions,
            };
        }),
    handleResult: (result) =>
        set((state) => {
            const results = [...state.results];
            results[state.activeNumber] = result;
            return {
                results,
            };
        }),
    handleSubmit: () =>
        set((state) => ({
            activeNumber: 0,
            time: 0,
            statusQuestions: state.statusQuestions.map((s, index) => {
                const resultIndex = state.results[index];
                if (resultIndex === null) return WRONG;

                const question = state.questions[index];

                return question.options[resultIndex] === question.correctOption
                    ? CORRECT
                    : WRONG;
            }),
        })),
    countdown: () => set((state) => ({ time: state.time - 1 })),
    handleChangeQuestion: (number) =>
        set((state) => {
            if (state.time > 0) state.handleStatusQuestion(NOT_ANSWERED);

            return {
                activeNumber: state.activeNumber + number,
            };
        }),
}));

export default useQuestion;
