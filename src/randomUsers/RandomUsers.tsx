import { Table } from './Table';
import { Task } from './Task';
import useRandomUsers from '../hooks/useRandomUsers';
import ParseData from '../utils/parseUserData';

function RandomUsers() {
  const { users, loading } = useRandomUsers();

  // Normalize the data for the table
  const normalizedData = ParseData(users);

  console.log('here is out users call from the hook', normalizedData);

  const columns = ['Name', 'Age', 'Gender'];

  return (
    <section>
      {loading ? <p>Loading....</p> : <Table columns={columns} data={normalizedData} />}
      <Task />
    </section>
  );
}

export default RandomUsers;
