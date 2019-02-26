import React from 'react';


const FilterHouseByStateForm = (props) => {
  return(
    <div>
      <div className="search-headers">Step 1: Filter By State</div>
      <form>
        <input
          onChange={props.handleChange}
          type="text"
          name="location"
          placeholder="Enter State (Ex: NY)"
          value={props.location}
        />
        <input
          onClick={props.submitHouse}
          type="submit"
          value="submit"
        />
      </form>
    </div>
  )
}

export default FilterHouseByStateForm;
