export const Task = () => {
  return (
    <section>
      <h2>React Exercise:</h2>
      <p>
        We have a Table component that is feeling lonely and needs some data to display. Lets pretend that this Table
        comes from a library and its very limited to what its capabilites are. Lets add some data to this table. Use
        your coding best practices and try as much as you can to use a11y/semantic HTML.
      </p>
      <h3>Task:</h3>
      <ul>
        <li>
          Create a custom hook that is in charge of fetching data from this api:
          <ul>
            <li>
              <a href="https://randomuser.me/documentation#howto" target="_blank" rel="noopener noreferrer">
                Random User API
              </a>
            </li>
          </ul>
          Ensure the following:
          <ul>
            <li>Api only returns 20 users</li>
            <li>The screen displays a &apos;Loading...&apos; text when you are fetching</li>
            Note: There is already a User type that contains all the data type you need for each user
          </ul>
        </li>
        <li>
          Check how the table accepts and uses its props. Normalize / transform the api result into something that the
          table can read.
        </li>
        <li>Display on the table: Name (first and last name), Age, and Gender</li>
        <li>Make the columns sortable</li>
      </ul>
      <p>Bonus: Style the table</p>
      <ul>
        <li>Make the table headers centered</li>
        <li>Add borders to each row</li>
      </ul>
    </section>
  );
};
