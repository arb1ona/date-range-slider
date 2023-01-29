import DateSliderTwo from "./DateSliderTwo";

const data = [
	{ date: "2022-01-01" },
	{ date: "2022-01-02" },
	{ date: "2022-01-03" },
	{ date: "2022-01-04" },
	{ date: "2022-01-05" },
	{ date: "2022-01-06" },
	{ date: "2022-01-07" },
	{ date: "2022-01-08" },
	{ date: "2022-01-09" },
	{ date: "2022-01-10" },
	{ date: "2022-01-11" },
	{ date: "2022-01-12" },
	{ date: "2022-01-13" },
	{ date: "2022-01-14" },
	{ date: "2022-01-15" },
	{ date: "2022-01-16" },
	{ date: "2022-01-17" },
	{ date: "2022-01-18" },
	{ date: "2022-01-19" },
	{ date: "2022-01-20" },
	{ date: "2022-01-21" },
	{ date: "2022-01-22" },
	{ date: "2022-01-23" },
	{ date: "2022-01-24" },
	{ date: "2022-01-25" },
	{ date: "2022-01-26" },
	{ date: "2022-01-27" },
	{ date: "2022-01-28" },
	{ date: "2022-01-29" },
	{ date: "2022-01-30" },
	{ date: "2022-01-31" },
	{ date: "2022-02-01" },
	{ date: "2022-02-02" },
	{ date: "2022-02-03" },
	{ date: "2022-02-04" },
	{ date: "2022-02-05" },
	{ date: "2022-02-06" },
	{ date: "2022-02-07" },
	{ date: "2022-02-08" },
	{ date: "2022-02-09" },
	{ date: "2022-02-10" },
];


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
			<DateSliderTwo minDate="2000-01-01" maxDate="2022-05-10" data={data} />
		</div>
	);
}

export default App;
