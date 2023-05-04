import React, { useRef, useState } from 'react';

// External Imports
import { Button, ButtonGroup, Divider } from '@mui/material';

// Internal Imports
import { lineup } from '../utils/Info';
import sx from '../styles/pages/Lineup.module.scss';

function Artist(props: any): JSX.Element {
  const { artist } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number>(-1);

  const options = ['🗑️', '🤷🏻', '🙂', '🔥'];

  return (
    <div
      ref={ref}
      id={sx.artist}
      className={sx.row}
    >
      <p
        id={sx.name}
        className={sx.body1}
      >
        {artist}
      </p>
      <ButtonGroup
        fullWidth
        variant="outlined"
        aria-label="outlined button group"
      >
        {options.map((option, i) => (
          <Button
            key={option}
            id={selected === i ? sx.selected : ''}
            onClick={() => setSelected(i)}
          >
            {option}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

function Lineup(): JSX.Element {
  return (
    <div className={sx.root}>
      <div
        id={sx.header}
        className={sx.row}
      >
        <h2 className={sx.head2}>
          Lineup
        </h2>
      </div>
      <div className={sx.content}>
        <div
          id={sx.info}
          className={sx.row}
        >
          <p className={sx.body1}>
            Rate each artist in the lineup based on your preferences.
            If you invite your friends, their ratings will be paired with
            yours to generate a list to help you plan your time at EDC.
          </p>
        </div>
        <div
          id={sx.legend}
          className={sx.row}
        >
          <h3 className={sx.head3}>
            Legend
          </h3>
          <div
            id={sx.keys}
            className={sx.row}
          >
            <div className={sx.key}>
              <p
                id={sx.emoji}
                className={sx.body1}
              >
                🗑️
              </p>
              <p
                id={sx.text}
                className={sx.body1}
              >
                Not interested
              </p>
            </div>
            <div className={sx.key}>
              <p
                id={sx.emoji}
                className={sx.body1}
              >
                🤷🏻
              </p>
              <p
                id={sx.text}
                className={sx.body1}
              >
                Sure, if there&apos;s no one better
              </p>
            </div>
            <div className={sx.key}>
              <p
                id={sx.emoji}
                className={sx.body1}
              >
                🙂
              </p>
              <p
                id={sx.text}
                className={sx.body1}
              >
                Def down to see
              </p>
            </div>
            <div className={sx.key}>
              <p
                id={sx.emoji}
                className={sx.body1}
              >
                🔥
              </p>
              <p
                id={sx.text}
                className={sx.body1}
              >
                Must see, won&apos;t miss
              </p>
            </div>
          </div>
        </div>
        <div
          id={sx.artists}
          className={sx.row}
        >
          <h3 className={sx.head3}>
            Artists & Acts
          </h3>
          {lineup.map((item) => (
            <Artist
              key={item.artist}
              artist={item.artist}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lineup;
