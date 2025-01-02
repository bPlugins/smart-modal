import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

// Settings Components
import { tabController } from '../../../../../bpl-tools/utils/functions';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';

const Settings = ({ attributes, setAttributes }) => {

	// update object 
	const updateObject = (attr, key, val) => {
		const newAttr = { ...attributes[attr] };
		newAttr[key] = val;
		setAttributes({ [attr]: newAttr })
	}
	const generalProps = { attributes, setAttributes, updateObject };
	const styleProps = { attributes, updateObject, setAttributes };

	return <>
		<InspectorControls>

			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>{tab => <>
				{'general' === tab.name && <>
					<General {...generalProps} />
				</>}

				{'style' === tab.name && <>
					<Style {...styleProps} />
				</>}
			</>}</TabPanel>
		</InspectorControls>
	</>;
};
export default Settings;