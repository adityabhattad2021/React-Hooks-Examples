import { useState } from "react";

function UseStateExample() {
	const [example1, setExample1] = useState(true);
	// Use state with objects
	const [example2, setExample2] = useState({
		firstName: "Aakash",
		lastName: "Shukla",
	});

	const [example3, setExample3] = useState("");

	function handleClick() {
		setExample1(!example1);
	}

	function handleUpdateObject() {
		setExample2({ ...example2, firstName: "Ashutosh" });
	}

	return (
		<div className="App">
			<h1>Hello {example1 ? "Aakash" : "Shukla"}</h1>
			<h1>
				Hey {example2.firstName} {example2.lastName}
			</h1>
			<h1>Whatsup {example3}!</h1>
			<input
				type="text"
				value={example3}
				onChange={(e) => setExample3(e.target.value)}
				placeholder="Your Name"
			/>
			<button onClick={handleClick}>Click Here 1</button>
			<button onClick={handleUpdateObject}>Click Here 2</button>
		</div>
	);
}

export default UseStateExample;
