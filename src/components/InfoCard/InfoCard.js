import './InfoCard.scss'

import { useState } from 'react'
import MovieModal from '../MovieModal/MovieModal';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function InfoCard({movie}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLink = () => {
        if (movie.link !== '') {
            window.open(movie.link, '_blank');
        }
        return;
    }

    return (
        <>
            <div className="movie-card" onClick={() => setIsModalOpen(!isModalOpen)}>
                <div className="movie-card-options">
                    <img src={movie.logo} alt={movie.platform.toUpperCase()} className="card-logo" onClick={() => handleLink()} />
                    <VisibilityOutlinedIcon className={movie.watched ? 'card-watched' : 'card-not-watched'} />
                </div>
                {movie.file ?
                    <div className="movie-card-image">
                        <img src={movie.file} alt={movie.title} />
                    </div>
                : null}
                <span className="movie-title">{movie.title}</span>
            </div>
            {isModalOpen && <MovieModal movie={movie} handleModal={() => setIsModalOpen(!isModalOpen)} />}
        </>
    )
}