import React from "react";
import { Link } from "react-router-dom";

import "../aboutpage/aboutpage.styles.scss";

import Flag from "react-world-flags";
import { Helmet } from "react-helmet-async";

const About = () => (
  <main>
    <Helmet>
      <title>Arnel Imperial - About Page</title>
      <link rel="canonical" href="https://www.arnelimperial.com/" />
    </Helmet>

    <article>
      <section>
        <h3 className="h3">About me</h3>
        <p>
          <a
            href="https://drive.google.com/file/d/1wLpZoswC1_fMwmBejL2O2Z93FrAD4aVn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://lh3.googleusercontent.com/BuHVqWt7Qqg2mV6bKFFnc92GALyKZBktIWTonNAQpafAIjHABDTYR6lCcpucNuBa22mfplDvwxpgqrGlVWswxPAUIV_HPR4p1gy1I4I-6WEOW_fRCuoKJV6jqht9Wvu6VfsrfwzR3g=w2400"
              alt="Arnel Imperial solo"
              className="solo--picture"
            />
          </a>
        </p>
        <p className="lead">
          Hi there! My name is Arnel Imperial, and I build internet sites, just
          like this one, for instance. I develop websites not (yet) for food,
          shelter, and clothing but as a hobby, for personal interest, and
          sometime just to kill time. I learn many things so far (and I expect
          more challenging to come) and really like this diversion while
          learning at the same time.
        </p>
        <em>
          Link to{" "}
          <Link className="anchor" to="/resume">
            résumé
          </Link>{" "}
          or{" "}
          <Link className="anchor" to="/uses">
            {" "}
            uses
          </Link>{" "}
          page.
        </em>
        <p className="mt-1">
          Some of the phrases that best suit to describe me. My general know-how
          and the stuff I don't:
        </p>
        <ul>
          <li>Self-taught, non-professional coder.</li>
          <li>Computer programming and general technology enthusiast.</li>
          <li>
            I can do back-end web development in Python, Postgres, SQLite and
            some NodeJS.
          </li>
          <li>
            ...and front-end web development using HTML, CSS and Javascript.
          </li>
          <li>
            <strong>Not</strong> on UI/UX or web design (not yet my focus).
          </li>
          <li>Beginner's mindset all the time.</li>
        </ul>
        <p>
          I was born and raised in the <Flag code={608} height="13" />{" "}
          Philippines but currently living and working in Finland. I work as a
          Culinarian for more than a decade and also as a Food Technologist in
          the past.
        </p>
        <h6 className="h6">
          On the lighter side, somethings make me preoccupied, aside from my
          usual mundane tasks.
        </h6>
        <ul>
          <li>
            Listening to music (no particular genre).
          </li>
          <li>
            Streaming movies.
          </li>
          <li>Lifting weights (if I have a time).</li>
          <li>Short or long walking (if I have a time).</li>
          <li>Chilling-out</li>
        </ul>
        <p>
          Send me some messages to{" "}
          <a className="anchor" href="#" rel="noopener noreferrer">
            contact link
          </a>{" "}
          if you're interested in opening your door for me on your projects, for
          collaboration, want to say hi/hello, and want to make friends with me.
          Just feel free to contact me whenever you like to do it on your phase
          at your own free will.
        </p>
      </section>
      <section>
        <h3 className="h3">About this website</h3>
        <p>
          The purpose why I developed this site is to document what I have
          learned from other souls, from online materials, or books/articles
          that I read. I just want to put it in one place so that it's easier
          for me to retrieve information rather than asking my best friend, Mr.
          Google, to look for the exact origin of the topic that I want to delve
          in again.
        </p>
        <p>
          The topics that I usually post are not so unique online, but I am
          pleased if you have spared your valuable time to read some of them.
          The most important thing is that the contents of this site matter to
          me the most.
        </p>
        <p>
          I keep this site minimal on graphics with no mumbo jumbo animation
          because I want to focus on the content, and it is my outlook of
          personal websites that simplicity is timeless and neat. It's only
          composed of basic HTML markup and hyperlinked text by design. It is
          simple to build even a beginner in HTML and CSS can emulate this
          website. This web project is open-source and free to use whatever
          purpose it may serve. You can fork this web project on{" "}
          <a
            className="anchor"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bitbucket
          </a>{" "}
          (For those who like).
        </p>
        <h5 className="h5">Powered by:</h5>
        <ul>
          <li>
            Frontend &#8213; ReactJS (
            <a
              href="https://github.com/facebook/create-react-app"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              create-react-app
            </a>
            )
          </li>
          <li>
            Backend and REST API &#8213; Django & Django REST Framework (
            <a
              href="https://cookiecutter-django.readthedocs.io/en/latest/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookiecutter Django
            </a>
            )
          </li>
        </ul>
        <h5 className="h5">Deployment platforms</h5>
        <ul>
          <li>Static site deployed to Netlify.</li>
          <li>Backend side was served from Heroku.</li>
        </ul>
        <h5 className="h5">Licenses</h5>
        <ul>
          <li>
            The content of this website is licensed under a{" "}
            <a
              className="anchor"
              href="https://creativecommons.org/licenses/by/4.0/?"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC-BY-4.0
            </a>
            .
          </li>
          <li>
            Codes is licensed under the{" "}
            <a
              className="anchor"
              href="https://zlib.net/zlib.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              zlib license
            </a>{" "}
            license.{" "}
          </li>
        </ul>
      </section>
    </article>
  </main>
);

export default About;
