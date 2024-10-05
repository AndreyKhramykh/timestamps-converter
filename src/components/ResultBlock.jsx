export function ResultBlock({result, newStart, newEnd}) {
	return (
		<>
			<h3>Результат LENGTH в секундах: {result}</h3>
			<h3> Нове значення (startEnd): {newStart}</h3>
			<h3> Нове значення (endTime): {newEnd}</h3>
		</>
	)
}