import React from 'react';


const FilterSenatorByStateForm = (props) => {
  return(
    <div>
      <h2>Filter By State</h2>
      <form>
        <input
          onChange={props.handleChange}
          type="text"
          name="location"
          placeholder="State"
          value={props.location}
        />
        <input
          onClick={props.submitState}
          type="submit"
          value="submit"
        />
      </form>
    </div>
  )


}

export default FilterSenatorByStateForm;
