export function ResultBlock(children) {
	return (
		<>
			{children.children.startTimestamp && (
				<div className='result-block'>
					<div>Start Time: <strong>{children.children.startTimestamp}</strong></div>
					<div>End Time: <strong>{children.children.endTimestamp}</strong></div>
					<div>Length: <strong>{children.children.length}</strong></div>
				</div>
			)}
		</>
	)
}
