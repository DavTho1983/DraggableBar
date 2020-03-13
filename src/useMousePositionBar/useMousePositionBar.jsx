import { useEffect, useState } from 'react';
const useMousePosition = (barRef, barInputRef, barContainerRef) => {
	const [ mouseIsDown, setMouseIsDown ] = useState(null);

	useEffect(() => {
		const setMouseDownEvent = (e) => {
			if (e.which == 1) {
				if (barContainerRef.current.contains(e.target) && !barInputRef.current.contains(e.target)) {
					setMouseIsDown(e.clientX);
				} else if (!barInputRef.current.contains(e.target)) {
					setMouseIsDown(null);
				}
			}
		};

		window.addEventListener('mousemove', setMouseDownEvent);
		return () => {
			window.removeEventListener('mousemove', setMouseDownEvent);
		};
	}, []);
	return { mouseIsDown };
};

export default useMousePosition;
