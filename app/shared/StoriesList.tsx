import Link from 'next/link';
import { Story } from '../../lib/types';

function StoriesList({
  stories,
}: React.PropsWithChildren<{
  stories: Story[];
}>) {
  return (
    <table className={'Table'}>
      <thead>
        <tr>
          <th>Comments</th>
          <th>Points</th>
          <th>Title</th>
          <th>Posted by</th>
          <th>Posted on</th>
        </tr>
      </thead>
      <tbody>
        {stories.map((story) => {
          const date = new Date(story.created_at).toLocaleDateString();
          const url = `/story/${story.objectID}`;

          return (
            <tr key={story.objectID ?? story.title}>
              <td>{story.num_comments}</td>
              <td>
                <span className={'text-green-700 dark:text-green-500'}>
                  {story.points}
                </span>
              </td>
              <td>
                <Link className={'hover:underline'} href={url}>
                  {story.title}
                </Link>
              </td>
              <td>{story.author}</td>
              <td>{date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StoriesList;
