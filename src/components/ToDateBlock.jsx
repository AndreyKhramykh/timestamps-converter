import { useState } from 'react'

export function ToDateBlock() {
	const [inputValue, setInputValue] = useState('')
	const [resultDate, setResultDate] = useState('')
	function handleInputChange(e) {
		let inputValue = e.target.value
		setInputValue(inputValue)
	}
	function handleKeyDown(e) {
		if (['e', '-', '+'].includes(e.key)) {
			e.preventDefault()
		}
		if (e.key === 'Enter') {
			getDate()
			e.preventDefault()
		}
	}
	let options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		timeZoneName: 'short',
	}
	function getDate() {
		let result = 0
		if (inputValue.length <= 10) {
			result = new Date(Number(inputValue) * 1000)
		} else if (inputValue.length > 10 && inputValue.length <= 13) {
			result = new Date(Number(inputValue))
		} else if (inputValue.length > 13) {
			result = 'Invalid Date'
		}
		setResultDate(result.toLocaleString('uk-UA', options))
	}

	return (
		<div className='input-container'>
			<h1>Конвертер значення таймстемп в дату</h1>
			<div>
				Введіть значення таймстемп в секундах (число з 13 знаків або меньше):
			</div>
			<input
				className='timestamp-input'
				type='number'
				value={inputValue}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
			/>
			<button onClick={getDate}>Отримати дату</button>
			{resultDate.toString() === 'Invalid Date' && (
				<div className='error-block'>
					Помилка! Значення таймстемп в секундах має складатися з 13 або меньше
					символів.
				</div>
			)}
			{resultDate.toString() !== 'Invalid Date' && <div>{resultDate}</div>}
		</div>
	)
}
