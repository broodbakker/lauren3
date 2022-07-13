import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

import {
  Pagination as Pag,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  PaginationSeparator,
  usePagination,
} from '@ajna/pagination';
import { ChakraProvider, Stack, Text } from '@chakra-ui/react';
//constants
import { NUMBER_OF_PRODUCTS_PER_PAGE } from '../../util/constants';

interface IPagination {
  category: string;
  children: ReactNode;
  amountOfProducts: number;
}

const Pagination = ({ category, children, amountOfProducts }: IPagination) => {
  const router = useRouter();
  // constants
  const outerLimit = 2;
  const innerLimit = 2;

  const {
    pages,
    pagesCount,
    offset,
    currentPage,
    setCurrentPage,
    isDisabled,
    pageSize,
  } = usePagination({
    total: amountOfProducts,
    limits: {
      outer: outerLimit,
      inner: innerLimit,
    },
    initialState: {
      pageSize: NUMBER_OF_PRODUCTS_PER_PAGE,
      isDisabled: false,
      currentPage: 1,
    },
  });
  useEffect(() => {}, [currentPage, pageSize, offset]);

  // handlers
  const handlePageChange = (nextPage: number): void => {
    setCurrentPage(nextPage);
    router.push(`/winkel/${category}/${nextPage}`);
  };

  return (
    <PaginationView
      handlePageChange={handlePageChange}
      pagesCount={pagesCount}
      currentPage={currentPage}
      isDisabled={isDisabled}
      pages={pages}
    >
      {children}
    </PaginationView>
  );
};

interface IPaginationView {
  pagesCount: number;
  currentPage: number;
  isDisabled: boolean;
  handlePageChange: (page: number) => void;
  pages: number[];
  children: ReactNode;
}

const PaginationView = ({
  children,
  pagesCount,
  currentPage,
  isDisabled,
  handlePageChange,
  pages,
}: IPaginationView) => {
  return (
    <ChakraProvider>
      <Stack>
        <Pag
          pagesCount={pagesCount}
          currentPage={currentPage}
          isDisabled={isDisabled}
          onPageChange={handlePageChange}
        >
          <>
            {children}

            <PaginationContainer align="center" justify="center" p={4} w="full">
              <PaginationPrevious
                _hover={{
                  bg: 'purple.100',
                }}
                bg="purple.200"
                borderRadius="0"
                borderLeftRadius="4"
              >
                <Text>Previous</Text>
              </PaginationPrevious>
              <PaginationPageGroup
                isInline
                align="center"
                separator={
                  <PaginationSeparator
                    bg="blue.300"
                    fontSize="sm"
                    w={7}
                    jumpSize={11}
                  />
                }
              >
                {pages.map((page: number) => (
                  <PaginationPage
                    w={7}
                    color="white"
                    bg="purple.500"
                    key={`pagination_page_${page}`}
                    page={page}
                    fontSize="sm"
                    _hover={{
                      bg: 'purple.300',
                    }}
                    borderRadius="2"
                    _current={{
                      bg: 'purple.300',
                      fontSize: 'sm',
                      w: 7,
                    }}
                  />
                ))}
              </PaginationPageGroup>
              <PaginationNext
                _hover={{
                  bg: 'purple.200',
                }}
                bg="purple.100"
                borderRadius="0"
                borderRightRadius="4"
              >
                <Text>Next</Text>
              </PaginationNext>
            </PaginationContainer>
          </>
        </Pag>
      </Stack>
    </ChakraProvider>
  );
};

export default Pagination;
