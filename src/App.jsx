import './App.css'

import {
	getDate,
	getHours,
	getMinutes,
	getMonth,
	getSeconds,
	getYear,
} from 'date-fns'

import { InputBlock } from './components/InputBlock'
import { ResultBlock } from './components/ResultBlock'
import { ToDateBlock } from './components/ToDateBlock'
import arrowsImage from './img/arrows.png'
import { useState } from 'react'

function App() {
	const [inputOneDate, setInputOneDate] = useState({
		currentDate: new Date(),
		year: getYear(new Date()),
		month: getMonth(new Date()) + 1,
		day: getDate(new Date()),
		hour: getHours(new Date()),
		minute: getMinutes(new Date()),
		second: getSeconds(new Date()),
	})
	const [inputTwoDate, setInputTwoDate] = useState({
		currentDate: new Date(),
		year: getYear(new Date()),
		month: getMonth(new Date()) + 1,
		day: getDate(new Date()),
		hour: getHours(new Date()),
		minute: getMinutes(new Date()),
		second: getSeconds(new Date()),
	})
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


	function switchInputValue() {
		setInputOneDate({ ...inputTwoDate })
		setInputTwoDate({ ...inputOneDate })
	}

	return (
		<div className='app'>
			<h1>Конвертер часу в таймстемпи і хронометраж в секундах</h1>
			<div className='grid-container'>
				<InputBlock
					titleName='Введіть час початку ассету:'
					onEnterKeyDown={getResult}
					onDateChange={handleInputOne}
					defaultValue={inputOneDate}
				/>
				<InputBlock
					titleName='Введіть час кінця ассету:'
					onEnterKeyDown={getResult}
					onDateChange={handleInputTwo}
					defaultValue={inputTwoDate}
				/>
				<button className='switch-button' onClick={switchInputValue}>
					Поміняти місцями{' '}
					<img className='img-arrows' src={arrowsImage} alt='arrows' />
				</button>
			</div>
			<button onClick={getResult}>Отримати результат</button>
			{!errorStatus.isError && <ResultBlock>{result}</ResultBlock>}
			{errorStatus.isError && (
				<div className='error-block'>{errorStatus.type}</div>
			)}
			<hr />
			<ToDateBlock>

			</ToDateBlock>
		</div>
	)
}

export default App
