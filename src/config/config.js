const prod = {
  url: {
    API_URL: 'https://jsonplaceholder.typicode.com',
  },
};

const dev = {
  url: {
    API_URL: 'https://jsonplaceholder.typicode.com',
  },
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
