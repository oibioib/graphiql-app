function wrapPromise(promise: Promise<GraphQLSchemaJsToTS>) {
  let status = 'pending';
  let response: GraphQLSchemaJsToTS | Error;

  const suspender = promise.then(
    (res: GraphQLSchemaJsToTS) => {
      status = 'success';
      response = res;
    },
    (err: Error) => {
      status = 'error';
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };

  return { read };
}

export default wrapPromise;
