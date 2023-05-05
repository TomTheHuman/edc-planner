import React, { useEffect } from 'react';

// External Imports
import Image from 'next/image';

// Internal Imports
import { landing, lineup } from '../utils/Info';
import sx from '../styles/pages/Landing.module.scss';

/**
 * Landing page com20T03ponent, rendering content to be displayed when users
 * first visit the site
 * @returns {JSX.Element} landing page component
 */
export default function Landing(): JSX.Element {
  const { text } = landing;

  function calc() {
    const newArr: any[] = [];
    lineup.forEach((a) => {
      const sets = a.days.map((d) => {
        switch (d) {
          case 'friday':
            return {
              start: new Date('2023-05-20T03:00:00.000+00:00'),
              end: new Date('2023-05-20T04:00:00.000+00:00'),
            };
          case 'saturday':
            return {
              start: new Date('2023-05-21T03:00:00.000+00:00'),
              end: new Date('2023-05-21T04:00:00.000+00:00'),
            };
          case 'sunday':
            return {
              start: new Date('2023-05-22T03:00:00.000+00:00'),
              end: new Date('2023-05-22T04:00:00.000+00:00'),
            };
          default:
            return null;
        }
      });
      const obj = {
        name: a.artist,
        stages: a.stage,
        sets,
      };
      newArr.push(obj);
    });
    console.log(newArr);
  }

  useEffect(() => {
    calc();
  }, []);

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
