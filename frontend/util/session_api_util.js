export async function signup(user) {
  try {
    let response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });
    let responseJson = await response.json();
    return responseJson;
  } catch(error) {
    return error.json();
  }
}

// export function signup(user) {
//    return fetch('http://localhost:3000/api/users', {
//      method: 'POST',
//      headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//      },
//      body: JSON.stringify(user)
//    })
//     .then(res => res.json())
//     .catch( err => err.json())
//  }


export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
