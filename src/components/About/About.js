import React from 'react';
import Typewriter from '../../helpers/Typewriter/Typewriter';
import css from './About.module.less';

function About() {
  return (
    <div className="main">
      <Typewriter text="About" />
      <div>
        <img
          className={css.profilePicture}
          src="images/about/stevebunting.jpg"
          alt="Steve Bunting"
          width={240}
        />

        <p>
          Hi, my name is Steve, and I am a professional sound engineer of 15 years. After touring
          the world several times, I am now looking to spend more time at home in Stockholm and
          make a move into software development. My career has always been an incredibly important
          part of my life, a huge amount of time has to be devoted to it, so it&apos;s
          imperitive that I look forward to going to work in the morning. There was never any doubt
          in my head that software development was the career progression for me.
        </p>

        <p>
          Computers have been part of my life ever since I learnt to program BASIC on a BBC Model B
          at the age of 6. Ever since the internet became accessible to the general public,
          I&apos;ve had at least 1 or 2 websites on the go!
          I have spent the last few years honing my development skills, working on various personal
          projects and taking every opportunity to learn something new or develop my skills. I have
          no fear of sitting in front of an empty IDE with a new project in my head and a new
          framework to learn to make it happen!
        </p>

        <p>
          I have loved the past 15 years, I have worked with some world class artists, as well as
          people all over the world, visited far-flung places and made
          lifelong friends, but am ready and looking forward to moving onto the next phase.
        </p>
      </div>
    </div>
  );
}

export default About;
