import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if ( !input.value.trim() ) {
            return;
          }
          dispatch(addTodo( input.value ));
          input.value = "";
        }}
      >
        <input ref={node => ( input = node )} placeholder="To Do" />
        <button className={"btn"} type="submit">Add To Do</button>
      </form>
    </div>
  );
};

export default connect()( AddTodo );
