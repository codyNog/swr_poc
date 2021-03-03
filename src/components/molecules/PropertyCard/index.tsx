import { Property } from "~/domain/entity/Propertry";

interface Props {
  property: Property;
}

export const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div key={property.id}>
      <h2>{property.name}</h2>
      <p>{property.address}</p>
      <p>{property.value}</p>
    </div>
  );
};
