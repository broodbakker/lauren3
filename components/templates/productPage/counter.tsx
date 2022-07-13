import { Dispatch, SetStateAction, useEffect } from 'react';

//hooks
// import { usePayment } from '../util/hooks/usePayment';
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
//functions
interface ICounter {
  setAmount: Dispatch<SetStateAction<number>>;
}

function Counter({ setAmount }: ICounter) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 20,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  useEffect(() => {
    const value = input['aria-valuetext'] as string;
    setAmount(parseInt(value));
  }, [input, setAmount]);

  return (
    <HStack maxW="320px">
      <Button {...inc}>+</Button>=
      <Input {...input} w="4rem" size="lg" />
      <Button {...dec}>-</Button>
    </HStack>
  );
}

export default Counter;
