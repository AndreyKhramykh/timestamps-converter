export function ResultBlock(children) {
	return (
		<>
			{children.children.startTimestamp && (
				<div>
					<div>Start Time: {children.children.startTimestamp}</div>
					<div>End Time: {children.children.endTimestamp}</div>
					<div>Length: {children.children.length}</div>
				</div>
			)}
		</>
	)
}
