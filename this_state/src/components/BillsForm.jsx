import React from 'react';


const BillsForm = (props) => {
  return(
    <form>
      <input
      onChange={props.handleChange}
      type="text"
      name="keyword"
      placeholder="Enter Keyword"
      value={props.keyword}
      />
      <input
      onClick={props.handleSubmit}
      type="submit"
      value="submit"
      />
    </form>
  );
}

export default BillsForm;
