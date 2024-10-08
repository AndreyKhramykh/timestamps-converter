import './App.css'

import { InputBlock } from './components/InputBlock'
import { ResultBlock } from './components/ResultBlock'
import { useState } from 'react'

function App() {
	const [inputOneDate, setInputOneDate] = useState()
	const [inputTwoDate, setInputTwoDate] = useState()
	const [result, setResult] = useState('')
	const [errorStatus, setErrorStatus] = useState({
		isError: false,
		type: '',
	})

	function inputChecker(startInput, endInput) {
		;[startInput, endInput].forEach((elem) => {
			if (elem?.month > 12) {
				setErrorStatus({
					isError: true,
					type: 'Wrong month value',
				})
				return 
			}
			if (elem?.day > 31) {
				setErrorStatus({
					isError: true,
					type: 'Wrong day value',
				})
				return
			}
			if (elem?.hour > 23) {
				setErrorStatus({
					isError: true,
					type: 'Wrong hour value',
				})
				return
			}
			if (elem?.minute > 59) {
				setErrorStatus({
					isError: true,
					type: 'Wrong minute value',
				})
				return
			}
			if (elem?.second > 59) {
				setErrorStatus({
					isError: true,
					type: 'Wrong second value',
				})
				return
			}
		})
	}

	console.log('update 2')
	function getResult() {
		setErrorStatus({
			isError: false,
			type: '',
		})
		inputChecker(inputOneDate, inputTwoDate)

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

		if ((inputTwo - inputOne) / 10000000 < 0) {
			setErrorStatus({
				isError: true,
				type: 'Wrong length value',
			})
		}

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
			{!errorStatus.isError && <ResultBlock>{result}</ResultBlock>}
			{errorStatus.isError && <div className='error-block'>{errorStatus.type}</div>}
		</div>
	)
}

export default App
