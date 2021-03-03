import { useRouter } from "next/dist/client/router";
import { GlobalStore } from "~/store/global";

export const useUserDetail = () => {
  const { users } = GlobalStore.useContainer();
  const { query } = useRouter();
  const user = users
    ? users.find((elem) => elem.id === query.userId)
    : undefined;

  return { user };
};
