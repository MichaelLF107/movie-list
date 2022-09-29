import './AddMovieModal.scss';

import { useState } from 'react';
import Modal from '../Modal/Modal';
import { TextField } from '@mui/material';
import ImageUpload from '../ImageUpload/ImageUpload';

import { registerMovie } from '../../services/MovieService';

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
const watched = false;

export default function AddMovieModal({handleModal}) {
    const [title, setTitle] = useState('');
    const [netflixSelected, setNetflixSelected] = useState(false);
    const [huluSelected, setHuluSelected] = useState(false);
    const [disneySelected, setDisneySelected] = useState(false);
    const [amazonSelected, setAmazonSelected] = useState(false);
    const [hboSelected, setHboSelected] = useState(false);
    const [paramountSelected, setParamountSelected] = useState(false);
    const [crunchyrollSelected, setCrunchyrollSelected] = useState(false);
    const [torrentSelected, setTorrentSelected] = useState(false);
    const [starSelected, setStarSelected] = useState(false);
    const [piSelected, setPiSelected] = useState(false);
    const [currentImage, setCurrentImage] = useState({});

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
    }

    const handleImageUpload = (imageList) => {
        console.log(imageList);
    }

    const handleSubmit = async () => {
        const reader = new FileReader()
        reader.readAsDataURL(currentImage.file)
        let platform = '';
        let link = '';
        if (netflixSelected) {
            platform = 'netflix';
            link = 'https://www.netflix.com/browse';
        }
        if (huluSelected) {
            platform = 'hulu';
            link = 'https://www.hulu.com/welcome';
        }
        if (disneySelected) {
            platform = 'disney';
            link = 'https://www.disneyplus.com/';
        }
        if (amazonSelected) {
            platform = 'amazon';
            link = 'https://www.primevideo.com/';
        }
        if (hboSelected) {
            platform = 'hbo';
            link = 'https://www.hbomax.com/';
        }
        if (paramountSelected) {
            platform = 'paramount';
            link = 'https://www.paramountplus.com/';
        }
        if (crunchyrollSelected) {
            platform = 'crunchyroll';
            link = 'https://www.crunchyroll.com/';
        }
        if (torrentSelected) {
            platform = 'torrent';
            link = '';
        }
        if (starSelected) {
            platform = 'star';
            link = 'https://www.starplus.com/';
        }
        if (piSelected) {
            platform = 'pi';
            link = 'https://pifansubs.org/';
        }
        reader.onload = async () => {
            const base64 = reader.result;
            const movie = {
                title: title,
                link: link,
                platform: platform,
                watched: watched,
                user_id: parseInt(localStorage.getItem('userId')),
                file: base64,
                file_name: currentImage.file.name
            }
            await registerMovie(movie);
            window.location.reload();
        }
    }

    const options = [
        {
            text: 'Enviar',
            onClick: handleSubmit
        }
    ]

    return (
        <Modal title="Add Serie" handleModal={handleModal} options={options}>
            <div className="add-movie-modal">
                <div className="inputs">
                    <TextField className="text-field" label="Nome" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <div className="movie-modal-plat">
                        <img src={netflix} alt="Netflix" className={netflixSelected ? 'selected' : 'image'} onClick={() => handleChangeNetflix()} />
                        <img src={hulu} alt="Hulu" className={huluSelected ? 'selected' : 'image'} onClick={() => handleChangeHulu()} />
                        <img src={disney} alt="Disney" className={disneySelected ? 'selected' : 'image'} onClick={() => handleChangeDisney()} />
                        <img src={amazon} alt="Amazon" className={amazonSelected ? 'selected' : 'image'} onClick={() => handleChangeAmazon()} />
                        <img src={hbo} alt="HBO" className={hboSelected ? 'selected' : 'image'} onClick={() => handleChangeHbo()} />
                        <img src={paramount} alt="Paramount" className={paramountSelected ? 'selected' : 'image'} onClick={() => handleChangeParamount()} />
                        <img src={crunchyroll} alt="Crunchyroll" className={crunchyrollSelected ? 'selected' : 'image'} onClick={() => handleChangeCrunchyroll()} />
                        <img src={star} alt="Star" className={starSelected ? 'selected' : 'image'} onClick={() => handleChangeStar()} />
                        <img src={torrent} alt="Torrent" className={torrentSelected ? 'selected' : 'image'} onClick={() => handleChangeTorrent()} />
                        <img src={pi} alt="Pi" className={piSelected ? 'selected' : 'image'} onClick={() => handleChangePi()} />
                    </div>
                </div>
                <div className="image-upload">
                    <ImageUpload handleImageUpload={handleImageUpload} setCurrentImage={setCurrentImage} />
                </div>
            </div>
        </Modal>
    )
}