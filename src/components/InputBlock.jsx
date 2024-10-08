import {
	getDate,
	getHours,
	getMinutes,
	getMonth,
	getSeconds,
	getYear,
} from 'date-fns'
import { useEffect, useState } from 'react'

import { LimitedInput } from './LimitedInput'

export function InputBlock({ onEnterKeyDown, onDateChange }) {
	const [date, setDate] = useState({
		currentDate: new Date(),
		year: getYear(new Date()),
		month: getMonth(new Date()) + 1,
		day: getDate(new Date()),
		hour: getHours(new Date()),
		minute: getMinutes(new Date()),
		second: getSeconds(new Date()),
	})

	console.log(date)
	function handleValueChange(data, key) {
		date[key] = data
		setDate({ ...date })
		onDateChange(date, key)
	}

	useEffect(() => {
		onDateChange(date)
		// eslint-disable-next-line
	}, [])

	return (
		<div className='input-block'>
			<form action=''>
				<label htmlFor=''>Yr</label>
				<LimitedInput
					onValueChange={handleValueChange}
					defaultValue={date.year}
					limit={4}
					specialKey='year'
					onEnterKeyDown={onEnterKeyDown}
				/>
			</form>
			<form action=''>
				<label htmlFor=''>Mon</label>
				<LimitedInput
					onValueChange={handleValueChange}
					defaultValue={date.month}
					limit={2}
					specialKey='month'
					onEnterKeyDown={onEnterKeyDown}
				/>
			</form>
			<form action=''>
				<label htmlFor=''>Day</label>
				<LimitedInput
					onValueChange={handleValueChange}
					defaultValue={date.day}
					limit={2}
					specialKey='day'
					onEnterKeyDown={onEnterKeyDown}
				/>
			</form>
			<form style={{ marginLeft: '20px' }} action=''>
				<label htmlFor=''>Hr</label>
				<LimitedInput
					onValueChange={handleValueChange}
					defaultValue={date.hour}
					limit={2}
					specialKey='hour'
					onEnterKeyDown={onEnterKeyDown}
				/>
			</form>
			<form action=''>
				<label htmlFor=''>Min</label>
				<LimitedInput
					onValueChange={handleValueChange}
					defaultValue={date.minute}
					limit={2}
					specialKey='minute'
					onEnterKeyDown={onEnterKeyDown}
				/>
			</form>
			<form action=''>
				<label htmlFor=''>Sec</label>
				<LimitedInput
					onValueChange={handleValueChange}
					defaultValue={date.second}
					limit={2}
					specialKey='second'
					onEnterKeyDown={onEnterKeyDown}
				/>
			</form>
		</div>
	)
}
