import { useState } from 'react';

import { Arg, GraphQLSchemaJsToTS, Type2 } from '@types';

import styles from './graphQL.module.css';

interface GraphQlSchemaContentProps {
  schema: GraphQLSchemaJsToTS;
}
interface graphType {
  name: string;
  result: string[];
}

interface QueryState {
  args: Arg[];
  name: string;
}

const GraphQlSchemaContent = ({ schema }: GraphQlSchemaContentProps) => {
  const [layers, setLayers] = useState<Arg[][]>([]);
  const [typeName, setTypeName] = useState<string[]>([]);
  const [query, setQuery] = useState<QueryState[]>([]);
  const resultingTypes = schema.__schema.types;

  console.log(schema);

  const firstLayer = resultingTypes.find(({ name }) => name === 'Query');

  const functionOfType = (obj: Type2, res: string[]): graphType => {
    const resultArr = [...res, obj.kind];
    if (obj.name) {
      return { name: obj.name, result: resultArr };
    } else {
      const { name, result } = functionOfType(obj.ofType!, resultArr);
      return {
        name,
        result,
      };
    }
  };
  const getFullType = (obj: Arg) => {
    if (obj.type.name) {
      return { name: obj.type.name };
    } else {
      const { name, result } = functionOfType(obj.type.ofType!, [obj.type.kind]);
      return {
        name,
        result,
      };
    }
  };

  const getFullTypeWithMarks = (obj: Arg, layer = -1) => {
    const { name, result } = getFullType(obj);
    let finalResult = `${name}`;
    let isDisabled = false;
    result?.forEach((el) => {
      if (el === 'LIST') {
        finalResult = `[${finalResult}]`;
      }
      if (el === 'NON_NULL') {
        finalResult = `${finalResult}!`;
      }
    });

    if (
      (name.match(/String/i) && !name.match(/StringQuery/i)) ||
      name.match(/Boolean/i) ||
      name.match(/ID/)
    ) {
      isDisabled = true;
    }
    return (
      <button
        key={name}
        disabled={isDisabled}
        onClick={() => {
          showNextLayerHandler(name, layer, obj.name);
        }}
      >
        {finalResult}
      </button>
    );
  };

  const showNextLayerHandler = (value: string, layer: number, valName: string) => {
    const finalResult = resultingTypes.find(({ name }) => name === value);
    if (finalResult?.fields) {
      setLayers((prev) => [
        ...prev.filter((_, index) => index <= layer),
        finalResult.fields as Arg[],
      ]);
    }
    if (finalResult?.inputFields) {
      setLayers((prev) => [
        ...prev.filter((_, index) => index <= layer),
        finalResult.inputFields as Arg[],
      ]);
    }
    setTypeName((prev) => [...prev.filter((_, index) => index <= layer), value]);
    if (layer === -1) {
      const queryType = resultingTypes.find(({ name }) => name === 'Query');
      const queryName = queryType?.fields?.find(({ name }) => name === valName);
      setQuery([{ name: queryName?.name || '', args: queryName?.args || [] }]);
    }
  };

  console.log(schema.__schema);

  return (
    <section className={styles.flex}>
      <div>
        {firstLayer?.fields?.map((el) => {
          return (
            <div key={el.name}>
              {el.name} type: {getFullTypeWithMarks(el as Arg)}
            </div>
          );
        })}
      </div>
      <div className={styles.flex}>
        {layers.length > 0 &&
          layers.map((el, index) => {
            return (
              <div key={index}>
                {query[index] && (
                  <div>
                    {query[index].name} &#123; args:
                    {query[index].args.map((el) => getFullTypeWithMarks(el, index))}
                    &#125;
                  </div>
                )}
                {typeName[index]} &#123;
                {el.map((elem) => {
                  return (
                    <div key={elem.name}>
                      {elem.name} type: {getFullTypeWithMarks(elem, index)}
                    </div>
                  );
                })}
                &#125;
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default GraphQlSchemaContent;
