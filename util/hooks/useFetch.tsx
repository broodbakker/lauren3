import useSWR from 'swr';

// mock the user api
const userFetcher = async () => {
  // sleep 500
  await new Promise((res) => setTimeout(res, 500));

  if (document.cookie.includes('swr-test-token=swr')) {
    // authorized
    return {
      name: 'Shu',
      avatar: 'https://github.com/shuding.png',
    };
  }

  // not authorized
  const error = new Error('Not authorized!');
  throw error;
};

export default function useUser() {
  const { data, mutate, error } = useSWR('./checkout', userFetcher);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}
