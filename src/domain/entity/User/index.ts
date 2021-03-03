import { Property } from "../Propertry";

export interface User {
  id: string;
  name: string;
  age: number;
  mail: string;
  properties: Property[];
}
