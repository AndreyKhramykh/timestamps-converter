import './App.css'

import { InputBlock } from './components/InputBlock'
import { useState } from 'react'

function App() {
	const [inputOneDate, setInputOneDate] = useState()
	const [inputTwoDate, setInputTwoDate] = useState()
	const [result, setResult] = useState('')
	console.log('updated')

	function getResult() {
		let inputOne =
			new Date(
				inputOneDate.year,
				inputOneDate.month - 1,
				inputOneDate.day,
				inputOneDate.hour,
				inputOneDate.minute,
				inputOneDate.second
			).getTime() * 10000

		let inputTwo =
			new Date(
				inputTwoDate.year,
				inputTwoDate.month - 1,
				inputTwoDate.day,
				inputTwoDate.hour,
				inputTwoDate.minute,
				inputTwoDate.second
			).getTime() * 10000
		setResult({
			startTimestamp: inputOne,
			endTimestamp: inputTwo,
			length: (inputTwo - inputOne) / 10000000,
		})
	}
	function handleInputOne(date) {
		setInputOneDate(date)
	}
	function handleInputTwo(date) {
		setInputTwoDate(date)
	}

	return (
		<div className='app'>
			<h1>Конвертер таймстемпів в хронометраж в секундах</h1>
			<InputBlock onEnterKeyDown={getResult} onDateChange={handleInputOne} />
			<InputBlock onEnterKeyDown={getResult} onDateChange={handleInputTwo} />
			<button onClick={getResult}>Get result</button>
			<div>{JSON.stringify(result)}</div>
		</div>
	)
}

export default App
