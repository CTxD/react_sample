import { useState } from "react";
import "./App.css";
import { Instructions } from "./components/instructions/instructions";
import { Playground } from "./components/playground/playground";

function App() {
	const [localMousePos, setLocalMousePos] = useState<{
		x: number | undefined;
		y: number | undefined;
	}>({ x: undefined, y: undefined });

	const handleMouseMove = (event: any) => {
		const localX = event.clientX - event.target.offsetLeft;
		const localY = event.clientY - event.target.offsetTop;

		setLocalMousePos({ x: localX, y: localY });
	};

	return (
		<div className="App" onMouseMove={handleMouseMove}>
			<Instructions mouseX={localMousePos.x} mouseY={localMousePos.y} />
			<Playground mouseX={localMousePos.x} mouseY={localMousePos.y} />
		</div>
	);
}

export default App;
