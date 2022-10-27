import Link from 'next/link';

import Navigation from './Navigation';
import Logo from './Logo';

function Sidebar() {
  return (
    <div className={'flex flex-col space-y-6 py-6'}>
      <div className={'flex justify-center'}>
        <Link href={'/'}>
          <Logo />
        </Link>
      </div>

      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default Sidebar;
