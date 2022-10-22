export const formatCommits = (data) => {
  return data.map(({ commit }) => {
    const { tree, author, message } = commit;
    return ({
      id: tree.sha,
      author: author.name,
      timestamp: author.date,
      message
    })
  })
}
