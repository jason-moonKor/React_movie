import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
//useEffect = 한번만 실행됨(ex.API같이 한번만 읽어오면 될때 사용함)

function Hello() {
	useEffect(() => {
		//useEffect 함수 안에 return값은 해당함수가 없어질때 나타남
		console.log("헬로안에있다");
		return () => console.log("헬로 없어졌다");
	}, []);
	return <h1>Hellow</h1>;
}

function App() {
	const [show, setShow] = useState(false);
	const onClick = () => setShow((prev) => !prev);
	return (
		<div>
			{show ? <Hello /> : null}
			<button onClick={onClick}>{show ? "Hide" : "Show"}</button>
		</div>
	);
}

/*
function App() {
	const [count, setValue] = useState(0);
	const [keywords, setKeywords] = useState("");
	const onClick = () => setValue((a) => a + 1);
	const onChange = (e) => setKeywords(e.target.value);
	useEffect(() => {
		console.log("이것은 한번만 실행됨");
	}, []);
	useEffect(() => {
		console.log("'keywords'가 변경될때마다 실행");
	}, [keywords]); //useEffect 뒤에 배열값을 체크해서 실행하게함
	useEffect(() => {
		console.log("'count'가 변경될때마다 실행");
	}, [count]);
	useEffect(() => {
		console.log("'count | keywords'가 변경될때마다 실행");
	}, [count, keywords]);
	return (
		<div>
			<h1 className={styles.title}>WELCOME TO WORLD</h1>
			<input
				value={keywords}
				onChange={onChange}
				type="text"
				placeholder="SEARCH SOMETHING"
			/>
			<h1>{count}</h1>
			<Button text={"버튼입니다"} />
			<button onClick={onClick}>클릭하십시오</button>
		</div>
	);
}
*/
export default App;
