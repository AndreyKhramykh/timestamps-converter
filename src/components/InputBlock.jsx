import { useEffect, useState } from 'react'

import { LimitedInput } from './LimitedInput'

export function InputBlock({ onEnterKeyDown, onDateChange }) {
	const [date, setDate] = useState({
		currentDate: new Date(),
		year: new Date().toLocaleString().split(',')[0].split('.')[2].trim(),
		month: new Date().toLocaleString().split(',')[0].split('.')[1].trim(),
		day: new Date().toLocaleString().split(',')[0].split('.')[0].trim(),
		hour: new Date().toLocaleString().split(',')[1].split(':')[0].trim(),
		minute: new Date().toLocaleString().split(',')[1].split(':')[1].trim(),
		second: new Date().toLocaleString().split(',')[1].split(':')[2].trim(),
	})

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
		<div>
			<form action=''>
				<label htmlFor=''>year</label>
				<LimitedInput
					onValueChange={handleValueChange}
					defaultValue={date.year}
					limit={4}
					specialKey='year'
					onEnterKeyDown={onEnterKeyDown}
				/>
			</form>
			<form action=''>
				<label htmlFor=''>month</label>
				<LimitedInput
					onValueChange={handleValueChange}
					defaultValue={date.month}
					limit={2}
					specialKey='month'
					onEnterKeyDown={onEnterKeyDown}
				/>
			</form>
			<form action=''>
				<label htmlFor=''>day</label>
				<LimitedInput
					onValueChange={handleValueChange}
					defaultValue={date.day}
					limit={2}
					specialKey='day'
					onEnterKeyDown={onEnterKeyDown}
				/>
			</form>
			<form action=''>
				<label htmlFor=''>hour</label>
				<LimitedInput
					onValueChange={handleValueChange}
					defaultValue={date.hour}
					limit={2}
					specialKey='hour'
					onEnterKeyDown={onEnterKeyDown}
				/>
			</form>
			<form action=''>
				<label htmlFor=''>minute</label>
				<LimitedInput
					onValueChange={handleValueChange}
					defaultValue={date.minute}
					limit={2}
					specialKey='minute'
					onEnterKeyDown={onEnterKeyDown}
				/>
			</form>
			<form action=''>
				<label htmlFor=''>second</label>
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
