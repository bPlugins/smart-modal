import { createRoot } from 'react-dom/client';
import './style.scss';

import Style from './Components/Common/Style';
import Button from './Components/Common/Button';

document.addEventListener('DOMContentLoaded', () => {
	const bpsmbModalBlockEls = document.querySelectorAll('.wp-block-bpsmb-smart-modal-block');

	bpsmbModalBlockEls.forEach(bpsmbModalBlockEl => {
		const attributes = JSON.parse(bpsmbModalBlockEl.dataset.attributes);

		createRoot(bpsmbModalBlockEl).render(<>
			<Style attributes={attributes} EleId={bpsmbModalBlockEl.id} />
			<Button attributes={attributes} />
		</>);

		bpsmbModalBlockEl?.removeAttribute('data-attributes');
	});
});