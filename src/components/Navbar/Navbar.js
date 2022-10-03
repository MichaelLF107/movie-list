import './Navbar.scss';
import { useState, useEffect } from 'react';

import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import AddMovieModal from '../AddMovieModal/AddMovieModal';
import UserMenu from '../UserMenu/UserMenu';

import { getUserById } from '../../services/UserServices';

export default function Navbar() {
    const userId = parseInt(window.localStorage.getItem('userId'));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState({});

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleHome = () => {
        window.location.href = '/home';
    }

    const handleLogout = () => {
        window.localStorage.removeItem('userId');
        window.location.href = '/';
    }

    async function handleSelectedUser() {
        const user = await getUserById(userId);
        setUser(user);
    }

    useEffect(() => {
        handleSelectedUser();
    }, []);

    return (
        <>
            <div className="navbar">
                <div className="navbar-item">
                    <div className="navbar-button" onClick={() => handleModal()}>
                        <span>Add Serie</span>
                    </div>
                </div>
                <div className="navbar-item logo" onClick={handleHome}>
                    <LocalMoviesOutlinedIcon fontSize='xx-large' />
                    <span>Watch List</span>
                </div>
                <div className="user-menu-navbar">
                    <img src={user.file} className="user-pic" alt='' />
                    {isMenuOpen ? <KeyboardArrowUpOutlinedIcon fontSize='large' onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-arrow" /> : <KeyboardArrowDownOutlinedIcon fontSize='large' onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-arrow" />}
                </div>
            </div>
            {isModalOpen && <AddMovieModal handleModal={handleModal} />}
            {isMenuOpen && <UserMenu user={user} handleLogout={handleLogout} handleMenu={handleMenu} />}
        </>
    )
}