import Link from 'next/link';
//hooks
import { chakra, IconButton } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
//hooks
import { usePayment } from '../../util/hooks/usePayment';

export const CartButton = () => {
  const { count } = usePayment();

  const cartCount = count === undefined ? 0 : count;

  const handleDisabled = count === 0;

  return (
    <Link href="/winkelmandje">
      <a>
        <CartButtonView handleDisabled={handleDisabled} cartCount={cartCount} />
      </a>
    </Link>
  );
};

interface ICartButtonView {
  handleDisabled: boolean;
  cartCount: number;
}
export const CartButtonView = ({
  handleDisabled,
  cartCount,
}: ICartButtonView) => {
  return (
    <IconButton
      aria-label="cartButton"
      size="md"
      isRound
      ml={8}
      bg="purple.50"
      disabled={handleDisabled}
      icon={
        <>
          <AiOutlineShoppingCart />
          <chakra.span
            pos="absolute"
            top="-1px"
            right="-1px"
            px={2}
            py={1}
            fontSize="xs"
            fontWeight="bold"
            lineHeight="none"
            color="red.100"
            transform="translate(50%,-50%)"
            bg="red.600"
            rounded="full"
          >
            {cartCount}
          </chakra.span>
        </>
      }
    />
  );
};
