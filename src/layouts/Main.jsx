import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import UNDERDEVELOPMENT from '../components/UNDERDEVELOPMENT';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <UNDERDEVELOPMENT />
        </div>
    );
};

export default Main;
