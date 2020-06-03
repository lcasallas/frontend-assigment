import { useState } from 'react';

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => setValue(event.target.value);

  return { value, setValue, onChange };
};

export default useInputValue;
