import { closeIcon } from '../../utils/icons';

const Modal = ({ title, desc, setModal }) => {

    return <div className="bpsmb_modal_main_area" onClick={(e) => {
        if (e.target.classList.contains('bpsmb_modal_main_area')) {
            setModal(false);
        }
    }}>
        <div className="modal_area">
            <div className="closeIcon" onClick={() => setModal(false)} >{closeIcon}</div>
            <h2 className="title">{title}</h2>
            <p className='desc' dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
    </div>
}
export default Modal;