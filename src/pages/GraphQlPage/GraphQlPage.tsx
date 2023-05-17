import { Suspense } from 'react';

import { Loader } from '@components';
import GraphSchema from '@components/graphSchema/GraphSchema';

import styles from './GraphQLPage.module.css';

const GraphQlPage = () => {
  return (
    <section className={styles.container}>
      <h1>GraphQl editor</h1>
      <aside className={styles.schema_container}>
        <Suspense fallback={<Loader />}>
          <GraphSchema />
        </Suspense>
      </aside>
    </section>
  );
};

export default GraphQlPage;
