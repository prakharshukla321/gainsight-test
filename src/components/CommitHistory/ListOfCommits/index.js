const ListOfCommits = ({ commits }) => {
  return (
    <ul className="commits">
      {commits.map(({
        id, author, timestamp, message
      }) => (
        <li className="commit-item" key={id}>
          <span className="commit-author">{author}</span>
          <span className="commit-message">{message}</span>
          <span className="commit-timestamp">{timestamp}</span>
        </li>
      ))}
    </ul>
  )
}

export default ListOfCommits;