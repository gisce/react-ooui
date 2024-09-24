import { useEffect } from "react";
import { usePrevious } from "./usePrevious";

const useEffectDebugger = (
  effectHook: any,
  dependencies: any,
  dependencyNames = [],
) => {
  const previousDeps = usePrevious(dependencies, []);

  const changedDeps = dependencies.reduce(
    (accum: any, dependency: any, index: any) => {
      if (dependency !== previousDeps[index]) {
        const keyName = dependencyNames[index] || index;
        return {
          ...accum,
          [keyName]: {
            before: previousDeps[index],
            after: dependency,
          },
        };
      }

      return accum;
    },
    {},
  );

  if (Object.keys(changedDeps).length) {
    console.log("[use-effect-debugger] ", changedDeps);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effectHook, dependencies);
};

export { useEffectDebugger };
