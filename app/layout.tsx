import '../styles/globals.css';

import Sidebar from './shared/Sidebar';

function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang={'en'}>
      <body>
        <div className={'flex'}>
          <div
            className={'w-2/12 max-w-xs dark:bg-black-400 bg-gray-50 h-screen'}
          >
            <Sidebar />
          </div>

          <div
            className={'bg-white dark:bg-black-500 w-full overflow-x-hidden'}
          >
            <div className={'relative mx-auto h-screen w-full overflow-y-auto'}>
              <div className={'p-6'}>{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
