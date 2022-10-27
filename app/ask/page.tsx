import { use } from 'react';
import Heading from '../shared/Heading';
import { getQuestions } from '../../lib/api';
import StoriesList from '../shared/StoriesList';
import SearchBar from '../shared/SearchBar';

function AsHNPage() {
  const stories = use(
    getQuestions({
      page: 0,
    })
  );

  return (
    <div className={'flex flex-col space-y-6'}>
      <SearchBar />

      <Heading>Ask HN</Heading>

      <div>
        <StoriesList stories={stories} />
      </div>
    </div>
  );
}

export default AsHNPage;
