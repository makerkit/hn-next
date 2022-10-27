'use client';

import { useEffect } from 'react';

function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>

      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}

export default Error;
