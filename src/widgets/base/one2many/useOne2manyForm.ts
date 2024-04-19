import { useState } from "react";

export const useOne2manyForm = () => {
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);

  return {
    formHasChanges,
    setFormHasChanges,
  };
};
