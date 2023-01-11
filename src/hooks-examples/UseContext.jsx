import { useContext, createContext } from "react";

const ExampleContext = createContext(null);

export default function useContextExample() {
	return (
		<ExampleContext.Provider value="dark">
			<ChildComponent />
		</ExampleContext.Provider>
	);
}

function ChildComponent() {
	return (
		<div>
			<NestedChildComponent />
		</div>
	);
}

function NestedChildComponent() {
	const theValue = useContext(ExampleContext);
	console.log(theValue);
	return <div>The value was {theValue}</div>;
}
