
import { getTypoCSS, getColorsCSS, getMultiShadowCSS, getBorderBoxCSS } from '../../../../bpl-tools/utils/getCSS'
import { getBoxValue } from '../../../../bpl-tools/utils/functions';

const Style = ({ attributes, EleId }) => {

	const { button, modal, title, closeIcon } = attributes;
	const { typo, colors, padding, radius, shadow, hShadow, borders, isFullWidth, align } = button;
	const mainEle = `#${EleId}`;
	const { width } = modal;
	const { desktop, tablet, mobile } = width;

	return <style dangerouslySetInnerHTML={{
		__html: `

		${getTypoCSS('', title?.typo)?.googleFontLink}
		${getTypoCSS('', typo)?.googleFontLink}

		${getTypoCSS(`${mainEle} .bpsmb_modal_plugin .modal_area .title`, title?.typo)?.styles}
		${getTypoCSS(`${mainEle} .bpsmb_modal_plugin .bpsmb_button_area .btn`, typo)?.styles}

		${mainEle} .bpsmb_modal_plugin .bpsmb_button_area {
			text-align:${align};
		}

		${mainEle} .bpsmb_modal_plugin .bpsmb_button_area .btn {
			${getColorsCSS(colors)};
			padding:${getBoxValue(padding)};
			border-radius:${radius}px;
			box-shadow: ${getMultiShadowCSS(shadow)};
			${getBorderBoxCSS(borders)};
			width:${isFullWidth ? '100%' : 'auto'};
		}

		${mainEle} .bpsmb_modal_plugin .bpsmb_button_area .btn:hover {
			box-shadow: ${getMultiShadowCSS(hShadow)};
		}

		${mainEle} .bpsmb_modal_plugin .bpsmb_modal_main_area {
			background:${modal?.outSColor};
		}

		${mainEle} .bpsmb_modal_plugin .modal_area {
			width: ${desktop};
			${getBorderBoxCSS(modal?.borders)};
			border-radius:${modal?.radius}px;
			padding:${getBoxValue(modal?.padding)};
			background:${modal?.inSColor};
		}

		${mainEle} .bpsmb_modal_plugin .modal_area svg {
			fill:${closeIcon?.color};
		}

		${mainEle} .bpsmb_modal_plugin .modal_area svg:hover {
			fill:${closeIcon?.hColor};
		}

		${mainEle} .bpsmb_modal_plugin .modal_area .title {
			color:${title?.color};
		}

		@media (max-width: 768px) {
			${mainEle} .bpsmb_modal_plugin .modal_area {
				width: ${tablet};
			}
		}

		@media (max-width: 576px) { 
			${mainEle} .bpsmb_modal_plugin .modal_area {
				width: ${mobile};
			}
		}
		 
	`}} />;
}
export default Style;