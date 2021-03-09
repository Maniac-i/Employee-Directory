import React from "react";

function Table(props) {
  return(
    <table className="table is-fullwidth">{props.children}</table>
  );
}

export default Table;