import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import { PanelBody, __experimentalBoxControl as BoxControl, RangeControl, __experimentalUnitControl as UnitControl, PanelRow, __experimentalBorderBoxControl as BorderBoxControl } from '@wordpress/components';
import { Typography, ColorsControl, ShadowControl, Label } from '../../../../../../bpl-tools/Components';
import { BDevice } from '../../../../../../bpl-tools/Components/Deprecated';
import { pxUnit, emUnit, perUnit } from '../../../../../../bpl-tools/utils/options';
const colorsb = [
    { name: 'Blue 20', color: '#72aee6' },
    // ...
];
const Style = ({ attributes, updateObject, setAttributes }) => {

    const [device, setDevice] = useState('desktop');
    const { button, modal } = attributes;
    const { typo, colors, padding, radius, shadow, hShadow, borders } = button;
    const { width } = modal;

    return <>
        <PanelBody className='bPlPanelBody bpmbPanelBody' title={__('Button', 'modal-block-plugin')} initialOpen={true}>

            <Typography className='mt10' label={__('Typography', 'modal-block-plugin')} value={typo} onChange={val => updateObject("button", "typo", val)} produce={produce} />

            <ColorsControl className='mb20' label={__('Colors', 'modal-block-plugin')} value={colors} onChange={val => updateObject("button", "colors", val)} />

            <BorderBoxControl label={__('Borders', 'modal-block-plugin')} onChange={val => updateObject("button", "borders", val)} value={borders} />

            <BoxControl label={__('Padding', 'modal-block-plugin')} values={padding} onChange={val => updateObject("button", "padding", val)} resetValues={{ top: "16px", right: "16px", bottom: "16px", left: "16px" }} units={[pxUnit(3), emUnit(2)]} />

            <RangeControl label={__('Radius', 'modal-block-plugin')} value={radius} onChange={(val) => updateObject("button", "radius", val)} min={1} />

            <ShadowControl className="mt20" label={__('Shadow:', 'modal-block-plugin')} value={shadow} onChange={val => updateObject("button", "shadow", val)} produce={produce} />

            <ShadowControl className="mt20" label={__('Hover Shadow:', 'modal-block-plugin')} value={hShadow} onChange={val => updateObject("button", "hShadow", val)} produce={produce} />

        </PanelBody>

        <PanelBody className='bPlPanelBody bpmbPanelBody' title={__('Modal', 'modal-block-plugin')} initialOpen={false}>

            {/* Height define option  */}
            <PanelRow className='mt0'>
                <Label mt='0'>{__('', 'slider')}</Label>
                <BDevice label={__('')} device={device} onChange={val => setDevice(val)} />
            </PanelRow>

            <UnitControl className='mb20' label={__('Width', 'modal-block-plugin')} labelPosition='left' value={width[device]} onChange={val => { setAttributes({ modal: { ...modal, width: { ...width, [device]: val } } }) }} units={[pxUnit(500), perUnit(50)]} isResetValueOnUnitChange={true} beforeIcon='grid-view' />

            <BorderBoxControl label={__('Borders', 'modal-block-plugin')} onChange={val => updateObject("modal", "borders", val)} value={modal?.borders} />

            <RangeControl label={__('Radius', 'modal-block-plugin')} value={modal?.radius} onChange={(val) => updateObject("modal", "radius", val)} min={1} />
        </PanelBody>
    </>
}
export default Style;