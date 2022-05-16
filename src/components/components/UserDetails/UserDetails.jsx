import { useSelector } from "react-redux";

export const UserDetails = () => {
  const user = useSelector((state) => {
    return state.user.user;
  });

  console.log(user);

  return (
    <div>
      {user ? (
        <div>
          <img width="250px" height="250px" alt="" src={user.data.avatar_url} />
          {user.data.name ? <div>{user.data.name}</div> : <div>Unknown</div>}
          <a href={user.data.html_url} target="_blank" rel="noreferrer">
            {user.data.login}
          </a>
          <div>Followers: {user.data.followers}</div>
          <div>Following: {user.data.following}</div>
        </div>
      ) : (
        <div>No such user</div>
      )}
    </div>
  );
};
