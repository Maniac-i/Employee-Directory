import React from "react";

function NavSortButton(props) {
  return (
    <div class="navbar-item">
      <p class="control">
        <a class="button is-light" onClick={props.sortByAge}>
          <span>Sort by Age</span>
        </a>
      </p>
    </div>
  );
}

export default NavSortButton;
