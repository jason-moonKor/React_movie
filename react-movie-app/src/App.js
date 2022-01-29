// import Button from "./components/Button";
// import styles from "./App.module.css";
// import {useState, useEffect} from "react";
//useEffect = 한번만 실행됨(ex.API같이 한번만 읽어오면 될때 사용함)
// import Movie from "./components/Movie";

function App() {
	return null;
}

/*
function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((res) => res.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, []);
	return (
		<div>
			<h1>코인! {loading ? "" : `(${coins.length})`}</h1>
			{loading ? (
				<strong>Loading....</strong>
			) : (
				<select>
					{coins.map((coin) => (
						<option>
							{coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD
						</option>
					))}
				</select>
			)}
		</div>
	);
}
*/
// function App() {
// 	const [toDo, setTodo] = useState("");
// 	const [toDos, setToDos] = useState([]);
// 	const onChange = (e) => {
// 		setTodo(e.target.value);
// 	};
// 	const onSubmit = (e) => {
// 		e.preventDefault();
// 		if (toDo === "") {
// 			return;
// 		}
// 		setToDos((currentArray) => [toDo, ...currentArray]);
// 		setTodo("");
// 	};
// 	console.log(toDos);
// 	return (
// 		<div>
// 			<h1>TODO LIST ({toDos.length})</h1>
// 			<form onSubmit={onSubmit}>
// 				<input
// 					onChange={onChange}
// 					value={toDo}
// 					type="text"
// 					placeholder="write here ToDo List"
// 				/>
// 				<button> Add To do</button>
// 			</form>
// 			<hr />
// 			<ul>
// 				{toDos.map((item, idx) => (
// 					<li key={idx}>{item}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }
/*
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
*/
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
