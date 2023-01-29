interface HandleChangeProps {
	setSelectedDateRange: (value: [string, string]) => void;
	selectedDateRange: [string, string];
}
const handleChange =
	(props: HandleChangeProps) => (event: any, newValue: number | number[]) => {
		if (Array.isArray(newValue)) {
			const newDateRange = newValue.map((seconds) =>
				new Date(seconds * 1000).toISOString()
			);
			props.setSelectedDateRange([newDateRange[0], newDateRange[1]]);
		} else {
			const newDate = new Date(newValue * 1000).toISOString();
			const [startDate] = props.selectedDateRange;
			props.setSelectedDateRange([startDate, newDate]);
		}
	};
export default handleChange;
