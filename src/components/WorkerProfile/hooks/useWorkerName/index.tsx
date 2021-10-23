import { useState, useCallback } from 'react';

interface ReturnType {
  name: string;
  isFocus: boolean;
  onFocus: (val: any) => void;
  onClear: () => void;
  onChange: (e: any) => void;
}

const useWorkerName = (): ReturnType => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const onFocus = useCallback((val) => setIsFocus(val), []);
  const onClear = useCallback(() => setName(''), []);
  const onChange = useCallback((e) => setName(e.target.value), []);

  return { name, isFocus, onFocus, onClear, onChange };
};

export default useWorkerName;
