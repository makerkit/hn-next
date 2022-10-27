import { use } from 'react';
import { redirect } from 'next/navigation';

import StoriesList from '../shared/StoriesList';
import { getResultsFromQuery } from '../../lib/api';
import SearchBar from '../shared/SearchBar';
import Heading from '../shared/Heading';

function SearchPage(props: { searchParams: Record<string, string> }) {
  const query = props.searchParams.query;

  if (!query) {
    return redirect('/');
  }

  const data = use(getResultsFromQuery({ query, page: 0 }));

  return (
    <div className={'flex flex-col space-y-6'}>
      <SearchBar value={query} />

      <Heading>
        {data.nbHits.toLocaleString()} Search Results found for &quot;{query}
        &quot;
      </Heading>

      <StoriesList stories={data.hits} />
    </div>
  );
}

export default SearchPage;
