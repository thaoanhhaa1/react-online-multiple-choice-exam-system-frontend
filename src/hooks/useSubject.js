import axios from 'axios';
import { create } from 'zustand';

const useSubject = create((set) => ({
    // attributes
    subjects: [],
    isLoading: false,

    // methods
    // GETTER/SETTER
    setValue: (value) => set(() => value),
    setLoading: (isLoading) => set(() => ({ isLoading })),

    // METHODS
    fetch: () =>
        set(async (state) => {
            try {
                state.setLoading(true);

                const res = await axios.get(
                    `${process.env.REACT_APP_ENDPOINT}/subjects/all`,
                );

                state.setValue({
                    subjects: res.data,
                    isLoading: false,
                });
            } catch (error) {
                state.setLoading(false);
            }
        }),
}));

export default useSubject;
