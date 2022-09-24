import './AddUserModal.scss';

import Modal from '../Modal/Modal';
import ImageUpload from '../ImageUpload/ImageUpload';

import { TextField } from '@mui/material';

import { registerUser } from '../../services/UserServices';

import { useState } from 'react';

export default function AddUserModal({handleModal}) {
    const [name, setName] = useState('');

    const [currentImage, setCurrentImage] = useState({});

    const handleSubmit = async () => {
        const reader = new FileReader()
        reader.readAsDataURL(currentImage.file)
        reader.onload = async () => {
            const base64 = reader.result;
            const user = {
                name: name,
                file: base64,
                file_name: currentImage.file.name,
                admin: false
            }
            try {
                await registerUser(user);
            } catch (error) {
                console.log(error);
            }
            window.location.reload();
        }
    }

    const handleImageUpload = (image) => {
        console.log(image);
    }

    const options = [
        {
            text: 'Enviar',
            onClick: handleSubmit
        }
    ]

    return (
        <Modal handleModal={handleModal} options={options}>
            <div className="add-user-modal">
                <h1>Add User</h1>
                <TextField className="text-field" label="Nome" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                <ImageUpload handleImageUpload={handleImageUpload} setCurrentImage={setCurrentImage} />
            </div>
        </Modal>
    );
}