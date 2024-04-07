import DateSlider from "./DateSlider";
import { data } from "./constants/data";

function App() {
	return (
		<div className="App">
			<DateSlider minDate="2010-01-01" maxDate="2022-05-10" data={data} />
		</div>
	);
}

export default App;
