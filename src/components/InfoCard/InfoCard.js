import './InfoCard.scss'

import { useState } from 'react'
import MovieModal from '../MovieModal/MovieModal';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function InfoCard({movie}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLink = () => {
        window.open(movie.link, '_blank');
    }

    return (
        <>
            <div className="movie-card" onClick={() => setIsModalOpen(!isModalOpen)}>
                <img src={movie.logo} alt={movie.title} className="card-logo" onClick={() => handleLink()} />
                <VisibilityOutlinedIcon className={movie.watched ? 'card-watched' : 'card-not-watched'} />
                {movie.cover ?
                    <div className="movie-card-image">
                        <img src={movie.cover} alt={movie.title} />
                    </div>
                : null}
                <span className="movie-title">{movie.title}</span>
            </div>
            {isModalOpen && <MovieModal movie={movie} handleModal={() => setIsModalOpen(!isModalOpen)} />}
        </>
    )
}