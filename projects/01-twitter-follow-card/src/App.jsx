import "./assets/App.css";

import { TwitterFollowCard } from "./assets/TwitterFollowCard";
const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: false,
  },
  {
    userName: "pheralb",
    name: "Pablo Hernandez",
    isFollowing: true,
  },
  {
    userName: "Elon Musk",
    name: "Elon Musk",
    isFollowing: false,
  },
];
export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            name={name}
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          />
        );
      })}
    </section>
  );
}
