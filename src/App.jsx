import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing-Page/Landing";
import Animation from "./Utils/Amination";

function App() {
	return (
		<>
			<BrowserRouter>
				<Animation>
					{/* <Router> */}
					<Routes>
						<Route path="/" element={<Landing />} />
					</Routes>
					{/* </Router> */}
				</Animation>
			</BrowserRouter>
		</>
	);
}

export default App;
