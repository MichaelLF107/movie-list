import './UserSelect.scss';

import { useState, useEffect } from 'react';

import { getAllUsers } from '../../services/UserServices';

export default function UserSelect() {
    const [users, setUsers] = useState([]);

    async function handleUsers() {
        const users = await getAllUsers();
        setUsers(users);
    }

    function handleLoggedUser() {
        const userId = window.localStorage.getItem('userId');
        if (userId) {
            window.location.href = '/home';
        }
    }

    function handleUserSelect(id) {
        window.localStorage.setItem('userId', id);
        window.location.href = '/home';
    }

    useEffect(() => {
        handleLoggedUser();
        handleUsers();
    }, []);

    return (
        <div className="UserSelect">
            <h1>Selecione um usuário</h1>
            <div className="user-list">
                {users.map((user, index) => (
                    <div className="user" key={index} onClick={() => handleUserSelect(user.id)}>
                        <p>{user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}