/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export const generateResponse = (
  message: string,
  data: any,
  status?: string,
  error?: string,
  pagination?: {
    offset: number;
    limit: number;
    total: number;
  },
) => {
  const response = {
    message,
    data,
    status,
    error,
  };

  if (pagination) {
    return {
      ...response,
      pagination: {
        ...pagination,
        hasNext: pagination.total > pagination.offset + pagination.limit,
      },
    };
  }

  return response;
};
