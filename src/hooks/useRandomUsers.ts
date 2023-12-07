import { useState, useEffect } from 'react';
import { User } from '../types/userTypes';

const useRandomUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=20');
        const data = await response.json();
        // data dog log the results for the following call
        setUsers(data.results);
        setLoading(false);
      } catch (error) {
        // log the error for the call made
        console.log('Error fetching data', error); // eslint-disable-line no-console
      }
    };

    fetchData();
  }, []);

  return { users, loading };
};

export default useRandomUsers;
