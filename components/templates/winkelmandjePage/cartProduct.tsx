import {
  CloseButton,
  Flex,
  Link,
  Select,
  SelectProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { CartProductContent } from './cartProductContent';

import { useRouter } from 'next/router';

type CartItemProps = {
  name: string;
  description: string;
  quantity: number;
  image: string;
  formattedValue: string;
  id: string;
  setItemQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
};

export const CartProduct = (props: CartItemProps) => {
  const {
    name,
    description,
    quantity,
    image,
    id,
    formattedValue,
    setItemQuantity,
    removeItem,
  } = props;

  const router = useRouter();

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align="center"
    >
      <CartProductContent name={name} description={description} image={image} />
      <Flex
        width="full"
        justify="space-between"
        display={{ base: 'none', md: 'flex' }}
      >
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            setItemQuantity(id, parseInt(e.target.value, 10));
            router.reload();
          }}
        />
        {formattedValue}
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={() => {
            removeItem(id);
            router.reload();
          }}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            setItemQuantity(id, parseInt(e.target.value, 10));
          }}
        />
        {formattedValue}
      </Flex>
    </Flex>
  );
};

const QuantitySelect = (props: SelectProps) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </Select>
  );
};
