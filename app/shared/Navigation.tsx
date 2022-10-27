import SidebarLinkItem from './SidebarLinkItem';
import {
  QuestionMarkCircleIcon,
  HomeIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const links = [
  {
    label: `Front Page`,
    href: '/',
    icon: <HomeIcon className={'h-5'} />,
  },
  {
    label: `Latest`,
    href: '/latest',
    icon: <BoltIcon className={'h-5'} />,
  },
  {
    label: `Ask HN`,
    href: '/ask',
    icon: <QuestionMarkCircleIcon className={'h-5'} />,
  },
];

function Navigation() {
  return (
    <div>
      <ul className={'flex flex-col space-y-1 px-4'}>
        {links.map((link) => {
          return (
            <li className={'w-full'} key={link.href}>
              <SidebarLinkItem href={link.href}>
                {link.icon}

                <span>{link.label}</span>
              </SidebarLinkItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navigation;
