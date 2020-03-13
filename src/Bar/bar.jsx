import React, { useEffect, useState, useRef } from 'react';

import useMousePositionBar from './../useMousePositionBar/useMousePositionBar';

import './bar.css';

function Bar({ barName, barAmount, colour }) {
	const barRef = useRef();
	const barInputRef = useRef();
	const barContainerRef = useRef();

	const mouseState = useMousePositionBar(barRef, barInputRef, barContainerRef);

	let adjustedWidth = barAmount / 10;
	const [ newWidth, setNewWidth ] = useState(adjustedWidth);
	const [ newBarAmount, setNewBarAmount ] = useState(barAmount);

	const newWidthCheck = () => {
		if (newWidth > 760) {
			return 760;
		}
		return newWidth;
	};

	const handleBarAmountChange = (event) => {
		let value = event.target.value;
		let newWidthAmount = value;
		setNewWidth(value);
		console.log('NEW WIDTH VALUE!!!!!!!!!!!!!!', event.target.value);
		setNewBarAmount(value);
	};

	const getNewWidth = () => {
		let _newWidth = mouseState.mouseIsDown - 300;
		if (_newWidth < 0) {
			_newWidth = 0;
		}
		setNewWidth(_newWidth);
		setNewBarAmount(_newWidth * 10);
	};

	useEffect(
		() => {
			if (mouseState.mouseIsDown) {
				getNewWidth();
			}
		},
		[ mouseState.mouseIsDown, newWidth, newBarAmount ]
	);

	return (
		<div className="barContainer" ref={barContainerRef}>
			<div className="barName">{barName}</div>
			<div className="bar" ref={barRef}>
				<svg
					width={newWidthCheck()}
					// x="0"
					// y="0"
					height="40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					colour={colour}
				>
					<rect width={newWidth} height="40" fill={colour} />
				</svg>
			</div>
			<div className="barAmountUnit">£</div>
			<input
				ref={barInputRef}
				className="barAmount"
				type="number"
				value={newBarAmount}
				onChange={(event) => handleBarAmountChange(event)}
			/>
		</div>
	);
}

export default Bar;
