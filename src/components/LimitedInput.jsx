import { useState } from 'react'

export function LimitedInput({onValueChange, defaultValue, limit, specialKey} ) {
	const [newValue, setNewValue] = useState(defaultValue)

	function handleChange(e) {
		let inputValue = e.target.value

		if (inputValue.length > limit) {
			inputValue = inputValue.slice(0, limit)
		}

		console.log(specialKey)
		setNewValue(inputValue)
		onValueChange(inputValue, specialKey)
	}

	return <input type='number' special-key={specialKey} value={newValue} onChange={handleChange} />
}
