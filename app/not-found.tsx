import Link from 'next/link';

function NotFound() {
  return (
    <div>
      <p>Ops, we have not found the page you requested.</p>

      <div>
        <Link href={'/'}>Go back to the Home Page</Link>
      </div>
    </div>
  );
}

export default NotFound;
