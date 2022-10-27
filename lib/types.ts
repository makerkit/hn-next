export interface Story {
  created_at: string;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text: string;
  comment_text: string;
  num_comments: number;
  story_id: string;
  story_title: string;
  story_url: string;
  parent_id: string | null;
  created_at_i: number;
  _tags: string[];
  objectID: string;
}

export interface StoryItem {
  id: number;
  created_at: string;
  author: string;
  title: string;
  url: string;
  text: null;
  points: number;
  parent_id: null;
  children: StoryItemChild[];
}

export interface StoryItemChild {
  id: number;
  created_at: string;
  author: string;
  text: string;
  points: number;
  parent_id: number;
  children: StoryItemChild[];
}

export enum Tags {
  Story = 'story',
  FrontPage = 'front_page',
  AskHN = 'ask_hn',
}

export interface StoryComment {
  created_at: string;
  title: null;
  url: null;
  author: string;
  points: null;
  story_text: null;
  comment_text: string;
  num_comments: null;
  story_id: number;
  story_title: string;
  story_url: string;
  parent_id: number;
  created_at_i: number;
  objectID: string;
}
