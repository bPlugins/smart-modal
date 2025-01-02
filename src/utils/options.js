import { __ } from '@wordpress/i18n';

import { verticalLineIcon, horizontalLineIcon } from './icons';

export const btnAlignOpt = [
	{ label: __('Left', 'smart-modal'), value: 'left' },
	{ label: __('Center', 'smart-modal'), value: 'center' },
	{ label: __('Right', 'smart-modal'), value: 'right' }
];

export const layouts = [
	{ label: __('Vertical', 'textdomain'), value: 'vertical', icon: verticalLineIcon },
	{ label: __('Horizontal', 'textdomain'), value: 'horizontal', icon: horizontalLineIcon }
];

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'textdomain') },
	{ name: 'style', title: __('Style', 'textdomain') }
];