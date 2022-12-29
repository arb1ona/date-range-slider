import React from "react";
import SliderProton from "../../common/SliderProton";
import "./styles.css";

const FilterPanel = ({
	selectedPrice,

	changePrice,
}) => (
	<div className="input-group">
		<p className="label-range">Price Range</p>
		<SliderProton value={selectedPrice} changePrice={changePrice} />
	</div>
);

export default FilterPanel;
