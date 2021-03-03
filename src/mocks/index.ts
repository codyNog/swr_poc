import { Property } from "~/domain/entity/Propertry";
import { User } from "~/domain/entity/User";

const property: Property = {
  id: "foo",
  name: "bar",
  address: "fizz",
  value: 1000
};

const properties = [property];

const user: User = {
  id: "hoge",
  name: "fuga",
  age: 20,
  mail: "example@com",
  properties
};

const users: User[] = [user];

export const mock = {
  property,
  properties,
  user,
  users
};
