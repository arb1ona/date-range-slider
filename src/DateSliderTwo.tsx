import React, { useState } from "react";
import { Slider, Tooltip } from "@material-ui/core";
import ValueLabelTwo from "./ValueLabelTwo";
import handleChange from "./constants/handleChange";

interface DateSliderTwoProps {
	minDate: string;
	maxDate: string;
	data: { date: string }[];
}

const DateSliderTwo: React.FC<DateSliderTwoProps> = ({
	minDate,
	maxDate,
	data,
}) => {
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

	// the values are in seconds since the Unix Epoch, which is a standard way of measuring time in computer systems.
	const minTimestamp = Date.parse(minDate) / 1000;
	const maxTimestamp = Date.parse(maxDate) / 1000;

	const value = selectedDateRange.map((date) => Date.parse(date) / 1000);

	return (
		<div>
			<Slider
				min={minTimestamp}
				max={maxTimestamp}
				value={value}
				onChange={handleChange({ setSelectedDateRange, selectedDateRange })}
			>
				<Tooltip
					title={
						<ValueLabelTwo
							value={value}
							minDate={minDate}
							maxDate={maxDate}
							min={minTimestamp}
							max={maxTimestamp}
						/>
					}
				>
					<div />
				</Tooltip>
			</Slider>
			<div>
				{filteredData.map((item) => (
					<div key={item.date}>{item.date}</div>
				))}
			</div>
		</div>
	);
};

export default DateSliderTwo;
