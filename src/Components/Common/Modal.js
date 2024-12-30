import { closeIcon } from '../../utils/icons';

const Modal = ({ title, desc, modal, setModal }) => {

    return <div className="bpmb_modal_main_area" onClick={(e) => {
        if (e.target.classList.contains('bpmb_modal_main_area')) {
            setModal(false);
        }
    }}>
        <div className="modal_area">
            <div className="closeIcon" onClick={() => setModal(false)} >{closeIcon}</div>
            <h2>{title}</h2>
            <p className='desc' dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
    </div>
}
export default Modal;