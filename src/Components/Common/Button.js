import { useState } from 'react';
import Modal from './Modal';


const Button = ({ attributes }) => {
    const [modal, setModal] = useState(false)
    const { content } = attributes;
    const { btnText, title, desc } = content;

    const modalPorps = { title, desc, modal, setModal }

    return <div className='bpmb_modal_plugin'>
        {/* Button */}
        <div className='bpmb_button_area'>

            <button onClick={() => setModal(true)} className='btn'>{btnText}</button>
        </div>

        {/* Modal */}
        {modal && <Modal {...modalPorps} />}


    </div>
}
export default Button;