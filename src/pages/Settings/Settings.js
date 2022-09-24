import './Settings.scss';

import { useState, useEffect } from 'react';

import { getAllUsers } from '../../services/UserServices';

import Navbar from '../../components/Navbar/Navbar';
import UserRow from '../../components/UserRow/UserRow';
import AddUserModal from '../../components/AddUserModal/AddUserModal';

export default function Settings() {

    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleUsers = async () => {
        const users = await getAllUsers();
        setUsers(users);
    }

    const handleAddUser = () => {
        setShowModal(!showModal);
    }

    useEffect(() => {
        handleUsers();
        document.title = 'Watch List - Settings';
    }, []);

    return (
        <>
            <Navbar />
            <div className="settings-container">
                <div className="title">
                    Usuários
                    <div className="user-button" onClick={() => handleAddUser()}>
                        Adicionar Usuário
                    </div>
                </div>
                {users.map((user, index) => (
                    <UserRow user={user} key={index} />
                ))}
            </div>
            {showModal && <AddUserModal handleModal={() => handleAddUser()} />}
        </>
    );
}