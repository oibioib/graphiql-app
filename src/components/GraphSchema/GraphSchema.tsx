import { Suspense } from 'react';

import { GraphQlSchemaContent, Loader } from '@components';
import { SCHEMA_QUERY } from '@constants';
import { fetchData } from '@helpers';

const resource = fetchData(SCHEMA_QUERY.default);

const GraphSchema = () => {
  const schema = resource.read() as GraphQLSchemaJsToTS;

  return (
    <Suspense fallback={<Loader />}>
      <GraphQlSchemaContent schema={schema} />
    </Suspense>
  );
};

export default GraphSchema;
