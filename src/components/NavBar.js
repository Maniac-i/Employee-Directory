import React from 'react';

function NavBar(props) {
  return(

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        {props.children}
      </div>
    </nav>

  );
}

export default NavBar;