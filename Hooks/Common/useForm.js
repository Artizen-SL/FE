import { useCallback, useState } from "react";

const useForm = (initialValue) => {
  const [state, setState] = useState(initialValue);

  //   const getValue = useCallback((text) => {
  //     return text;
  //   });

  const onChangeText = useCallback((name, text) => {
    setState((pre) => ({
      ...pre,
      [name]: text,
    }));
  });

  return [state, onChangeText, setState];
};

export default useForm;
