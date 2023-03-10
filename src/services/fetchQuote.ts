import axios from 'axios';
import { Quote } from 'shared/types';

const URL =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

export const fetchAllQuotes = async (): Promise<Quote[]> =>
  await axios({
    method: 'get',
    url: URL,
  }).then(({ data }) => data.quotes);
