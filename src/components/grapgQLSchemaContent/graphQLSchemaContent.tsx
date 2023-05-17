// import { useState } from 'react';
import { GraphQLSchemaJsToTS } from '@types';

// import { GraphQLObjectType } from 'graphql/type/definition';

interface GraphQlSchemaContentProps {
  schema: GraphQLSchemaJsToTS;
}
const GraphQlSchemaContent = ({ schema }: GraphQlSchemaContentProps) => {
  // const [layers, setLayers] = useState<GraphQLObjectType[]>([]);
  // const firstLayer = schema.find((el) => el.name === 'Query');
  console.log(schema.__schema.types);
  return <div>Content</div>;
};

export default GraphQlSchemaContent;
