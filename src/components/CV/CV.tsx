// Requirements
import React, { ReactElement } from "react";

// Components
import Typewriter from "../../helpers/Typewriter/Typewriter";
import Anchor from "./Anchor";

// Style
import css from "./CV.module.less";

function CV(): ReactElement {
  return (
    <div className="main">
      <Typewriter text="CV" />
      <a href="docs/steve_bunting_cv.pdf" download>
        <button type="button">Download as PDF</button>
      </a>
      <div>
        <h3 className={[css.cvSubheader, css.top].join(" ")}>About</h3>
        <p>
          I have spent the last 15 years as a touring sound engineer, but have
          always pursued computer programming as a hobby and as a tool to help
          me and my colleagues in other fields. I am now looking to get off the
          road and start a new career as a software developer, utilising the
          knowledge I have gained, my experience working with professionals from
          all over the world and the technical skills I relied on daily.
        </p>

        <h3 className={css.cvSubheader}>Programming Languages</h3>
        <p>
          JavaScript / Node.js / React, Python / Flask, Java, Swift, Web
          Scripting (PHP / HTML / CSS)
        </p>

        <h3 className={css.cvSubheader}>Previous Projects</h3>
        <ul className={css.cvList}>
          <li>
            <span className={css.cvDetail}>Whisk.se</span>
            A website and e-commerce store developed in Node.js with MongoDB and
            Swish integration for an eco-conscious bakery in Stockholm (
            <Anchor name="whisk.se" link="https://whisk.se/" />)
          </li>
          <li>
            <span className={css.cvDetail}>OSM PreSave</span>
            A web app in Node.js that automatically updates subscribed users’
            Spotify, Apple Music or Deezer accounts with a customised playlist
            the day a track is released (
            <Anchor
              name="opensourcemuzic.com/dnn"
              link="https://opensourcemuzic.com/dnn/"
            />
            )
          </li>
          <li>
            <span className={css.cvDetail}>ShareTrader</span>
            A web application for keeping track of LSE-based share portfolios
            build in Python with Flask. Retrieves up-to-date data from ADVFN and
            logs it to a MySQL database to track portfolios and compare to
            indices (
            <Anchor
              name="sharetrader.stevebunting.com"
              link="http://sharetrader.stevebunting.com/"
            />
            )
          </li>
          <li>
            <span className={css.cvDetail}>RFXp</span>
            An Android / iOS application for calculating and verifying inter-
            modulations and avoiding clashes with local broadcasting when
            setting up touring radio microphone systems (
            <Anchor
              name="rfxp.stevebunting.com"
              link="https://rfxp.stevebunting.com/"
            />
            )
          </li>
          <li>
            <span className={css.cvDetail}>RF Library</span>
            An OS X application to convert, process and organise exported files
            from radio scanners for use in radio microphone configuration for
            live events (
            <Anchor
              name="rflibrary.stevebunting.com"
              link="https://rflibrary.stevebunting.com/"
            />
            )
          </li>
        </ul>

        <h3 className={css.cvSubheader}>Experience</h3>
        <h4 className={css.cvDetail}>
          Freelance Live Sound Engineer (2005 – 2020)
        </h4>
        <p>
          Primarily working as a monitor engineer and RF technician, I was
          responsible for mixing the on-stage sound directly for the artist for
          acts including Tom Jones, Little Mix, Pixie Lott, Leona Lewis, Jason
          Derulo among others. Events included worldwide tours, one-offs,
          festivals and corporate events.
        </p>

        <p>The job required a large number of skills, including:</p>

        <ul className={css.cvList}>
          <li>
            Working with a variety of demanding teams in fast-paced environments
            and high stress situations.
          </li>
          <li>
            An understanding of the needs of fellow musicians and the ability to
            accurately represent their artistic vision into technical reality.
          </li>
          <li>
            Experience operating, configuring and setting-up a wide variety of
            complex professional sound reinforcement equipment, including most
            modern digital mixing consoles, DSP and line arrays, with the
            ability to rapidly adapt when faced with unknown hardware.
          </li>
          <li>
            Knowledge and operation of popular digital audio workstations and
            other audio software, including Logic X and Waves.
          </li>
          <li>
            A comprehensive knowledge and understanding of radio technology and
            coordination.
          </li>
          <li>
            Practical expertise of dual-FFT based audio analysis equipment.
          </li>
          <li>
            Logical understanding of signal flow and using test equipment for
            rapid fault-finding.
          </li>
          <li>
            Considerable IT knowledge of wired/wireless networking, audio
            control software and array prediction.
          </li>
          <li>
            A good knowledge base of audio theory ranging from acoustics and
            electro-acoustics to audio engineering and electronics.
          </li>
        </ul>

        <h3 className={css.cvSubheader}>Education</h3>
        <ul className={css.cvList}>
          <li>
            Short Courses in Node.js, React, Java, Android, iOS, AWS
            (Pluralsight/Udacity) (2015 - 2020)
          </li>
          <li>CS50: Introduction to Computer Science (edX) (May 2017)</li>
          <li>
            Graduate with 2:1 classification from the BMus (Hons) Music and
            Sound Recording (Tonmeister) course of the University of Surrey
            (June 2005)
          </li>
          <li>
            Associateship of the University of Surrey with Distinction (June
            2005)
          </li>
          <li>
            ‘A’ Levels in Maths (A), Physics (A) and Music Technology (A) with
            an ‘AS’ level in Further Maths (A)
          </li>
        </ul>

        <h3 className={css.cvSubheader}>Other</h3>
        <ul className={css.cvList}>
          <li>
            I have an easy-going, friendly, approachable and helpful nature
            while maintaining meticulous and exacting standards.
          </li>
          <li>
            I am adaptable, quick to learn new technologies, workflows and best
            practices and always looking to expand my knowledge.
          </li>
          <li>Native English speaker with working Swedish language.</li>
        </ul>

        <h3 className={css.cvSubheader}>Interests</h3>
        <p>
          My time on the road has inspired an interest in both photography and
          cookery. I also enjoy listening to many kinds of music in spare time,
          as well as playing the piano and swimming.
        </p>
      </div>
    </div>
  );
}

export default CV;
