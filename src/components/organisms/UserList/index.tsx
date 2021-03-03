import { useUserList } from "~/store/organisms/UserList";
import Link from "next/link";

export const UserList: React.FC = () => {
  const { users } = useUserList();

  return (
    <div>
      {!!users &&
        users.map((elem) => (
          <Link key={elem.id} href={`user/${elem.id}`}>
            <a>{elem.name}</a>
          </Link>
        ))}
    </div>
  );
};
