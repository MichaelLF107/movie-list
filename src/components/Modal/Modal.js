import './Modal.scss';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ClickAwayListener } from '@mui/base';

export default function Modal({title, children, handleModal}) {
    return (
        <div className="modal">
            <ClickAwayListener onClickAway={handleModal}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="modal-title">{title}</span>
                    <div className="modal-close" onClick={() => handleModal()}>
                        <CloseOutlinedIcon />
                    </div>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
            </ClickAwayListener>
        </div>
    )
}