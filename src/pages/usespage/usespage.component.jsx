import React from "react";
import { Link } from "react-router-dom";

import "../usespage/usespage.styles.scss";

const Uses = () => (
  <main>
    <article>
      <h2 className="h2">Uses</h2>
      <section>
        <p className="spaces">
        Tools that I used to do the stuff that I need to do.
        </p>
        <Link to="/resume" className="anchor">
          Link to resume
        </Link>
        <h3 className="h3 mt-2">Laptop</h3>
        <p>
          <a
            href="https://support.apple.com/kb/SP776?locale=en_US"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            MacBook Pro (15-inch, 2018)
          </a>
        </p>
        <ul>
          <li>Processor: 2,2 GHz Intel Core i7</li>
          <li>Memory: 16 GB 2400 MHz DDR4 SDRAM</li>
          <li>Graphics: Intel UHD Graphics 630 1536 MB</li>
        </ul>
        <p>
          <a
            href="https://www.lenovo.com/lt/lt/laptops/ideapad/l-series/IdeaPad-L340-15IRH-Gaming/p/88IPL301161"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            IdeaPad L340 Gaming (15.6-inch)
          </a>
        </p>
        <ul>
          <li>
            Processor: Intel Core i5-9300H (2.4 - 4.1 GHz, 4 cores, 8 MB,
            Hyper-Threading)
          </li>
          <li>
            Memory: 8 GB (1x8 GB) DDR4 2400 MHz, 1 memory bank, max. 16 GB
          </li>
          <li>Graphic card: NVIDIA GeForce GTX 1050 3GB GDDR5</li>
        </ul>
        <p>
          <a
            href="https://support.hp.com/ie-en/product/hp-pavilion-g6-2200-notebook-pc-series/5296082/model/5338690/document/c03598646"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            HP Pavilion g6-2215so Notebook PC
          </a>
        </p>
        <ul>
          <li>Processor: AMD A4-4300M APU with Radeon(tm) HD Graphics</li>
          <li>Memory: 6 GB</li>
          <li>Video graphics: AMD Radeon HD 7420G Discrete-Class</li>
        </ul>
      </section>
      <section>
        <h3 className="h3">Development</h3>
        <p>
          I regularly code in{" "}
          <a
            href="https://www.python.org"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Python
          </a>{" "}
          for web development using the{" "}
          <a
            href="https://www.djangoproject.com"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Django
          </a>{" "}
          framework (
          <a
            href="https://www.postgresql.org"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            PostgreSQL
          </a>{" "}
          or{" "}
          <a
            href="https://www.sqlite.org/index.html"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            SQLite
          </a>{" "}
          for databases) and learning data analysis on the side using packages
          such as{" "}
          <a
            href="https://numpy.org"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Numpy
          </a>
          ,{" "}
          <a
            href="https://matplotlib.org"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matplotlib
          </a>
          ,{" "}
          <a
            href="https://seaborn.pydata.org"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seaborn
          </a>
          ,{" "}
          <a
            href="https://plotly.com"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plotly
          </a>
          , and{" "}
          <a
            href="https://pandas.pydata.org"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pandas
          </a>
          .{" "}
          <a
            href="https://docs.python.org/3/library/venv.html"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Venv
          </a>{" "}
          is my preferred package for creating a virtual environment. I use{" "}
          <a
            href="https://pip.pypa.io/en/stable/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pip
          </a>{" "}
          as the package-management system for general Python development and
          sometimes with{" "}
          <a
            href="https://docs.conda.io/en/latest/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conda
          </a>
          , only if do data analysis exercises in{" "}
          <a
            href="https://jupyter.org"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jupyter Notebook
          </a>
          .
        </p>
        <p>
          Aside from traditional web technologies:{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML
          </a>
          ,{" "}
          <a
            href="https://www.w3.org/Style/CSS/Overview.en.html"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS
          </a>
          , and vanilla{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Javascript
          </a>
          , I keep on practicing the nuances of some JS frameworks like{" "}
          <a
            href="https://reactjs.org"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReactJS
          </a>{" "}
          and{" "}
          <a
            href="https://vuejs.org"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            VueJS
          </a>{" "}
          which, handle by the{" "}
          <a
            href="https://nodejs.org/en/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            nodeJS
          </a>{" "}
          runtime environment using{" "}
          <a
            href="https://www.npmjs.com"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            NPM
          </a>{" "}
          as a package management system. Sometimes I use{" "}
          <a
            href="https://expressjs.com"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Express
          </a>{" "}
          (
          <a
            href="https://www.mongodb.com"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            MongoDB for database
          </a>
          ) for learning NodeJS back-end development.
        </p>
        <p>
          <a
            href="https://getbootstrap.com"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap
          </a>
          ,{" "}
          <a
            href="https://www.w3schools.com/w3css/defaulT.asp"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            w3.css
          </a>
          ,{" "}
          <a
            href="https://milligram.io/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            milligram
          </a>
          , and{" "}
          <a
            href="https://csstools.github.io/sanitize.css/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            sanitize.css
          </a>{" "}
          are some of the tools I used to style website projects and{" "}
          <a
            href="https://www.jekyllrb.com"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jekyll{" "}
          </a>
          to create static sites.
        </p>
      </section>
      <section>
        <h3 className="h3">IDE & Code Editor</h3>
        <p>
          <a
            href="https://code.visualstudio.com"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            VS Code
          </a>{" "}
          is the all-purpose text editor I use for general development across
          the different programming languages I worked with, but I found{" "}
          <a
            href="https://www.jetbrains.com/pycharm/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            PyCharm
          </a>{" "}
          more intuitive for Python development. I also use{" "}
          <a
            href="https://netbeans.org/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netbeans
          </a>{" "}
          or{" "}
          <a
            href="https://www.jetbrains.com/idea/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            IntelliJ IDEA{" "}
          </a>
          for Java and{" "}
          <a
            href="http://www.codeblocks.org/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code::Blocks
          </a>{" "}
          for C/C++ programming.
        </p>
        <p>Some of the tools that I found handy for this category are:</p>
        <ul>
          <li>
            <a
              href="https://www.nano-editor.org"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nano
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/guide/textedit/welcome/mac"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              TextEdit
            </a>
          </li>
          <li>
            <a
              href="https://help.gnome.org/users/gedit/stable/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gedit
            </a>
          </li>
          <li>
            <a
              href="https://www.vim.org/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vim
            </a>
          </li>
          <li>
            <a
              href="https://notepad-plus-plus.org"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notepad++
            </a>
          </li>
          <li>
            <a
              href="https://codesandbox.io"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeSandbox
            </a>
          </li>
          <li>
            <a
              href="https://www.geany.org"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Geany
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="h3">Deployment</h3>
        <ul>
          <li>
            <a
              href="https://www.heroku.com"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heroku
            </a>
          </li>
          <li>
            <a
              href="https://www.netlify.com"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="h3">Operating System</h3>
        <ul> 
          <li>
            <a
              href="https://web.archive.org/web/20190901002230/https://www.apple.com/macos/mojave/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              MacOS
            </a>
          </li>
          <li>
            <a
              href="https://ubuntu.com"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ubuntu
            </a>
          </li>
          <li>
            <a
              href="https://www.microsoft.com/en-gb/windows/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Windows 10
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="h3">Package manager</h3>
        <ul>
          <li>
            <a
              href="https://wiki.debian.org/Apt"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apt
            </a>
          </li>
          <li>
            <a
              href="https://brew.sh/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Homebrew
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="h3">
          Versioning using{" "}
          <a
            href="https://git-scm.com"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git
          </a>
        </h3>
        <ul>
          <li>
            <a
              href="https://github.com"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.bitbucket.org"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bitbucket
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="h3">Hypervisor</h3>
        <ul>
          <li>
            <a
              href="https://www.virtualbox.org/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Virtual Box
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="h3">API Tester</h3>
        <ul>
          <li>
            <a
              href="https://www.postman.com/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Postman
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="h3">Apps/Services</h3>
        <ul>
          <li>
            For learning:{" "}
            <a
              href="https://www.udemy.com"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Udemy
            </a>
            ,{" "}
            <a
              href="https://www.viope.com/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Viope
            </a>
            ,{" "}
            <a
              href="https://www.testout.com/courses/labsim"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              TestOut-LabSim
            </a>
            ,{" "}
            <a
              href="https://techclass.fi"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Techclass
            </a>
            , and{" "}
            <a
              href="https://youtube.com"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>{" "}
            (also for listening to music)
          </li>
          <li>
            <a
              href="https://www.google.com/intl/en-GB/gmail/about/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gmail
            </a>
            /
            <a
              href="https://www.gmx.com/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              GMX
            </a>
            /
            <a
              href="https://yahoo.com"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yahoo!{" "}
            </a>
            for emailing.
          </li>
          <li>
            Office suite:{" "}
            <a
              href="https://www.libreoffice.org/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Libre Office
            </a>
            /
            <a
              href="https://www.google.com/docs/about/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Docs
            </a>
            /
            <a
              href="https://www.microsoft.com/en-us/microsoft-365/free-office-online-for-the-web"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              MS Office Online
            </a>
          </li>
          <li>
            Guiding my travelling time:{" "}
            <a
              href="https://reittiopas.hsl.fi"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reittiopas
            </a>
          </li>
          <li>
            To check my writings:{" "}
            <a
              href="https://www.grammarly.com"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Grammarly
            </a>
          </li>
          <li>
            <a
              href="https://fmovies.name/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fmovies
            </a>{" "}
            for movies.
          </li>
          <li>
            I communicate with co-workers, family and friends using{" "}
            <a
              href="https://www.whatsapp.com"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>{" "}
            or{" "}
            <a
              href="https://www.messenger.com"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Messenger
            </a>
            .
          </li>

          <li>
            VPN:{" "}
            <a
              href="https://www.tunnelbear.com"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tunnel Bear
            </a>
          </li>
          <li>
            This site domain registred from{" "}
            <a
              href="https://porkbun.com"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Porkbun
            </a>
            .
          </li>
        </ul>
      </section>
      <section>
        <h3 className="h3">etc.</h3>
        <ul>
          <li>
            Smart phone:{" "}
            <a
              href="https://www.samsung.com/us/mobile/phones/galaxy-s/samsung-galaxy-s5-active-at-t-camo-green-sm-g870adgeatt/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Samsung Galaxy S5 Active
            </a>
          </li>
          <li>
            Mouse:{" "}
            <a
              href="https://www.logitech.com/en-roeu/product/m171-wireless-mouse"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Logitech M171
            </a>
          </li>
          <li>
            USB Adapter:{" "}
            <a
              href="https://www.tp-link.com/us/home-networking/usb-adapter/archer-t4u/#overview"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Archer T4U AC1300 Wireless Dual Band USB Adapter
            </a>
          </li>
          <li>
            Compact camera:{" "}
            <a
              href="https://www.nikon.fi/fi_FI/product/discontinued/digital-cameras/2013/coolpix-aw100"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nikon COOLPIX AW100
            </a>
          </li>
          <li>
            Digital camera:{" "}
            <a
              href="https://www.canon.fi/for_home/product_finder/cameras/digital_slr/eos_650d/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canon EOS 650D
            </a>
          </li>
          <li>
            Speaker:{" "}
            <a
              href="https://www.bose.com/en_us/support/products/bose_speakers_support/bose_portable_speakers_support/soundlink-color-bluetooth-speaker.html"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bose SoundLink 415859
            </a>
          </li>
          <li>
            Camcorder:{" "}
            <a
              href="https://www.canon.fi/support/consumer_products/products/camcorders/digital/hdv_series/legria_hf_r26.html"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canon LEGRIA HF R26
            </a>
          </li>
          <li>
            <a
              href="https://www.playstation.com/en-gb/explore/ps3/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              PlayStation 3
            </a>{" "}
            games I've already played:{" "}
            <a
              href="https://www.playstation.com/en-us/games/the-last-of-us-ps3/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Last Of Us
            </a>
            ,{" "}
            <a
              href="https://2k.com/en-US/game/bioshock/"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bioshock
            </a>
            ,{" "}
            <a
              href="https://www.ea.com/en-ca/games/dead-space/dead-space-2"
              className="anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dead Space 2
            </a>
          </li>
        </ul>
      </section>
    </article>
  </main>
);

export default Uses;
