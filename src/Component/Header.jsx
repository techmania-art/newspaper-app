import React from "react";

function Header() {
  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand">
            <strong>The Indian Times</strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link" href="/view">
                Customers
              </a>
              <a class="nav-link" href="/search">
                Search
              </a>
              <a class="nav-link" href="/del">
                Delete
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
