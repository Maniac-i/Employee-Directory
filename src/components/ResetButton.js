import React from 'react';

function Reset(props) {
  return(
<div class="navbar-item">
      <p class="control">
        <a class="button is-warning" onClick={props.reset}>
          <span>Reset</span>
        </a>
      </p>
    </div>
  )
}

export default Reset;