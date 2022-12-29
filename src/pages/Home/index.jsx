import React, { useEffect, useState } from "react";
import EmptyView from "../../components/common/EmptyView";
import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import { dataList } from "../../constants";
import "./styles.css";

const Home = () => {
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [ selectedPrice]); //[selectedRating, selectedPrice]

  return (
    <div className="home">
      <div className="home_panelList-wrap">
        {/* Filter Panel */}
        <div className="home_panel-wrap">
          <FilterPanel
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
          />
        </div>
        {/* List & Empty View */}
        <div className="home_list-wrap">
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Home;