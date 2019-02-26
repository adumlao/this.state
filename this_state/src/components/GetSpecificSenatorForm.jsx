import React from 'react';


const GetSpecificSenatorForm = (props) => {
  return(
    <div>
      <h2>Filter By ID</h2>
      <form>
        <input
          onChange={props.handleChange}
          type="text"
          name="location"
          placeholder="Enter ID (Ex: G000555)"
          value={props.location}
        />
        <input
          onClick={props.submitSpecificSenator}
          type="submit"
          value="submit"
        />
      </form>
    </div>
  )
}

export default GetSpecificSenatorForm;
