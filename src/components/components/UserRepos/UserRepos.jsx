import { useSelector } from "react-redux";
import { Repository } from "../Repository/Repository";

export const UserRepos = () => {
  const repos = useSelector((state) => {
    return state.user.repos;
  });

  return (
    <ul className="">
      {repos ? (
        repos.data.map((repo) => {
          return <Repository key={repo.id} name={repo.name} />;
        })
      ) : (
        <div>No such repos</div>
      )}
    </ul>
  );
};
