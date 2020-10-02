import React from "react";
import { Link } from "react-router-dom";

import "../notfoundpage/notfound.styles.scss";

const NotFound = () => (
  <main>
    <article>
      <section>
        <span className="frown">
          <i className="far fa-frown"></i>
        </span>
        <h3 className="h3">You found a broken link.</h3>
        <p>
          Maybe you'd be better off at the{" "}
          <Link to="/" className="anchor">
            home
          </Link>{" "}
          page.
        </p>
      </section>
    </article>
  </main>
);

export default NotFound;
