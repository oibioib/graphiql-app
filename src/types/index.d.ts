type AppLanguage = 'en' | 'ru';

interface GraphQLSchemaJsToTS {
  __schema: Schema;
}

interface Schema {
  queryType: QueryType;
  types: Type[];
  directives: Direc[];
}

interface QueryType {
  name: string;
}

interface Type {
  kind: string;
  name: string;
  fields?: Field[];
  inputFields?: InputField[];
  enumValues?: EnumValue[];
}

interface Field {
  name: string;
  args: Arg[];
  type: Type3;
  isDeprecated: boolean;
}

type Arg = {
  name: string;
  type: Type2;
  defaultValue?: string;
};

interface Type2 {
  kind: string;
  name?: string;
  ofType?: OfType;
}

interface OfType {
  kind: string;
  name: string;
}

interface Type3 {
  kind: string;
  name?: string;
  ofType?: OfType2;
}

interface OfType2 {
  kind: string;
  name?: string;
  ofType?: OfType3;
}

interface OfType3 {
  kind: string;
  name?: string;
  ofType?: OfType4;
}

interface OfType4 {
  kind: string;
  name: string;
}

interface InputField {
  name: string;
  type: Type4;
}

interface Type4 {
  kind: string;
  name?: string;
  ofType?: OfType5;
}

interface OfType5 {
  kind: string;
  name?: string;
  ofType: OfType6;
}

interface OfType6 {
  kind: string;
  name: string;
}

interface EnumValue {
  name: string;
  isDeprecated: boolean;
}

interface Direc {
  name: string;
  locations: string[];
  args: Arg2[];
}

interface Arg2 {
  name: string;
  type: Type5;
  defaultValue?: string;
}

interface Type5 {
  kind: string;
  name?: string;
  ofType?: OfType7;
}

interface OfType7 {
  kind: string;
  name: string;
}
