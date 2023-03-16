export interface IGitUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
}
export interface IGitUserDetail {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  name: string;
  company: null | string;
  blog: string;
  location: null | string;
  email: null | string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}
