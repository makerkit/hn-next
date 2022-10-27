import Navigation from './Navigation';

function Header() {
  return (
    <div className={'container mx-auto'}>
      <div className={'flex justify-between py-4'}>
        <div>Demo</div>

        <Navigation />
      </div>
    </div>
  );
}

export default Header;
