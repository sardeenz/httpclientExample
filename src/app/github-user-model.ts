// taken from http://json2ts.com/
// this file was originally generated via 'ng g i githubUserModel'
// which means - ng generate interface githubUserModel
// note that the name of the typescript interface is GithubUserModel whereas the name of the file is github-user-model.ts
// camelcase results in dashes in the filename
export interface GithubUserModel {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email?: any;
    hireable?: any;
    bio?: any;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}
