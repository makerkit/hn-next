'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SidebarLinkItem(
  props: React.PropsWithChildren<{
    href: string;
  }>
) {
  const pathName = usePathname();
  const isActive = pathName === props.href;

  const activeClassName = isActive
    ? `dark:bg-black-200 bg-gray-200 dark:text-white`
    : 'dark:text-gray-300 dark:hover:bg-black-300 active:bg-gray-300 hover:bg-gray-200 dark:active:bg-black-200';

  return (
    <Link
      className={`px-3 space-x-4 items-center transition-all py-2.5 font-medium rounded-md flex flex-1 ${activeClassName}`}
      href={props.href}
    >
      {props.children}
    </Link>
  );
}

export default SidebarLinkItem;
