import { Story, StoryComment, StoryItem, Tags } from './types';

const BASE_URL = `https://hn.algolia.com/api/v1`;

export async function getFrontPage() {
  return fetch(`${BASE_URL}/search?tags=${Tags.FrontPage}`)
    .then((r) => r.json())
    .then((r) => {
      console.log(r);
      return r.hits;
    });
}

export async function getTopStories(params: {
  page: number;
}): Promise<Story[]> {
  const queryParams = `tags=${Tags.Story}&hitsPerPage=100&page=${params.page}`;

  return fetch(`${BASE_URL}/search_by_date?${queryParams}`)
    .then((r) => r.json())
    .then((r) => r.hits);
}

export async function getQuestions(params: { page: number }): Promise<Story[]> {
  const queryParams = `tags=${Tags.AskHN}&hitsPerPage=100&page=${params.page}`;

  return fetch(`${BASE_URL}/search_by_date?${queryParams}`)
    .then((r) => r.json())
    .then((r) => r.hits);
}

export async function getResultsFromQuery(params: {
  page: number;
  query: string;
}) {
  const queryParams = `tags=${Tags.Story}&hitsPerPage=100&page=${params.page}&query=${params.query}`;

  return fetch(`${BASE_URL}/search?${queryParams}`).then((r) => r.json());
}

export async function getItemById(storyId: string): Promise<StoryItem> {
  return fetch(`${BASE_URL}/items/${storyId}`).then((r) => r.json());
}

export async function getCommentsByStoryId(
  storyId: string
): Promise<StoryComment[]> {
  return fetch(`${BASE_URL}/search?tags=comment,story_${storyId}`)
    .then((r) => r.json())
    .then((response) => response.hits);
}
