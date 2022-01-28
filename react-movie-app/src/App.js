import Button from "./Button";
import styles from "./App.module.css";
import {useState} from "react";

function App() {
	const [count, setValue] = useState(0);
	const onClick = () => setValue((a) => a + 1);
	return (
		<div>
			<h1 className={styles.title}>WELCOME TO WORLD</h1>
			<h1>{count}</h1>
			<Button text={"버튼입니다"} />
			<button onClick={onClick}>클릭하십시오</button>
		</div>
	);
}

export default App;
