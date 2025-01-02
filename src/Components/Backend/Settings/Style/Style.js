import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import { PanelBody, __experimentalBoxControl as BoxControl, RangeControl, __experimentalUnitControl as UnitControl, PanelRow, __experimentalBorderBoxControl as BorderBoxControl } from '@wordpress/components';
import { Typography, ColorsControl, ShadowControl, Label, ColorControl } from '../../../../../../bpl-tools/Components';
import { BDevice } from '../../../../../../bpl-tools/Components/Deprecated';
import { pxUnit, emUnit, perUnit } from '../../../../../../bpl-tools/utils/options';

const Style = ({ attributes, updateObject, setAttributes }) => {

    const [device, setDevice] = useState('desktop');
    const { button, modal, title, closeIcon } = attributes;
    const { typo, colors, padding, radius, shadow, hShadow, borders } = button;
    const { width } = modal;

    return <>
        <PanelBody className='bPlPanelBody bpsmbPanelBody' title={__('Button', 'smart-modal')} initialOpen={true}>

            <Typography className='mt10' label={__('Typography', 'smart-modal')} value={typo} onChange={val => updateObject("button", "typo", val)} produce={produce} />

            <ColorsControl className='mb20' label={__('Colors', 'smart-modal')} value={colors} onChange={val => updateObject("button", "colors", val)} />

            <BorderBoxControl label={__('Borders', 'smart-modal')} onChange={val => updateObject("button", "borders", val)} value={borders} />

            <BoxControl label={__('Padding', 'smart-modal')} values={padding} onChange={val => updateObject("button", "padding", val)} resetValues={{ top: "16px", right: "16px", bottom: "16px", left: "16px" }} units={[pxUnit(3), emUnit(2)]} />

            <RangeControl label={__('Radius', 'smart-modal')} value={radius} onChange={(val) => updateObject("button", "radius", val)} min={1} />

            <ShadowControl className="mt20" label={__('Shadow:', 'smart-modal')} value={shadow} onChange={val => updateObject("button", "shadow", val)} produce={produce} />

            <ShadowControl className="mt20" label={__('Hover Shadow:', 'smart-modal')} value={hShadow} onChange={val => updateObject("button", "hShadow", val)} produce={produce} />

        </PanelBody>

        <PanelBody className='bPlPanelBody bpsmbPanelBody' title={__('Modal', 'smart-modal')} initialOpen={false}>

            {/* Height define option  */}
            <PanelRow className='mt0'>
                <Label mt='0'>{__('', 'slider')}</Label>
                <BDevice label={__('')} device={device} onChange={val => setDevice(val)} />
            </PanelRow>

            <UnitControl className='mb20' label={__('Width', 'smart-modal')} labelPosition='left' value={width[device]} onChange={val => { setAttributes({ modal: { ...modal, width: { ...width, [device]: val } } }) }} units={[pxUnit(500), perUnit(50)]} isResetValueOnUnitChange={true} beforeIcon='grid-view' />

            <BorderBoxControl label={__('Borders', 'smart-modal')} onChange={val => updateObject("modal", "borders", val)} value={modal?.borders} />

            <RangeControl label={__('Radius', 'smart-modal')} value={modal?.radius} onChange={(val) => updateObject("modal", "radius", val)} min={1} />

            <BoxControl label={__('Padding', 'smart-modal')} values={modal?.padding} onChange={val => updateObject("modal", "padding", val)} resetValues={{ top: "20px", right: "20px", bottom: "20px", left: "20px" }} units={[pxUnit(3), emUnit(2)]} />

            <ColorControl className="mt20" label={__('Out Side Color', 'smart-modal')} value={modal?.outSColor} onChange={val => updateObject("modal", "outSColor", val)} />

            <ColorControl className="mt20" label={__('In Side Color', 'smart-modal')} value={modal?.inSColor} onChange={val => updateObject("modal", "inSColor", val)} />

            <ColorControl className="mt20" label={__('Close Icon Color', 'smart-modal')} value={closeIcon?.color} onChange={val => updateObject("closeIcon", "color", val)} />

            <ColorControl className="mt20" label={__('Hover Close Icon Color', 'smart-modal')} value={closeIcon?.hColor} onChange={val => updateObject("closeIcon", "hColor", val)} />

        </PanelBody>

        <PanelBody className='bPlPanelBody bpsmbPanelBody' title={__('Title', 'smart-modal')} initialOpen={false}>
            <Typography className='mt10' label={__('Typography', 'smart-modal')} value={title?.typo} onChange={val => updateObject("title", "typo", val)} produce={produce} />

            <ColorControl className="mt20" label={__('Color', 'smart-modal')} value={title?.color} onChange={val => updateObject("title", "color", val)} />
        </PanelBody>
    </>
}
export default Style;