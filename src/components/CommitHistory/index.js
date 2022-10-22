import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import BasicInfoForm from './BasicInfoForm';
import ListOfCommits from './ListOfCommits';
import Loader from '../Loader';
import Refresh from './Refresh';
import { formatCommits } from '../../utils/common';
import api from '../../api';

const CommitHistory = () => {
  const [repoDetails, setRepoDetails] = useState({});
  const [commits, setCommits] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async (owner, repo) => {
    setIsFetching(true);
    try {
      const [data, error] = await api.getData(owner, repo);
      if (error) {
        toast.error('Error occured');
      } else {
        setCommits(formatCommits(data));
      }
    } catch (error) {
      toast.error('Unable to fetch data. Provide valid user and repo name.');
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchCommits();
  }, [repoDetails]);

  const fetchCommits = () => {
    const { owner, repo } = repoDetails;
    if (owner && repo) {
      fetchData(owner, repo);
    }
  }

  const getRepoDetails = (details) => {
    if (details.owner.length === 0) {
      toast.error('Enter repo owner username');
      return;
    }

    if (details.repo.length === 0) {
      toast.error('Enter valid repo name');
      return;
    }

    setRepoDetails(details);
  }

  return (
    <div>
      <Refresh handleClick={fetchCommits} />
      {isFetching ? <Loader /> : <BasicInfoForm handleSubmit={getRepoDetails} />}
      
      <ListOfCommits commits={commits}/>
    </div>
  )
}

export default CommitHistory;
