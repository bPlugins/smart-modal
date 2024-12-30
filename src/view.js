import { createRoot } from 'react-dom/client';
import './style.scss';

import Style from './Components/Common/Style';
import Button from './Components/Common/Button';

document.addEventListener('DOMContentLoaded', () => {
	const bpmbModalBlockEls = document.querySelectorAll('.wp-block-bpmb-modal-block-plugin');

	bpmbModalBlockEls.forEach(bpmbModalBlockEl => {
		const attributes = JSON.parse(bpmbModalBlockEl.dataset.attributes);

		createRoot(bpmbModalBlockEl).render(<>
			<Style attributes={attributes} EleId={bpmbModalBlockEl.id} />
			<Button attributes={attributes} />
		</>);

		bpmbModalBlockEl?.removeAttribute('data-attributes');
	});
});