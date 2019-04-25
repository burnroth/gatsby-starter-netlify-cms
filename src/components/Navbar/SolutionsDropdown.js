import React from "react";

const SolutionsDropdown = data => {

  const { navbar } = data.props.translationsJson;

  const x = {
    colName : "Branschlösningar",
    items: [{
      linkText : "Sälj",
      href: "/losningar/salj",
    },
    {
      linkText : "Energi",
      href: "/losningar/energi",
    },
    {
      linkText : "Fastighet",
      href: "/losningar/fastighet",
    },
    {
      linkText : "Bygg",
      href: "/losningar/bygg",
    },
  ]
  }


  return (
    <div
      class="dropdown-menu"
      style={{ display: "block" }}
      aria-labelledby="dropdownMenuButton"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-4">
            <a class="dropdown-heading">
              <b>Lime CRM</b>
            </a>
            <a class="dropdown-item" href="/losningar/crm/">
            {navbar.solutions.standard}
            </a>
            <a class="dropdown-item" href="/addons/">
            {navbar.solutions.addOns}
            </a>
            <a class="dropdown-item" href="/resurser/gdpr/">
              GDPR
            </a>
          </div>

          <div class="col-12 col-md-6">
            <a class="dropdown-heading">
              <b>Branschlösningar</b>
            </a>
            <a class="dropdown-item" href="/losningar/salj/">
              Sälj
            </a>
            <a class="dropdown-item" href="/losningar/energi/">
              Energi
            </a>
            <a class="dropdown-item" href="/losningar/fastighet/">
              Fastighet
            </a>
            <a class="dropdown-item" href="/losningar/bygg/">
              Bygg
            </a>
            <a class="dropdown-item" href="/losningar/konsult/">
              Konsult
            </a>
            <a class="dropdown-item" href="/losningar/medlem-utbildning/">
              Medlem & utbildning
            </a>
            <a class="dropdown-item" href="/losningar/maskin-instrument/">
              Maskin & instrument
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsDropdown;
