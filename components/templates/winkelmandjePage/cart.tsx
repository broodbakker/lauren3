import { Box, Button, Center, Flex, Heading, Stack } from '@chakra-ui/react';
import Link from 'next/link';
//components
import { CartOrderSummary } from './cartorderSummary';
import { CartProduct } from './cartProduct';
//hooks
import { ROUTES } from '../../../util/constants';
import { usePayment } from '../../../util/hooks/usePayment';

export const Cart = () => {
  const { cart } = usePayment();

  const { handleCheckout, loading, errorMessage } = usePayment();

  return (
    <CartView
      cart={cart}
      handleCheckout={handleCheckout}
      loading={loading}
      errorMessage={errorMessage}
    />
  );
};

interface ICartView {
  cart: any;
  handleCheckout: React.FormEventHandler<HTMLFormElement>;
  loading: boolean;
  errorMessage: string;
}

export const CartView = ({
  cart,
  handleCheckout,
  loading,
  errorMessage,
}: ICartView) => (
  <Box
    maxW={{ base: '3xl', lg: '7xl' }}
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <Stack direction={{ base: 'column' }} spacing={{ base: '8', md: '16' }}>
      <Stack spacing={{ base: '8', md: '10' }} flex="2">
        {cart.cartCount === 0 ? (
          <Stack align={'center'}>
            <Heading fontSize="2xl" fontWeight="extrabold" mb="4">
              Op dit moment heb je geen producten in je winkelmandje
            </Heading>

            <Link href={ROUTES.winkelmand.href}>
              <a>
                <Button colorScheme="blue" size="lg" fontSize="md">
                  Kijk in de rest van mijn winkel
                </Button>
              </a>
            </Link>
          </Stack>
        ) : (
          <Heading fontSize="2xl" fontWeight="extrabold">
            Jouw winkelmandje
          </Heading>
        )}

        <Stack spacing="6">
          {Object.keys(cart.cartDetails).map((keyName, i) => (
            <CartProduct
              key={i}
              {...cart.cartDetails[keyName]}
              setItemQuantity={cart.setItemQuantity}
              removeItem={cart.removeItem}
            />
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        {loading && (
          <Center
            border="1px"
            borderColor="purple.600"
            rounded="lg"
            bg="purple.50"
            p="2"
            w="full"
          >
            <Heading size="md"> loading</Heading>
          </Center>
        )}
        {errorMessage && (
          <Center
            border="1px"
            borderColor="purple.600"
            rounded="lg"
            bg="purple.50"
            p="2"
            w="full"
          >
            <Heading size="md"> {errorMessage}</Heading>
          </Center>
        )}

        {!loading &&
          !errorMessage &&
          cart.cartCount !== 0 &&(
              <CartOrderSummary
                total={cart.formattedTotalPrice}
                handleCheckout={handleCheckout}
              />
            )}
      </Flex>
    </Stack>
  </Box>
);
