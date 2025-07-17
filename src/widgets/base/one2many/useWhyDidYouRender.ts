import { useEffect, useRef } from "react";

export function useWhyDidYouRender(componentName: string, props: any) {
  const previousProps = useRef(props);

  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      const changesObj: Record<string, { old: any; new: any }> = {};
      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changesObj[key] = {
            old: previousProps.current[key],
            new: props[key],
          };
        }
      });

      if (Object.keys(changesObj).length) {
        console.log("[why-did-you-render]", componentName, changesObj);
      }
    }

    previousProps.current = props;
  });
}
