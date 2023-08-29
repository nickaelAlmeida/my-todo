import { RefObject, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Container } from './styles';

interface InputProps extends TextInputProps {
  inputRef?: RefObject<TextInput>;
}

export function Input ({ inputRef, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container
      ref={inputRef}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...rest}
    />
  );
}
