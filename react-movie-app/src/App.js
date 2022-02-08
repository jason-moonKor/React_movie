// react-router-dom @5.3.0 으로 다운그레이드 설치해서 되는거임 Switch는 신버전엔 없음
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/movie/:id">
					<Detail />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
