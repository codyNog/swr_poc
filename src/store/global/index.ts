import useSWR from "swr";
import { createContainer } from "unstated-next";
import { mock } from "~/mocks";

const fetchUser = async () => {
  return await mock.user;
};

const fetchUsers = async () => {
  return await mock.users;
};

const useGlobal = () => {
  const { data: user } = useSWR("fetchUser", fetchUser);
  const { data: users } = useSWR("fetchUsers", fetchUsers);

  return { user, users };
};

export const GlobalStore = createContainer(useGlobal);
