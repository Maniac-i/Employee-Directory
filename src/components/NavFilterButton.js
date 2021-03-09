import React from 'react';

function NavFilterButton(props) {
  return(
<div class="navbar-item">
      <p class="control">
        <a class="button is-dark" onClick={props.filterUnitedStates}>
          <span>Lives in United States</span>
        </a>
      </p>
    </div>
  )
}

export default NavFilterButton;