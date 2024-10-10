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
					type: 'Помилка! Невірно введений місяць.',
				})
				return
			}
			if (elem?.day > 31) {
				setErrorStatus({
					isError: true,
					type: 'Помилка! Невірно введений день.',
				})
				return
			}
			if (elem?.hour > 23) {
				setErrorStatus({
					isError: true,
					type: 'Помилка! Невірно введена година.',
				})
				return
			}
			if (elem?.minute > 59) {
				setErrorStatus({
					isError: true,
					type: 'Помилка! Невірно введена хвилина.',
				})
				return
			}
			if (elem?.second > 59) {
				setErrorStatus({
					isError: true,
					type: 'Помилка! Невірно введена секунда.',
				})
				return
			}
		})
	}

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
				type: `Помилка! Різниця таймстемпів не може мати від'ємне значення. Перевірте поля для вводу.`,
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
			<h1>Конвертер часу в таймстемпи і хронометраж в секундах</h1>
			<InputBlock
				titleName='Введіть час початку ассету:'
				onEnterKeyDown={getResult}
				onDateChange={handleInputOne}
			/>
			<InputBlock
				titleName='Введіть час кінця ассету:'
				onEnterKeyDown={getResult}
				onDateChange={handleInputTwo}
			/>
			<button onClick={getResult}>Отримати результат</button>
			{!errorStatus.isError && <ResultBlock>{result}</ResultBlock>}
			{errorStatus.isError && (
				<div className='error-block'>{errorStatus.type}</div>
			)}
		</div>
	)
}

export default App
