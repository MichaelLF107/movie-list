import './UserRow.scss';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { deleteUser } from '../../services/UserServices';

const handleDeleteUser = async (id) => {
    await deleteUser(id);
    window.location.reload();
}

export default function UserRow({ user }) {
    return (
        <div className="user-row">
            <img src={user.file} alt="" className="user-avatar" />
            <p>{user.name}</p>
            <DeleteOutlineOutlinedIcon className="delete-icon" onClick={() => handleDeleteUser(user.id)} />
        </div>
    );
}