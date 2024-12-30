import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl } from '@wordpress/components';
import { TinyEditor } from '../Panel/TinyEditor/TinyEditor';


const General = ({ attributes, setAttributes }) => {
    const { content } = attributes;
    const { btnText, title, desc } = content;

    return <PanelBody className='bPlPanelBody' title={__('Settings', 'modal-block-plugin')}>
        <TextControl label={__('Button Title', 'modal-block-plugin')} value={btnText} onChange={(val) =>
            setAttributes({ content: { ...content, btnText: val } })} />

        <TextControl label={__('Title', 'modal-block-plugin')} value={title} onChange={(val) =>
            setAttributes({ content: { ...content, title: val } })} />

        <TinyEditor
            value={desc}
            onChange={val => setAttributes({ content: { ...content, desc: val } })}
        />

    </PanelBody>
}
export default General;