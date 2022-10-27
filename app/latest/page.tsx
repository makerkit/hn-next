import { use } from 'react';
import Heading from '../shared/Heading';
import { getTopStories } from '../../lib/api';
import StoriesList from '../shared/StoriesList';
import SearchBar from '../shared/SearchBar';

function LatestStoriesPage() {
  const stories = use(
    getTopStories({
      page: 0,
    })
  );

  return (
    <div className={'flex flex-col space-y-6'}>
      <SearchBar />

      <Heading>Top Stories</Heading>

      <div>
        <StoriesList stories={stories} />
      </div>
    </div>
  );
}

export default LatestStoriesPage;
