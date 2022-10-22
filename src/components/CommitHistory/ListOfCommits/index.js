import { timeSince } from '../../../utils/date';
import styles from './styles.scss';

const ListOfCommits = ({ commits }) => {
  return (
    <ul className="commit">
      {commits.map(({
        id, author, timestamp, message
      }) => (
        <li className="commit-item" key={id}>
          <span className="commit-author">{author}</span>
          <span className="commit-message">{message}</span>
          <span className="commit-timestamp">{timeSince(timestamp)}</span>
        </li>
      ))}
    </ul>
  )
}

export default ListOfCommits;
