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

export default function AddMovieModal({handleModal}) {
    const [title, setTitle] = useState('');
    const [netflixSelected, setNetflixSelected] = useState(false);
    const [huluSelected, setHuluSelected] = useState(false);
    const [disneySelected, setDisneySelected] = useState(false);
    const [amazonSelected, setAmazonSelected] = useState(false);
    const [hboSelected, setHboSelected] = useState(false);
    const [paramountSelected, setParamountSelected] = useState(false);
    const [currentImage, setCurrentImage] = useState({});

    const handleChangeNetflix = () => {
        setNetflixSelected(!netflixSelected);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(false);
    }

    const handleChangeHulu = () => {
        setNetflixSelected(false);
        setHuluSelected(!huluSelected);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(false);
    }

    const handleChangeDisney = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(!disneySelected);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(false);
    }

    const handleChangeAmazon = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(!amazonSelected);
        setHboSelected(false);
        setParamountSelected(false);
    }

    const handleChangeHbo = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(!hboSelected);
        setParamountSelected(false);
    }

    const handleChangeParamount = () => {
        setNetflixSelected(false);
        setHuluSelected(false);
        setDisneySelected(false);
        setAmazonSelected(false);
        setHboSelected(false);
        setParamountSelected(!paramountSelected);
    }

    const handleImageUpload = (imageList) => {
        console.log(imageList);
    }

    const handleSubmit = async () => {
        console.log("titulo: ", title);
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
        console.log("image: ", await registerMovie(title, currentImage.file, link, platform, false, parseInt(window.localStorage.getItem('userId'))));
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
                    </div>
                </div>
                <div className="image-upload">
                    <ImageUpload handleImageUpload={handleImageUpload} setCurrentImage={setCurrentImage} />
                </div>
            </div>
        </Modal>
    )
}