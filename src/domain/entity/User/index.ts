import { Property } from "~/domain/entity/Propertry";

export interface User {
  id: string;
  name: string;
  age: number;
  mail: string;
  properties: Property[];
}
