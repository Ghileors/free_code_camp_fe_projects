import { Quote } from 'shared/types';

export function getRandomQuote(quotes: Quote[]) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
