import { PropertyCard } from "~/components/molecules/PropertyCard";
import { useUserDetail } from "~/store/organisms/UserDetail";

interface Props {
  // id: string
}

export const UserDetail: React.FC<Props> = () => {
  const { user } = useUserDetail();

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <p>{user.mail}</p>
      {user.properties.map((elem) => {
        return <PropertyCard key={elem.id} property={elem} />;
      })}
    </div>
  );
};
