"use client";

import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";

const QueryClientProvider = ({ children }) => {
  const queryClient = new QueryClient();

  return <Provider client={queryClient}>{children}</Provider>;
};

export default QueryClientProvider;
