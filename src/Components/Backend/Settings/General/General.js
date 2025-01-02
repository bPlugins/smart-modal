import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import { TinyEditor } from '../Panel/TinyEditor/TinyEditor';
import { btnAlignOpt } from '../../../../utils/options';


const General = ({ attributes, setAttributes, updateObject }) => {
    const { content, button } = attributes;

    const { btnText, title, desc } = content;

    return <>
        <PanelBody className='bPlPanelBody' title={__('Settings', 'smart-modal')} initialOpen={true}>
            <TextControl label={__('Button Title', 'smart-modal')} value={btnText} onChange={(val) =>
                setAttributes({ content: { ...content, btnText: val } })} />

            <TextControl label={__('Title', 'smart-modal')} value={title} onChange={(val) =>
                setAttributes({ content: { ...content, title: val } })} />

            <TinyEditor value={desc} onChange={val => setAttributes({ content: { ...content, desc: val } })} />

        </PanelBody>

        <PanelBody className='bPlPanelBody' title={__('Button', 'smart-modal')} initialOpen={false}>
            <ToggleControl className='mb20' label={__('Full width', 'smart-modal')} checked={button?.isFullWidth} onChange={val => updateObject("button", "isFullWidth", val)} />

            {
                !button?.isFullWidth && <SelectControl label="Size" value={button?.align} options={btnAlignOpt} onChange={(val) => updateObject("button", "align", val)} />
            }


        </PanelBody>
    </>
}
export default General;