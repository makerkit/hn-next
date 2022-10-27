import { use } from 'react';
import Heading from './shared/Heading';
import { getFrontPage } from '../lib/api';
import StoriesList from './shared/StoriesList';
import SearchBar from './shared/SearchBar';

function HomePage() {
  const stories = use(getFrontPage());

  return (
    <div className={'flex flex-col space-y-6'}>
      <SearchBar />

      <Heading>Front Page</Heading>

      <div>
        <StoriesList stories={stories} />
      </div>
    </div>
  );
}

export default HomePage;
