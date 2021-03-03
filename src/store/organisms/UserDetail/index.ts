import { mock } from "~/mocks";

export const useUserDetail = () => {
  const user = mock.user;

  return { user };
};
