import { ViewType } from ".";

export type ValuesType = Record<string, unknown>;

export type ContextType = ValuesType;

export type Context = {
  context: ContextType;
};

export type DomainType = any[];

export type Domain = {
  domain: DomainType;
};

export type ModelType = string;

export type Model = {
  model: ModelType;
};

export type ActionTarget = "current" | unknown;

export type ViewTuple = [number, ViewType];
