import CompleteProduct from '../templates/productPage/completeProduct';

import Link from 'next/link';

import { useState } from 'react';
//hooks
//typescript
import { IProduct } from '../../typescript';

declare type ScrollBehavior = 'inside' | 'outside';

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

interface IModal {
  product: IProduct;
}

const NModal = ({ product }: IModal) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size] = useState('3xl');

  // const handleSizeClick = (newSize: any) => {
  //   setSize(newSize);
  //   onOpen();
  // };

  const handleGoToCart = (newSize: any) => {
    onClose();
  };

  const [scrollBehavior] = useState<ScrollBehavior>('outside');

  return (
    <>
      <Button
        bg="gray.700"
        fontSize="xs"
        fontWeight="bold"
        color="white"
        px={2}
        py={1}
        rounded="lg"
        onClick={onOpen}
        textTransform="uppercase"
        _hover={{
          bg: 'gray.700',
          _dark: {
            bg: 'gray.600',
          },
        }}
        _focus={{
          bg: 'gray.700',
          _dark: {
            bg: 'gray.600',
          },
          outline: 'none',
        }}
      >
        Bekijk product
      </Button>

      <Modal
        scrollBehavior={scrollBehavior}
        size={size}
        onClose={onClose}
        isOpen={isOpen}
      >
        <ModalOverlay />t
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <CompleteProduct product={product} />
          </ModalBody>
          <ModalFooter>
            <Stack direction={['column', 'row', 'row']}>
              <Link href="./winkelmandje">
                <a>
                  <Button colorScheme="purple" onClick={handleGoToCart}>
                    Ga door naar de kassa
                  </Button>
                </a>
              </Link>

              <Button onClick={onClose}>Ga door met shoppen</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NModal;
