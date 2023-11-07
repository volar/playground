import { users as sampleUsers } from './sample';

const axios = require('axios');

function authenticate(email, password) {
  const account = sampleUsers.find((a) => a.email === email);
  if (account && account.password === password) {
    return account;
  } else {
    return undefined;
  }
}

// The object returned from this function will be displayed in
// a modal upon clicking submit on the login form.

async function login(email, password) {
  const account = authenticate(email, password);
  const apiUrl = 'https://hackcheck.woventeams.com/api/v4/breachedaccount/';
  let breaches = [];

  if (account) {
    try {
      console.log('get hack check api for', `${apiUrl}${email}`);
      const response = await axios.get(`${apiUrl}${email}`);

      if (response.status === 200) {
        const allBreaches = response.data;
        console.log('got all data');
        console.log(allBreaches);
        const breaches = allBreaches
          .filter((breach) => {
            return (
              breach.IsSensitive === false &&
              breach.DataClasses.contains('Passwords') &&
              new Date(breach.AddedDate) > new Date(account.lastLogin)
            );
          })
          .map((breach) => ({
            name: breach.Name,
            domain: breach.Domain,
            breachDate: breach.BreachDate,
            addedDate: breach.Breach.AddedDate,
          }));

        console.log('got Breaches');
        console.log(breaches);
      }
    } catch (error) {
      console.log('Failed to get the breaches or no breach found');
    }

    // A new breach was detected!
    if (breaches.length > 0) {
      return {
        success: true,
        meta: {
          suggestPasswordChange: true,
          breachedAccounts: breaches,
        },
      };
    } else {
      return { success: true };
    }
  } else {
    return {
      success: false,
      message: 'The username or password you entered is invalid.',
    };
  }
}

export default login;
