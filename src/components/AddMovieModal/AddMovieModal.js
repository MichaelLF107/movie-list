import './AddMovieModal.scss';

import { useState } from 'react';
import Modal from '../Modal/Modal';
import { TextField } from '@mui/material';

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

    const handleSubmit = () => {
        console.log("titulo: ", title);
        if (netflixSelected) {
            console.log("netflix");
        }
        if (huluSelected) {
            console.log("hulu");
        }
        if (disneySelected) {
            console.log("disney");
        }
        if (amazonSelected) {
            console.log("amazon");
        }
        if (hboSelected) {
            console.log("hbo");
        }
        if (paramountSelected) {
            console.log("paramount");
        }
    }

    return (
        <Modal title="Add Serie" handleModal={handleModal}>
            <div className="inputs">
                <TextField className="text-field" label="Nome" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
                <div className="movie-modal-plat">
                    <img src={netflix} alt="Netflix" className={netflixSelected ? 'selected' : ''} onClick={() => handleChangeNetflix()} />
                    <img src={hulu} alt="Hulu" className={huluSelected ? 'selected' : ''} onClick={() => handleChangeHulu()} />
                    <img src={disney} alt="Disney" className={disneySelected ? 'selected' : ''} onClick={() => handleChangeDisney()} />
                    <img src={amazon} alt="Amazon" className={amazonSelected ? 'selected' : ''} onClick={() => handleChangeAmazon()} />
                    <img src={hbo} alt="HBO" className={hboSelected ? 'selected' : ''} onClick={() => handleChangeHbo()} />
                    <img src={paramount} alt="Paramount" className={paramountSelected ? 'selected' : ''} onClick={() => handleChangeParamount()} />
                </div>
            </div>
            <button onClick={() => handleSubmit()}>Submit</button>
        </Modal>
    )
}