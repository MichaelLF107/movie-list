import './AddMovieModal.scss';

import Modal from '../Modal/Modal';

export default function AddMovieModal({handleModal}) {
    return (
        <Modal title="Add Movie" handleModal={handleModal}>
            <span>ADICIONAR FILMINHO 👍</span>
        </Modal>
    )
}