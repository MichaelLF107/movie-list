import { useState } from 'react';

import './MovieModal.scss';

import Modal from '../Modal/Modal';

import { Checkbox } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import { setMovieWatched, changeMoviePlatform } from '../../services/MovieService';

const netflix = require('../../logos/netflix.png');
const hulu = require('../../logos/hulu.png');
const disney = require('../../logos/disney.png');
const amazon = require('../../logos/amazon.png');
const hbo = require('../../logos/hbo.png');
const paramount = require('../../logos/paramount.png');

export default function MovieModal({movie, handleModal}) {
    const [netflixSelected, setNetflixSelected] = useState(movie.platform === 'netflix');
    const [huluSelected, setHuluSelected] = useState(movie.platform === 'hulu');
    const [disneySelected, setDisneySelected] = useState(movie.platform === 'disney');
    const [amazonSelected, setAmazonSelected] = useState(movie.platform === 'amazon');
    const [hboSelected, setHboSelected] = useState(movie.platform === 'hbo');
    const [paramountSelected, setParamountSelected] = useState(movie.platform === 'paramount');
    const [watched, setWatched] = useState(movie.watched);

    const handleChangeNetflix = () => {
        setNetflixSelected(!netflixSelected);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(false);
        changeMoviePlatform(movie.id, 'netflix', 'https://www.netflix.com');
    }

    const handleChangeHulu = () => {
        setNetflixSelected(false);
        setHuluSelected(!huluSelected);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(false);
        changeMoviePlatform(movie.id, 'hulu', 'https://www.hulu.com');
    }

    const handleChangeDisney = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(!disneySelected);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(false);
        changeMoviePlatform(movie.id, 'disney', 'https://www.disneyplus.com');
    }

    const handleChangeAmazon = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(!amazonSelected);
        setHboSelected(false);
        setParamountSelected(false);
        changeMoviePlatform(movie.id, 'amazon', 'https://www.primevideo.com/');
    }

    const handleChangeHbo = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(!hboSelected);
        setParamountSelected(false);
        changeMoviePlatform(movie.id, 'hbo', 'https://www.hbomax.com/');
    }

    const handleChangeParamount = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(!paramountSelected);
        changeMoviePlatform(movie.id, 'paramount', 'https://www.paramountplus.com/');
    }

    const handleChangeWatched = () => {
        setWatched(!watched);
        setMovieWatched(movie.id, !watched);
    }

    return (
        <Modal title="Serie Info" handleModal={handleModal}>
            <div className="movie-modal">
                <div className="movie-modal-info">
                    <span className="movie-modal-title">{movie.title}</span>
                </div>
                <img src={movie.file} alt={movie.title} />
                <div className="movie-modal-plat">
                    <img src={netflix} alt="Netflix" className={netflixSelected ? 'selected' : ''} onClick={() => handleChangeNetflix()} />
                    <img src={hulu} alt="Hulu" className={huluSelected ? 'selected' : ''} onClick={() => handleChangeHulu()} />
                    <img src={disney} alt="Disney" className={disneySelected ? 'selected' : ''} onClick={() => handleChangeDisney()} />
                    <img src={amazon} alt="Amazon" className={amazonSelected ? 'selected' : ''} onClick={() => handleChangeAmazon()} />
                    <img src={hbo} alt="HBO" className={hboSelected ? 'selected' : ''} onClick={() => handleChangeHbo()} />
                    <img src={paramount} alt="Paramount" className={paramountSelected ? 'selected' : ''} onClick={() => handleChangeParamount()} />
                </div>
                <div className="movie-modal-watched">
                    <span className="movie-modal-watched-title">Watched</span>
                        <Checkbox
                            icon={<VisibilityOutlinedIcon className="not-watched" style={{fontSize: "2.2rem"}} />}
                            checkedIcon={<VisibilityOutlinedIcon className="watched" style={{fontSize: "2.2rem"}} />}
                            checked={watched}
                            onChange={() => handleChangeWatched()}
                        />
                </div>
            </div>
        </Modal>
    )
}