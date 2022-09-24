import './UserSelect.scss';

import { useState, useEffect } from 'react';

import { getAllUsers } from '../../services/UserServices';

import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

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
        document.title = 'Watch List - User Select';
    }, []);

    return (
        <div className="UserSelect">
            <div className="title"><BadgeOutlinedIcon fontSize="large" /> Selecione um usuário</div>
            <div className="user-list">
                {users.map((user, index) => (
                    <div className="user" key={index} onClick={() => handleUserSelect(user.id)}>
                        <img src={user.file} className="userPic" alt='' />
                        <p>{user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}