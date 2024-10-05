import './App.css'

import { useEffect, useState } from 'react'

import { ErrorBlock } from './components/ErrorBlock'
import { LimitedInput } from './components/LimitedInput'
import { ResultBlock } from './components/ResultBlock'

function App() {
	const [startValue, setStartValue] = useState('')
	const [endValue, setEndValue] = useState('')
	const [result, setResult] = useState()
	const [newStart, setNewStart] = useState()
	const [newEnd, setNewEnd] = useState()
	const [error, setError] = useState({
		status: false,
		type: '',
	})

	function handleStartChange(event) {
		setStartValue(event.target.value)
	}
	function handleEndChange(event) {
		setEndValue(event.target.value)
	}
	function getResult() {
		if (startValue === '' || endValue === '' || endValue - startValue < 0) {
			checkingErrorType()
		} else {
			setError(() => ({
				type: '',
				status: false,
			}))
			setNewStart(startValue * 10000)
			setNewEnd(endValue * 10000)
			setResult(`${(endValue - startValue) / 1000}`)
		}
	}
	function handleKeyDown(e) {
		if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '+') {
			e.preventDefault()
		}
		if (e.key === 'Enter') {
			e.preventDefault()
			getResult()
		}
	}
	function checkingErrorType() {
		if (startValue === '' || endValue === '') {
			setError(() => ({
				status: true,
				type: 'Помилка. Одне або всі поля вводу порожні.',
			}))
		} else if (endValue - startValue < 0) {
			setError(() => ({
				status: true,
				type: `Помилка. Результат не може бути від'ємним. Перевірте правильність таймстемпів.`,
			}))
		}
	}

	const [result1, setResult1] = useState('')
	const [date, setDate] = useState({
		currentDate: new Date(),
		year: new Date().toLocaleString().split(',')[0].split('.')[2].trim(),
		month: new Date().toLocaleString().split(',')[0].split('.')[1].trim(),
		day: new Date().toLocaleString().split(',')[0].split('.')[0].trim(),
		hour: new Date().toLocaleString().split(',')[1].split(':')[0].trim(),
		minute: new Date().toLocaleString().split(',')[1].split(':')[1].trim(),
		second: new Date().toLocaleString().split(',')[1].split(':')[2].trim(),
	})
	function getResult1() {
		setResult1(
			new Date(
				date.year,
				date.month - 1,
				date.day,
				date.hour,
				date.minute,
				date.second
			).getTime() * 10000
		)
		// let res = date
		// setDate({
		// 	currentDate: new Date(),
		// 	year: new Date().toLocaleString().split(',')[0].split('.')[2].trim(),
		// 	month: new Date().toLocaleString().split(',')[0].split('.')[1].trim(),
		// 	day: new Date().toLocaleString().split(',')[0].split('.')[0].trim(),
		// 	hour: new Date().toLocaleString().split(',')[1].split(':')[0].trim(),
		// 	minute: new Date().toLocaleString().split(',')[1].split(':')[1].trim(),
		// 	second: new Date().toLocaleString().split(',')[1].split(':')[2].trim(),
		// })
		// setResult1(res.second)
	}

	function handleValueChange(data, key) {
		date[key] = data
		setDate({ ...date })
	}

	useEffect(() => {
		console.log('ready')
		// setResult1('pizda')
	}, [])
	// console.log(typeof handleValueChange)

	return (
		<div className='app'>
			<h1>Конвертер таймстемпів в хронометраж в секундах</h1>
			<p>
				Посилання на{' '}
				<a target='blanc' href='https://www.epochconverter.com/'>
					epochconverter
				</a>
			</p>
			<div>
				{JSON.stringify(Math.floor(date.currentDate.getTime() / 1000) * 1000)}
			</div>
			<div>
				<form action=''>
					<label htmlFor=''>year</label>
					<LimitedInput
						onValueChange={handleValueChange}
						defaultValue={date.year}
						limit={4}
						specialKey='year'
					/>
				</form>
				<form action=''>
					<label htmlFor=''>month</label>
					<LimitedInput
						onValueChange={handleValueChange}
						defaultValue={date.month}
						limit={2}
						specialKey='month'
					/>
				</form>
				<form action=''>
					<label htmlFor=''>day</label>
					<LimitedInput
						onValueChange={handleValueChange}
						defaultValue={date.day}
						limit={2}
						specialKey='day'
					/>
				</form>
				<form action=''>
					<label htmlFor=''>hour</label>
					<LimitedInput
						onValueChange={handleValueChange}
						defaultValue={date.hour}
						limit={2}
						specialKey='hour'
					/>
				</form>
				<form action=''>
					<label htmlFor=''>minute</label>
					<LimitedInput
						onValueChange={handleValueChange}
						defaultValue={date.minute}
						limit={2}
						specialKey='minute'
					/>
				</form>
				<form action=''>
					<label htmlFor=''>second</label>
					<LimitedInput
						onValueChange={handleValueChange}
						defaultValue={date.second}
						limit={2}
						specialKey='second'
					/>
				</form>
			</div>
			<button onClick={getResult1}>Get result</button>
			<div>{JSON.stringify(result1)}</div>
			<div className='border'></div>
			<form>
				<label htmlFor=''>Введіть значення старту</label>
				<input
					value={startValue}
					type='number'
					onChange={handleStartChange}
					onKeyDown={handleKeyDown}
				/>
			</form>
			<form>
				<label htmlFor=''>Введіть значення кінця</label>
				<input
					value={endValue}
					type='number'
					onChange={handleEndChange}
					onKeyDown={handleKeyDown}
				/>
			</form>
			<button onClick={getResult}>Отримати результат</button>
			<div>
				{error.status && <ErrorBlock error={error} />}
				{!error.status && (
					<ResultBlock result={result} newStart={newStart} newEnd={newEnd} />
				)}
			</div>
		</div>
	)
}

export default App
