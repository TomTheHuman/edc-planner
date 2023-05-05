import React, { useEffect } from 'react';

// External Imports
import Image from 'next/image';

// Internal Imports
import { landing } from '../utils/Info';
import sx from '../styles/pages/Landing.module.scss';

/**
 * Landing page com20T03ponent, rendering content to be displayed when users
 * first visit the site
 * @returns {JSX.Element} landing page component
 */
export default function Landing(): JSX.Element {
  const { text } = landing;

  return (
    <div className={sx.root}>
      <div id={sx.graphic}>
        <Image
          id={sx.image}
          src="/edc-logo.png"
          alt="EDC Logo"
          width="300px"
          height="160px"
          layout="responsive"
        />
      </div>
      <div id={sx.text}>
        <h2
          id={sx.title}
          className={sx.head1}
        >
          {text.title}

        </h2>
        {text.subtitle.map((line) => (
          <p key={line} className={sx.body1}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
