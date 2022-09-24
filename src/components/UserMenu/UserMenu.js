import './UserMenu.scss';

import { ClickAwayListener } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function UserMenu({ user, handleLogout, handleMenu }) {

    const handleSettings = () => {
        window.location.href = '/settings';
    }

    return (
        <ClickAwayListener onClickAway={() => handleMenu()}>
            <div className="user-menu">
                <div className="menu-item">
                    <span className="user-name">{user.name}</span>
                </div>
                <hr className="hr" />
                <div className="menu-user-options">
                    {user.admin ? (
                        <div className="menu-item menu-button" onClick={() => handleSettings()}>
                            <SettingsOutlinedIcon />
                            <span>Settings</span>
                        </div>
                    ) : null}
                    <div className="menu-item menu-button" onClick={() => handleLogout()}>
                        <LogoutOutlinedIcon />
                        <span>Logout</span>  
                    </div>
                </div>
            </div>
        </ClickAwayListener>
    );
}