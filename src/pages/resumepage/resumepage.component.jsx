import React from "react";
import { Link } from "react-router-dom";

import "../resumepage/resumepage.styles.scss";

const Resume = () => (
  <main>
    <article>
      <h2 className="h2">Résumé</h2>
      <section>
        <h3 className="h3">Profile</h3>
        <p>
          I was first introduced to coding by myself unintentionally when I'm
          writing a business plan proposal on our undelivered restaurant
          project. I was looking for a tool that solves a problem, but to my
          inadequate knowledge at that time, I found out that it is not the
          right tool for our outline but another activity that I found myself
          doing something useful to be liked.
          <br />
          <br />
          Since being introduced to programming, I took online classes at{" "}
          <a
            href="https://www.metropolia.fi/en/academics/open-university-courses/nonstop-virtual-studies-information-and-communication-technology"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metropolia Open University
          </a>
          , read a{" "}
          <a
            href="https://www.py4e.com"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            text-book about Python 3
          </a>
          , and started a simple console application. From this, I knew I was
          captivated by the world of software development. What I begun from
          mistakes has become an evolved passion that only gets more compelling
          as years pass by.
        </p>
      </section>
      <section>
        <h3 className="h3">Key skills</h3>
        <p class="h4 spaces">Technical</p>
        <Link to="/uses" className="spaces anchor">
          List of tech I use
        </Link>
        <p className="lead spaces mt-1">Languages and Runtime</p>
        <p>Python, SQL, Javascript, HTML, CSS, NodeJS</p>
        <p className="lead spaces">Framework</p>
        <p>Django, VueJs, ReactJS, Express</p>
        <p className="lead spaces">Databases</p>
        <p>PostgreSQL, SQLite, MongoDB</p>
        <p className="lead spaces">Version Control</p>
        <p className="spaces">Git</p>
        <p className="h4 spaces mt-1">Interpersonal</p>
        <p>
          A self-taught, motivated, and aspiring developer with a focus on
          Python-based web development and can effectively work autonomously and
          as a team player. For him, having no academic degree is not a
          hindrance to open someone's door and giving you a chance to get your
          hands dirty in the IT industry. Arnel has a grasp of multiple
          technologies, an eye for details, and able to use his own initiative,
          ensuring that the workflow runs smoothly, combining with a sense of
          humor and fun. Right now, he is looking for an entry-level position
          with an exciting company that attracts talented people.
        </p>
      </section>
      <section>
        <h3 className="h3">Education</h3>
        <p class="h4 spaces">
          <a
            href="https://drive.google.com/file/d/1zKQUSQ1ke_ga40yPnmSc9zOHPFFB-Rt8/view?usp=sharing"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metropolia Open University of Applied Sciences
          </a>
        </p>
        <p className="work spaces">
          Programme in Information and Communication Technology
        </p>
        <p className="spaces">2017 - present</p>
        <p className="spaces">Coursework</p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/fi/realization/TT00DV43-3001"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Introduction to Javascript
          </a>
        </p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/en/realization/TT00CQ83-3004"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developing Modern Web Platforms (HTML, CSS, JS)
          </a>
        </p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/fi/realization/TT00CB02-3003"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Python Programming
          </a>
        </p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/en/realization/TT00CC63-3004"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Introduction to Computing
          </a>
        </p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/en/realization/TT00CB04-3004"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            C++ Programming
          </a>
        </p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/fi/realization/TT00VI01-3005"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Object-Oriented Programming (C++)
          </a>
        </p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/en/realization/TT00DG26-3005"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mastering the Fundamental of RESTful API Design
          </a>
        </p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/en/realization/TT00CB03-3005"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Introduction to Java Programming
          </a>
        </p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/en/realization/TT00CB05-3005"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            C Programming
          </a>
        </p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/en/realization/TT00CB01-3005"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            SQL and Relational Databases
          </a>
        </p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/en/realization/TT00CA99-3005"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            PHP Programming
          </a>
        </p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/en/realization/TT00BH11-3005"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unix/Linux (Basic and Advanced)
          </a>
        </p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/en/realization/TT00AC49-3005"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            C# Programming Fundamentals
          </a>
        </p>
        <p className="spaces">
          <a
            href="https://opinto-opas.metropolia.fi/en/realization/TT00AC16-3005"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ruby Programming
          </a>
        </p>
        <p>
          <a
            href="https://opinto-opas.metropolia.fi/fi/realization/TT00DW09-3001"
            className="spaces anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Typescript
          </a>
        </p>
      </section>
      <section>
        <h3 className="h3">Personal Development</h3>
        <p className="spaces">Udemy Platform</p>
        <p className="spaces">
          <a
            href="https://www.udemy.com/certificate/UC-7242471e-8f72-441e-bca1-56b8f91a9c48/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Complete JavaScript Course 2020: Build Real Projects! Udemy
          </a>
        </p>
        <p>
          Learn how to select and change webpage elements, create new elements
          and handle DOM events. Learn complex JavaScript features such as
          function constructors, prototypal inheritance, first-class functions,
          closures, the bind and apply methods. Acquired knowledge how to
          organize and structure codes using modules and functions, how to
          create data privacy, encapsulation, modern version of JavaScript: new
          features of ES6 / ES2015, the event loop, promises, async/await, AJAX
          calls and APIs; Learn how to set up a modern development workflow with
          NPM, Webpack, Babel and ES6 modules.
        </p>
        <p className="spaces">
          <a
            href="https://www.udemy.com/certificate/UC-79fd0dfe-13a0-433e-8f2e-76be6cc1751d/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Python for Data Science and Machine Learning Bootcamp
          </a>
        </p>
        <p>
          Learn how to use Numpy for numerical data, Matplotlib for Python
          plotting, Pandas for Data Analysis, Seaborn for statistical plots,
          Plotly for interactive dynamic visualizations, SciKit-Learn for
          machine learning tasks and Support Vector Machines.
        </p>
        <p className="spaces">
          <a
            href="https://www.udemy.com/certificate/UC-79fd0dfe-13a0-433e-8f2e-76be6cc1751d/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Complete Guide to Django REST Framework and Vue JS
          </a>
        </p>
        <p>
          Learn how to build backend REST APIs with Python & Django, build
          professional production-ready REST APIs,secure the REST APIs you will
          create with both token and session authentication. Create real-world
          single page applications with Vue JS and Django.
        </p>
      </section>
      <section>
        <h3 className="h3">Trade certification</h3>
        <p className="work spaces">Certificate in Culinary Arts</p>
        <p>
          <a
            href="https://www.facebook.com/MOSTInstituteMainCampus/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            MOST Institute
          </a>
        </p>
      </section>
      <section>
        <h3 className="h3">Work</h3>
        <p className="work spaces">Cook</p>
        <p className="spaces">
          <a
            href="https://soupster.com/en/venue/spasso/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spasso
          </a>
        </p>
        <i>2017 - present</i>
        <ul>
          <li>
            Seasonal worker assign in doing misen-place and line cooking in the
            hot and cold kitchen.
          </li>
          <li>Receiving delivery stocks for production.</li>
          <li>Doing miscellaneous tasks such as cleaning and dishwashing.</li>
        </ul>

        <p className="work spaces">Cook</p>
        <p className="spaces">
          <a
            href="https://www.raflaamo.fi/en/helsinki/amarillo-helsinki"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amarillo
          </a>
        </p>
        <i>2012 - 2016</i>
        <ul>
          <li>
            Assign in misen-place and line cooking in the hot and cold kitchen.
          </li>
          <li>Receiving delivery stocks for misen-place.</li>
        </ul>
        <p className="work spaces">Cook</p>
        <p className="spaces">
          <a
            href="https://www.raflaamo.fi/en/grill-it"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grill It! Radisson Blu Royal
          </a>
        </p>
        <i>2011 - 2012</i>
        <ul className="secondary--ul">
          <li>
            Assign in misen-place and line cooking in the hot and cold kitchen.
          </li>
        </ul>
        <p>Others</p>
        <p className="work spaces">Chef</p>
        <p className="spaces">Le Bistro Vert</p>

        <ul>
          <li>
            Assign in misen-place and line cooking in the hot and cold kitchen.
          </li>
        </ul>
        <p className="work spaces">Cook</p>
        <p className="spaces">Premium Gold Cafe</p>

        <ul>
          <li>Product development and material costing.</li>
        </ul>
        <p className="work spaces">Commis Chef</p>
        <p className="spaces">Chelsea Cafe</p>
        <ul>
          <li>
            Assign in misen-place and line cooking in the hot and cold kitchen.
          </li>
        </ul>
        <p className="work spaces">Research & Development Staff</p>
        <p className="spaces">Handyware Philippines</p>
        <ul>
          <li>Preparing product prototype for flavors ans spice.</li>
        </ul>
        <p className="work spaces">Research & Development Staff</p>
        <p className="spaces">Four Seas Chemicals Inc.</p>
        <ul>
          <li>Preparing prototype samples for dehydrated products.</li>
        </ul>
        <p className="work spaces">Laboratory Analyst</p>
        <p className="spaces">Via Mare Corporation</p>
        <ul>
          <li>
            Conduct physico-chemical, microbiological and shelf-life analysis of
            frozen food products.
          </li>
          <li>
            Documentation of Hazard Analysis Critical Control Points, GMP, SSOP
            of the commissary.
          </li>
        </ul>
      </section>
      <section>
        <h3 className="h3">On-The-Job Training</h3>
        <p className="work spaces">
          <a
            href="http://www.itdi.dost.gov.ph/index.php/division/food-processing/profile"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Industrial Technology Development Institute
          </a>
        </p>
        <ul>
          <li>
            Training in physico-chemical, chemical, microbiological, sensorial
            analysis of food.
          </li>
          <li>
            Hands-on training in scaling product formulation from laboratory
            scale to pilot plant scale.
          </li>
        </ul>

        <p className="work spaces">
          <a
            href="https://www.fnri.dost.gov.ph"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Food and Nutrition Research Institute
          </a>
        </p>
        <ul>
          <li>
            Training in physico-chemical, chemical, microbiological, sensorial
            analysis of food.
          </li>
        </ul>
      </section>
    </article>
  </main>
);

export default Resume;
