export const selectAllUsers = ( users ) => {
  const usersArray = Object.keys(users.entities).map( (id)=>{
    return users.entities[id];
  });
  return usersArray;
}
