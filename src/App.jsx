import './App.css'

import { ErrorBlock } from './components/ErrorBlock'
import { ResultBlock } from './components/ResultBlock'
import { useState } from 'react'

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
	const [howToUse, setHowToUse] = useState(false)

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

	return (
		<div className='app'>
			<h1>Конвертер таймстемпів в хронометраж в секундах</h1>
			<p>
				Посилання на{' '}
				<a target='blanc' href='https://www.epochconverter.com/'>
					epochconverter
				</a>
			</p>

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
			<div onClick={() => setHowToUse(!howToUse)}>Як користуватися конвертером?</div>
			{howToUse && <div>
				<p>В поле "Введіть значення старту" вставляємо Timestamp in milliseconds з сайту epochconverter, з попередньо виставленим часом початку кетчапа.</p>
				<p>Аналогічно в поле "Введіть значення кінця" вставляємо Timestamp in milliseconds з попередньо виставленим часом кінця кетчапа.</p>
				<p>Важливо! Прослідкуйте, щоб був обраний "Local time".</p>
				<p>Далі натискаємо кнопку "Отримати результат" або Enter.</p>
				<p>Результат Length в секундах забираємо в поле Length в Blizzard.</p>
				<p>Результати "startTime" та "endTime" просто копіюємо в плеер у відповідні поля (до них вже додані 4-и нулі).</p>
				</div>}
		</div>
	)
}

export default App
