import { useState } from 'react';

import { Box, Button, Flex } from '@mantine/core';

import useStyles from './GraphQlSchemaContent.styles';

interface GraphQlSchemaContentProps {
  schema: GraphQLSchemaJsToTS;
}

interface GraphType {
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

  const firstLayer = resultingTypes.find(({ name }) => name === 'Query');

  const { classes, cx } = useStyles();

  const functionOfType = (obj: Type2, res: string[]): GraphType => {
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

    if (isDisabled)
      return (
        <Box component="span" key={name} className={classes.disabled}>
          {finalResult}
        </Box>
      );

    return (
      <Button
        variant="outline"
        compact
        key={name}
        onClick={() => {
          showNextLayerHandler(name, layer, obj.name);
        }}
      >
        {finalResult}
      </Button>
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

  return (
    <Flex className={classes.container}>
      <Box className={classes.element}>
        {firstLayer?.fields?.map((el) => {
          return (
            <Box key={el.name} py={2}>
              {el.name} type: {getFullTypeWithMarks(el as Arg)}
            </Box>
          );
        })}
      </Box>
      {layers.length > 0 &&
        layers.map((el, index) => {
          return (
            <Box className={classes.element} key={index}>
              {query[index] && (
                <Box>
                  {query[index].name}
                  <Box component="span" className={cx(classes.args, classes.bracket_before)}>
                    args:
                  </Box>
                  {query[index].args.map((el) => getFullTypeWithMarks(el, index))}
                  <Box component="span" className={classes.bracket_after} />
                </Box>
              )}
              <Box component="span" className={cx(classes.args, classes.bracket_after_open)}>
                {typeName[index]}
              </Box>
              {el.map((elem) => {
                return (
                  <Box className={classes.indent_element} key={elem.name}>
                    {elem.name} type: {getFullTypeWithMarks(elem, index)}
                  </Box>
                );
              })}
              <Box component="span" className={classes.bracket_after_close} pl={0} />
            </Box>
          );
        })}
    </Flex>
  );
};

export default GraphQlSchemaContent;
