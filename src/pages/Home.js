import { useEffect } from 'react';
import Subject from '~/components/Subject';
import useSubject from '~/hooks/useSubject';
import Loading from './Loading';

const Home = () => {
    const { isLoading, subjects, fetch } = useSubject();

    useEffect(() => {
        document.title = 'Trắc nghiệm Online miễn phí - IUH';
    }, []);

    useEffect(() => {
        if (subjects.length === 0) fetch();
    }, [fetch, subjects.length]);

    if (isLoading) return <Loading />;

    return (
        <div>
            <div className='grid grid-cols-1 dl:grid-cols-2 gap-4'>
                {subjects.map((subject) => (
                    <Subject key={subject._id} subject={subject} />
                ))}
            </div>
        </div>
    );
};

export default Home;
