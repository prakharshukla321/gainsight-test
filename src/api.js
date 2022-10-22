import { Octokit } from "octokit";

let octokit;

const initOctokit = (token) => {
  octokit = new Octokit({ auth: token });
}

const getUserData = async (owner, repo) => {
  try {
    const res = await octokit.request('GET /repos/{owner}/{repo}/commits', {
      owner,
      repo
    });

    if (res.status === 200) {
      return [res.data, null];
    } else {
      return [null, true];
    }
  } catch (error) {
    throw new Error(error);
  }
}

export default {
  setup: initOctokit,
  getData: getUserData
}
