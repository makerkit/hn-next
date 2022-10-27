import { StoryComment } from '../../lib/types';

function CommentsSection(
  props: React.PropsWithChildren<{
    comments: StoryComment[];
  }>
) {
  return (
    <div className={'flex flex-col space-y-4 mt-4'}>
      <div
        className={
          'flex flex-col divide-y divide-gray-100 dark:divide-black-400 space-y-'
        }
      >
        {props.comments.map((comment) => {
          return (
            <div key={comment.objectID} className={'max-w-2xl py-4'}>
              <div className={'flex flex-col space-y-3'}>
                <p className={'text-sm text-gray-500 dark:text-gray-400'}>
                  {comment.author} commented on{' '}
                  {new Date(comment.created_at).toDateString()}
                </p>

                <p dangerouslySetInnerHTML={{ __html: comment.comment_text }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommentsSection;
