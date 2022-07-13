import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

type ICartOrderSummary = {
  total: string;
  handleCheckout: React.FormEventHandler<HTMLFormElement>;
};

export const CartOrderSummary = ({
  total,
  handleCheckout,
}: ICartOrderSummary) => {
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Je totale bestelling</Heading>

      <Stack spacing="6">
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Totaal
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {total}
          </Text>
        </Flex>
      </Stack>
      <form onSubmit={handleCheckout}>
        <Button
          type="submit"
          colorScheme="blue"
          size="lg"
          fontSize="md"
          rightIcon={<FaArrowRight />}
        >
          Checkout
        </Button>
      </form>
    </Stack>
  );
};
