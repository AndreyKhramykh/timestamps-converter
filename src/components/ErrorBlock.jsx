export function ErrorBlock({error}) {
	return (
		<>
			{console.log(error)}
			<p>{error.type}</p>
		</>
	)
}