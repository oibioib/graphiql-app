export type AppLanguage = 'EN' | 'RU';

export interface GraphQLSchemaJsToTS {
  __schema: Schema;
}

export interface Schema {
  queryType: QueryType;
  types: Type[];
  directives: Direc[];
}

export interface QueryType {
  name: string;
}

export interface Type {
  kind: string;
  name: string;
  fields?: Field[];
  inputFields?: InputField[];
  enumValues?: EnumValue[];
}

export interface Field {
  name: string;
  args: Arg[];
  type: Type3;
  isDeprecated: boolean;
}

export interface Arg {
  name: string;
  type: Type2;
  defaultValue?: string;
}

export interface Type2 {
  kind: string;
  name?: string;
  ofType?: OfType;
}

export interface OfType {
  kind: string;
  name: string;
}

export interface Type3 {
  kind: string;
  name?: string;
  ofType?: OfType2;
}

export interface OfType2 {
  kind: string;
  name?: string;
  ofType?: OfType3;
}

export interface OfType3 {
  kind: string;
  name?: string;
  ofType?: OfType4;
}

export interface OfType4 {
  kind: string;
  name: string;
}

export interface InputField {
  name: string;
  type: Type4;
}

export interface Type4 {
  kind: string;
  name?: string;
  ofType?: OfType5;
}

export interface OfType5 {
  kind: string;
  name?: string;
  ofType: OfType6;
}

export interface OfType6 {
  kind: string;
  name: string;
}

export interface EnumValue {
  name: string;
  isDeprecated: boolean;
}

export interface Direc {
  name: string;
  locations: string[];
  args: Arg2[];
}

export interface Arg2 {
  name: string;
  type: Type5;
  defaultValue?: string;
}

export interface Type5 {
  kind: string;
  name?: string;
  ofType?: OfType7;
}

export interface OfType7 {
  kind: string;
  name: string;
}
