import { useEffect, useState } from 'react'

import { LimitedInput } from './LimitedInput'

export function InputBlock({ onEnterKeyDown, onDateChange }) {
	const [date, setDate] = useState({
		currentDate: new Date(),
		year: new Date().toLocaleDateString().split('.')[2],
		month: new Date().toLocaleDateString().split('.')[1],
		day: new Date().toLocaleDateString().split('.')[0],
		hour: new Date().toLocaleTimeString().split(':')[0],
		minute: new Date().toLocaleTimeString().split(':')[1],
		second: new Date().toLocaleTimeString().split(':')[2],
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
