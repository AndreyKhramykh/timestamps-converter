import { useEffect, useState } from 'react'

import { LimitedInput } from './LimitedInput'

export function InputBlock({
	onEnterKeyDown,
	onDateChange,
	titleName,
	defaultValue,
}) {
	const [date, setDate] = useState({
		...defaultValue,
	})

	function handleValueChange(data, key) {
		date[key] = data
		setDate({ ...date })
		onDateChange(date, key)
	}

	useEffect(() => {
		setDate({ ...defaultValue })
	}, [defaultValue])

	return (
		<div className='input-container'>
			<div>{titleName}</div>
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
		</div>
	)
}
