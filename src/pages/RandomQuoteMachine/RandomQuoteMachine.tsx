import React from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useRandomQuoteMachine } from './useRandomQuoteMachine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';
import { TopWave } from 'shared/components';
import { BottomWave } from 'shared/components';

export const RandomQuoteMachine = () => {
  const { color, currentQuote, handleClickFetchNewQuote } =
    useRandomQuoteMachine();

  return (
    <div id='wrapper' style={{ '--color': color } as React.CSSProperties}>
      <div id='quote-box'>
        <TopWave fill={color} />

        <div id='text-wrapper'>
          <p id='text'>{currentQuote?.quote}</p>
          <p id='author'>- {currentQuote?.author.replace('–', '')}</p>
        </div>

        <div id='buttons'>
          <a
            id='tweet-quote'
            href='https://twitter.com/intent/tweet'
            rel='noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon id='twitter-icon' icon={faTwitter} />
          </a>

          <button
            id='new-quote'
            className='default-btn'
            onClick={handleClickFetchNewQuote}
          >
            New quote
          </button>
        </div>
        <BottomWave fill={color} />
      </div>
    </div>
  );
};
