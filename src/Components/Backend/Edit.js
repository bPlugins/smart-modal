import { useState, useEffect } from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { tabController } from '../../../../bpl-tools/utils/functions';

import '../../editor.scss';
import Settings from './Settings/Settings';
import Style from '../Common/Style';

import Button from '../Common/Button';

const Edit = props => {
	const { attributes, setAttributes, clientId, isSelected } = props;

	useEffect(() => tabController(), [isSelected]);
	const [activeIndex, setActiveIndex] = useState(0);

	const id = `bpmb_modal_block-${clientId}`;
	return <>
		<Settings {...{ attributes, setAttributes, activeIndex, setActiveIndex }} />

		<div {...useBlockProps()} id={id}>
			{!isSelected && <div style={{ width: '100%', height: '100%', position: 'absolute' }}></div>}
			<Style attributes={attributes} EleId={id} />
			<Button attributes={attributes} />

		</div>
	</>;
}
export default Edit;