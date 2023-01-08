import { useEffect, useState } from 'react';
import { Quote } from 'shared/types';
import { fetchAllQuotes } from 'services/fetchQuote';
import { createHex, getRandomQuote } from 'shared/utils';

export const useRandomQuoteMachine = () => {
  const [allQuotes, setAllQuotes] = useState<Quote[]>([]);
  const [color, setColor] = useState('');
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  useEffect(() => {
    setColor(createHex());
    fetchAllQuotes().then((quotes) => {
      setAllQuotes(quotes);
      setCurrentQuote(getRandomQuote(quotes));
    });
  }, []);

  const handleClickFetchNewQuote = () => {
    setColor(createHex());
    setCurrentQuote(getRandomQuote(allQuotes));
  };

  return {
    color,
    currentQuote,
    handleClickFetchNewQuote,
  };
};
