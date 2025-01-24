import next from 'next';
const { NextConfig } = next;

const config = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
           
            pathname: '**',
            
          },
        ],
      },
};

export default config;