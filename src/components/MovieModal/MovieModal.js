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
const crunchyroll = require('../../logos/crunchyroll.png');
const torrent = require('../../logos/torrent.png');
const star = require('../../logos/star.png');
const pi = require('../../logos/pi.png');

export default function MovieModal({movie, handleModal}) {
    const [netflixSelected, setNetflixSelected] = useState(movie.platform === 'netflix');
    const [huluSelected, setHuluSelected] = useState(movie.platform === 'hulu');
    const [disneySelected, setDisneySelected] = useState(movie.platform === 'disney');
    const [amazonSelected, setAmazonSelected] = useState(movie.platform === 'amazon');
    const [hboSelected, setHboSelected] = useState(movie.platform === 'hbo');
    const [paramountSelected, setParamountSelected] = useState(movie.platform === 'paramount');
    const [crunchyrollSelected, setCrunchyrollSelected] = useState(movie.platform === 'crunchyroll');
    const [torrentSelected, setTorrentSelected] = useState(movie.platform === 'torrent');
    const [starSelected, setStarSelected] = useState(movie.platform === 'star');
    const [piSelected, setPiSelected] = useState(movie.platform === 'pi');
    const [watched, setWatched] = useState(movie.watched);

    const handleChangeNetflix = () => {
        setNetflixSelected(!netflixSelected);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(false);
        setCrunchyrollSelected(false);
        setTorrentSelected(false);
        setStarSelected(false);
        setPiSelected(false);
        changeMoviePlatform(movie.id, 'netflix', 'https://www.netflix.com');
    }

    const handleChangeHulu = () => {
        setNetflixSelected(false);
        setHuluSelected(!huluSelected);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(false);
        setCrunchyrollSelected(false);
        setTorrentSelected(false);
        setStarSelected(false);
        setPiSelected(false);
        changeMoviePlatform(movie.id, 'hulu', 'https://www.hulu.com');
    }

    const handleChangeDisney = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(!disneySelected);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(false);
        setCrunchyrollSelected(false);
        setTorrentSelected(false);
        setStarSelected(false);
        setPiSelected(false);
        changeMoviePlatform(movie.id, 'disney', 'https://www.disneyplus.com');
    }

    const handleChangeAmazon = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(!amazonSelected);
        setHboSelected(false);
        setParamountSelected(false);
        setCrunchyrollSelected(false);
        setTorrentSelected(false);
        setStarSelected(false);
        setPiSelected(false);
        changeMoviePlatform(movie.id, 'amazon', 'https://www.primevideo.com/');
    }

    const handleChangeHbo = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(!hboSelected);
        setParamountSelected(false);
        setCrunchyrollSelected(false);
        setTorrentSelected(false);
        setStarSelected(false);
        setPiSelected(false);
        changeMoviePlatform(movie.id, 'hbo', 'https://www.hbomax.com/');
    }

    const handleChangeParamount = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(!paramountSelected);
        setCrunchyrollSelected(false);
        setTorrentSelected(false);
        setStarSelected(false);
        setPiSelected(false);
        changeMoviePlatform(movie.id, 'paramount', 'https://www.paramountplus.com/');
    }

    const handleChangeCrunchyroll = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(false);
        setCrunchyrollSelected(!crunchyrollSelected);
        setTorrentSelected(false);
        setStarSelected(false);
        setPiSelected(false);
        changeMoviePlatform(movie.id, 'crunchyroll', 'https://www.crunchyroll.com/');
    }

    const handleChangeTorrent = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(false);
        setCrunchyrollSelected(false);
        setTorrentSelected(!torrentSelected);
        setStarSelected(false);
        setPiSelected(false);
        changeMoviePlatform(movie.id, 'torrent', 'https://www.torrentz2.eu/');
    }

    const handleChangeStar = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(false);
        setCrunchyrollSelected(false);
        setTorrentSelected(false);
        setStarSelected(!starSelected);
        setPiSelected(false);
        changeMoviePlatform(movie.id, 'star', 'https://www.starz.com/');
    }

    const handleChangePi = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(false);
        setCrunchyrollSelected(false);
        setTorrentSelected(false);
        setStarSelected(false);
        setPiSelected(!piSelected);
        changeMoviePlatform(movie.id, 'pi', 'https://www.plex.tv/');
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
                    <img src={crunchyroll} alt="Crunchyroll" className={crunchyrollSelected ? 'selected' : ''} onClick={() => handleChangeCrunchyroll()} />
                    <img src={star} alt="Star" className={starSelected ? 'selected' : ''} onClick={() => handleChangeStar()} />
                    <img src={torrent} alt="Torrent" className={torrentSelected ? 'selected' : ''} onClick={() => handleChangeTorrent()} />
                    <img src={pi} alt="Pi" className={piSelected ? 'selected' : ''} onClick={() => handleChangePi()} />
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