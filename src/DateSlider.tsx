import React, { useState } from "react";
import { Slider, Tooltip } from "@material-ui/core";
import { format } from "date-fns";
import { ValueLabelProps } from "@material-ui/core/Slider";
import handleChange from "./constants/handleChange";

interface DateSliderProps {
	minDate: string;
	maxDate: string;
	data: { date: string }[];
}

const DateSlider: React.FC<DateSliderProps> = ({ minDate, maxDate, data }) => {
	const [selectedDateRange, setSelectedDateRange] = useState<[string, string]>([
		minDate,
		maxDate,
	]);

	const filterData = (
		data: { date: string }[],
		selectedDateRange: [string, string]
	) => {
		const [startDate, endDate] = selectedDateRange;
		return data.filter(
			(item) => item.date >= startDate && item.date <= endDate
		);
	};

	const filteredData = filterData(data, selectedDateRange);

	const minDateSeconds = Date.parse(minDate) / 1000;
	const maxDateSeconds = Date.parse(maxDate) / 1000;

	const value = selectedDateRange.map((date) => Date.parse(date) / 1000);

	const firstDate = format(new Date(selectedDateRange[0]), "yyyy MMM");
	const secondDate = format(new Date(selectedDateRange[1]), "yyyy MMM");

	const ValueLabelComponent = (props: ValueLabelProps) => {
		const { value, children } = props;

		let label: string;

		if (Array.isArray(value)) {
			// value is an array
			if (value[0] === minDateSeconds && value[1] === maxDateSeconds) {
				label = firstDate + " - " + secondDate;
			} else if (value[0] === minDateSeconds) {
				label =
					firstDate + " - " + format(new Date(value[1] * 1000), "yyyy MMM");
			} else if (value[1] === maxDateSeconds) {
				label =
					format(new Date(value[0] * 1000), "yyyy MMM") + " - " + secondDate;
			} else {
				label =
					format(new Date(value[0] * 1000), "yyyy MMM") +
					" - " +
					format(new Date(value[1] * 1000), "yyyy MMM");
			}
		} else {
			// value is a single number
			if (value === minDateSeconds) {
				label = firstDate;
			} else if (value === maxDateSeconds) {
				label = secondDate;
			} else {
				label = format(new Date(value * 1000), "yyyy MMM");
			}
		}

		return label ? (
			<Tooltip open={true} enterTouchDelay={0} placement="top" title={label}>
				{children}
			</Tooltip>
		) : (
			children
		);
	};

	return (
		<div>
			<label htmlFor="date-range">Date Range:</label>
			<div
				style={{
					justifyContent: "center",
					display: "flex",
				}}
			>
				<b>{firstDate}</b>
				<div style={{ width: "600px", margin: "0 30px" }}>
					<Slider
						min={minDateSeconds}
						max={maxDateSeconds}
						value={value}
						onChange={handleChange({ setSelectedDateRange, selectedDateRange })}
						valueLabelDisplay="on"
						ValueLabelComponent={(props) => <ValueLabelComponent {...props} />}
					/>
				</div>
				<b>{secondDate}</b>
			</div>
			<div style={{ columnCount: 3, padding: "40px" }}>
				{filteredData.map((item) => (
					<p key={item.date}>{item.date}</p>
				))}
			</div>
		</div>
	);
};

export default DateSlider;
