import { useEffect, useState } from 'react'

export function LimitedInput({
	onEnterKeyDown,
	onValueChange,
	defaultValue,
	limit,
	specialKey,
}) {
	const [newValue, setNewValue] = useState(defaultValue)

	useEffect(() => {
		setNewValue(defaultValue)
	}, [defaultValue])

	function handleChange(e) {
		let inputValue = e.target.value

		if (inputValue.length > limit) {
			inputValue = inputValue.slice(0, limit)
		}

		setNewValue(inputValue)
		onValueChange(inputValue, specialKey)
	}
	function handleKeyDown(e) {
		if (['e', '-', '+'].includes(e.key)) {
			e.preventDefault()
		}
		if (e.key === 'Enter') {
			onEnterKeyDown(e)
			e.preventDefault()
		}
	}

	function handleFocus(event) {
		event.target.select()
	}

	return (
		<div>
			<input
				className={specialKey === 'year' ? 'year-input' : 'regular-input'}
				type='number'
				special-key={specialKey}
				value={newValue}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				onDoubleClick={handleFocus}
			/>
			{specialKey === 'year' || specialKey === 'month' ? '-' : null}
			{specialKey === 'hour' || specialKey === 'minute' ? ':' : null}
		</div>
	)
}
