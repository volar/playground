/* eslint-disable */
new Promise((resolve, reject) => {
    request.get(url, (error, response,  body) => {
      if (body) {
          resolve(JSON.parse(body));
        } else {
          resolve({});
        }
    })
  }).then(() => { })
  .catch((err) => {throw err})
  
  // Parallelize tasks
  Promise.all([
     promise1, promise2, promise3
  ]).then(() => {
     // all tasks are finished
  })

  // array destructuring
  let [a,b,c,d] = [1,2,3,4]

  let luke = {  occupation: 'jedi',
  father: 'anakin' }
 let {occupation, father} = luke