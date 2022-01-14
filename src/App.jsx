function App() {
	const title = "Blog Post";
	const body = "This is my blog post";
	var comments = [
		{ id: 1, text: "Comment 1" },
		{ id: 2, text: "Comment 2" },
		{ id: 3, text: "Comment 3" },
	];
	return (
		<div className="container">
			<h1>{title.toUpperCase()}</h1>
			<h2>{body}</h2>
			<h2>{Math.random() * 5}</h2>

			<div className="comments">
				<h3>Comments ({comments.length})</h3>
				<ul>
					{comments.map((comment, index) => (
						<li key={index}>{comment.text}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
