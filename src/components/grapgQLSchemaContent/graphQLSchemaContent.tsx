import { useState } from 'react';

import { GraphQLSchemaJsToTS } from '@types';
import { GraphQLObjectType } from 'graphql/type/definition';

import styles from './graphQL.module.css';

interface GraphQlSchemaContentProps {
  schema: GraphQLSchemaJsToTS;
}
interface graphType {
  name: string;
  result: string[];
}

interface QueryState {
  args: GraphQLObjectType[];
  name: string;
}

const GraphQlSchemaContent = ({ schema }: GraphQlSchemaContentProps) => {
  const [layers, setLayers] = useState<GraphQLObjectType[][]>([]);
  const [typeName, setTypeName] = useState<string[]>([]);
  const [query, setQuery] = useState<QueryState[]>([]);
  const resultingTypes = schema.__schema.types;

  const firstLayer = resultingTypes.find((el: GraphQLObjectType) => el.name === 'Query');

  const functionOfType = (obj: GraphQLObjectType, res: string[]): graphType => {
    const resultArr = [...res, obj.kind];
    if (obj.name) {
      return { name: obj.name, result: resultArr };
    } else {
      const { name, result } = functionOfType(obj.ofType, resultArr);
      return {
        name,
        result,
      };
    }
  };
  const getFullType = (obj: GraphQLObjectType) => {
    if (obj.type.name) {
      return { name: obj.type.name };
    } else {
      const { name, result } = functionOfType(obj.type.ofType, [obj.type.kind]);
      return {
        name,
        result,
      };
    }
  };

  const getFullTypeWithMarks = (obj: GraphQLObjectType, layer = -1) => {
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

  const showNextLayerHandler = (value: string, layer: number, name: string) => {
    const finalResult = resultingTypes.find((el: GraphQLObjectType) => el.name === value);
    if (finalResult.fields) {
      setLayers((prev) => [...prev.filter((_, index) => index <= layer), finalResult.fields]);
    }
    if (finalResult.inputFields) {
      setLayers((prev) => [...prev.filter((_, index) => index <= layer), finalResult.inputFields]);
    }
    setTypeName((prev) => [...prev.filter((_, index) => index <= layer), value]);
    if (layer === -1) {
      const queryType = resultingTypes.find((el: GraphQLObjectType) => el.name === 'Query');
      const queryName = queryType.fields.find((el: GraphQLObjectType) => el.name === name);
      setQuery([{ name: queryName.name, args: queryName.args }]);
    }
  };

  console.log(schema.__schema);

  return (
    <section className={styles.flex}>
      <div>
        {firstLayer.fields.map((el: GraphQLObjectType) => {
          return (
            <div key={el.name}>
              {el.name} type: {getFullTypeWithMarks(el)}
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
