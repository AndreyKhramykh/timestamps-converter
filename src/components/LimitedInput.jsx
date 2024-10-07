import { useState } from 'react'

export function LimitedInput({
	onEnterKeyDown,
	onValueChange,
	defaultValue,
	limit,
	specialKey,
}) {
	const [newValue, setNewValue] = useState(defaultValue)

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
	

	return (
		<input
			type='number'
			special-key={specialKey}
			value={newValue}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
		/>
	)
}
