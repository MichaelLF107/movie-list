import './UserSelect.scss';

import { useState, useEffect } from 'react';

import { getAllUsers } from '../../services/UserServices';

import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';

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
            <div className="title"><BadgeOutlinedIcon fontSize="large" /> Selecione um usuário</div>
            <div className="user-list">
                {users.map((user, index) => (
                    <div className="user" key={index} onClick={() => handleUserSelect(user.id)}>
                        <AssignmentIndOutlinedIcon fontSize="inherit" />
                        <p>{user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}