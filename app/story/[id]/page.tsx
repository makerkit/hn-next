import { use } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import { getCommentsByStoryId, getItemById } from '../../../lib/api';
import Heading from '../../shared/Heading';
import CommentsSection from '../../shared/CommentsSection';
import { StoryItemChild } from '../../../lib/types';

function StoryPage(props: { params: Record<string, string> }) {
  const id = props.params.id;

  if (!id) {
    return redirect('/');
  }

  const item = use(getItemById(id));
  const comments = use(getCommentsByStoryId(id));

  return (
    <div>
      <div className={'flex flex-col space-y-4'}>
        <Link className={'hover:underline'} href={'../'}>
          <span className={'flex items-center text-sm font-medium space-x-2'}>
            <ArrowLeftIcon className={'h-4'} />
            <span>Back</span>
          </span>
        </Link>

        <div className={'flex flex-col space-y-2'}>
          <Heading>
            {item.url ? (
              <Link
                className={'hover:underline'}
                target={'_blank'}
                href={item.url}
              >
                {item.title}
              </Link>
            ) : (
              item.title
            )}
          </Heading>

          <div className={'text-sm text-gray-500 dark:text-gray-400'}>
            <p>
              {item.points} points by {item.author}
            </p>
          </div>
        </div>

        <div className={'max-w-2xl'}>
          <StoryChildrenRenderer items={item.children} />
        </div>

        <div>
          <CommentsSection comments={comments} />
        </div>
      </div>
    </div>
  );
}

function StoryChildrenRenderer(
  props: React.PropsWithChildren<{
    items: StoryItemChild[];
  }>
) {
  return (
    <div className={'flex flex-col space-y-4'}>
      {props.items.map((child) => {
        return (
          <div key={child.id}>
            <div dangerouslySetInnerHTML={{ __html: child.text }} />

            <StoryChildrenRenderer items={child.children ?? []} />
          </div>
        );
      })}
    </div>
  );
}

export default StoryPage;
