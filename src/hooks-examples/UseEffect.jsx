import { useEffect } from "react";

function UseEffectExample() {
	useEffect(() => {
		console.log("UseEffect triggered");
	}, []);

	return <div>Check Console</div>;
}

export default UseEffectExample;
