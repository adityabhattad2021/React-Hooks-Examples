import { useContext, createContext } from "react";

const ExampleContext = createContext(null);

function useContextExample() {
	return (
		<ExampleContext.Provider value="dark">
			<ChildComponent />
		</ExampleContext.Provider>
	);
}

function ChildComponent() {
	return (
		<div className="App">
			<NestedChildComponent />
		</div>
	);
}

function NestedChildComponent() {
	const theValue = useContext(ExampleContext);
	console.log(theValue);
	return <div>The value was {theValue}</div>;
}


export default useContextExample;