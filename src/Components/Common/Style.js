
import { getTypoCSS, getColorsCSS, getMultiShadowCSS, getBorderBoxCSS } from '../../../../bpl-tools/utils/getCSS'
import { getBoxValue } from '../../../../bpl-tools/utils/functions';

const Style = ({ attributes, EleId }) => {

	const { button, modal } = attributes;
	const { typo, colors, padding, radius, shadow, hShadow, borders } = button;
	const mainEle = `#${EleId}`;
	const { width } = modal;
	const { desktop, tablet, mobile } = width;


	return <style dangerouslySetInnerHTML={{
		__html: `

		${getTypoCSS('', typo)?.googleFontLink}
		${getTypoCSS(`${mainEle} .bpmb_modal_plugin .bpmb_button_area .btn`, typo)?.styles}


		${mainEle} .bpmb_modal_plugin .bpmb_button_area .btn {
			${getColorsCSS(colors)};
			padding:${getBoxValue(padding)};
			border-radius:${radius}px;
			box-shadow: ${getMultiShadowCSS(shadow)};
			${getBorderBoxCSS(borders)};
		}

		${mainEle} .bpmb_modal_plugin .bpmb_button_area .btn:hover {
			box-shadow: ${getMultiShadowCSS(hShadow)};
		}

		${mainEle} .bpmb_modal_plugin .modal_area {
			width: ${desktop};
			${getBorderBoxCSS(modal?.borders)};
			border-radius:${modal?.radius}px;

		}

		@media (max-width: 768px) {
			${mainEle} .bpmb_modal_plugin .modal_area {
				width: ${tablet};
			}
		}

		@media (max-width: 576px) { 
			${mainEle} .bpmb_modal_plugin .modal_area {
				width: ${mobile};
			}
		}
		 
	`}} />;
}
export default Style;