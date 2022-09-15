import './Modal.scss';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ClickAwayListener } from '@mui/base';

export default function Modal({title, children, handleModal, options}) {
    if (!options) {
        options = [];
    }

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
                <div className="modal-footer">
                    {options.map((option, index) => (
                        <div key={index} className="modal-footer-option" onClick={() => option.onClick()}>
                            {option.text}
                        </div>
                    ))}
                </div>
            </div>
            </ClickAwayListener>
        </div>
    )
}