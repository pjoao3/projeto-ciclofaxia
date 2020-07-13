import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';



export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  console.log(inputRef.current);
  
  useEffect(() => {
      registerField({
          name:fieldName,
          ref:inputRef.current,
          path:'value'
      })
  }, [fieldName, registerField]);
  
  
  return(
    <input ref={inputRef} {...rest} />
  );
}


