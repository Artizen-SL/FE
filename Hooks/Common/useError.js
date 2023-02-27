import { useState } from "react";

const useError = (initialState) => {
  const [isError, setIsError] = useState(initialState);

  const setError = (target, value) => {
    setIsError((pre) => ({ ...pre, [target]: value }));
    return value;
  };

  return [isError, setError];
};

export default useError;
