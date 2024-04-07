import DateSlider from "./DateSlider";
import { data } from "./data";

// const newData = data.map((obj) => {
// 		return {
// 			...obj,
// 			date: (obj.date).substring(0,10),
// 		}

// })

// console.log(newData)

function App() {
	return (
		<div className="App">
			<DateSlider minDate="2010-01-01" maxDate="2022-05-10" data={data} />
		</div>
	);
}

export default App;
