import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Exam from './pages/Exam';
import Home from './pages/Home';
import Loading from './pages/Loading';
import Result from './pages/Result';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={
                        <DefaultLayout>
                            <Home />
                        </DefaultLayout>
                    }
                />
                <Route
                    path='/exam'
                    element={
                        <DefaultLayout>
                            <Exam />
                        </DefaultLayout>
                    }
                />
                <Route
                    path='/result'
                    element={
                        <DefaultLayout>
                            <Result />
                        </DefaultLayout>
                    }
                />
                <Route path='*' element={<Loading />} />
            </Routes>
        </Router>
    );
}

export default App;
