import { Link } from 'react-router-dom';

const Subject = ({ subject }) => {
    return (
        <Link
            to='/exam?subject=pldc&size=50'
            className='flex items-center p-4 gap-8 bg-white rounded-md shadow-md'
        >
            <img
                className='w-10 h-10 xs:w-[150px] xs:h-[150px] object-cover rounded-md'
                src={subject.image}
                alt=''
            />
            <div>
                <h4 className='font-bold text-xl text-black'>
                    {subject.subject}
                </h4>
                <p className='mt-2'>Số câu hỏi: {subject.count}</p>
            </div>
        </Link>
    );
};

export default Subject;
