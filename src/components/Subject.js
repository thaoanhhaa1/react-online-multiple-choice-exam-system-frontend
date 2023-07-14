import { Link } from 'react-router-dom';

const Subject = () => {
    return (
        <Link
            to='/exam?subject=pldc&size=50'
            className='flex items-center p-4 gap-8 bg-white rounded-md'
        >
            <img
                className='w-[150px] h-[150px] object-cover rounded-md'
                src='/pldc.jpg'
                alt=''
            />
            <div>
                <h4 className='font-bold text-xl text-black'>
                    Pháp luật đại cương
                </h4>
            </div>
        </Link>
    );
};

export default Subject;
