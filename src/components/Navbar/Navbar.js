import './Navbar.scss';
import { useState } from 'react';

import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import AddMovieModal from '../AddMovieModal/AddMovieModal';

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar-item">
                    <div className="navbar-button" onClick={() => handleModal()}>
                        <span>Add Serie</span>
                    </div>
                </div>
                <div className="navbar-item logo">
                    <LocalMoviesOutlinedIcon fontSize='xx-large' />
                    <span>Watch List</span>
                </div>
            </div>
            {isModalOpen && <AddMovieModal handleModal={handleModal} />}
        </>
    )
}