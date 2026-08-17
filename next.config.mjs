import nextra from 'nextra';

const withNextra = nextra({
  contentDirBasePath: '/',
});

export default withNextra({
  images: {
    // Images are delivered by the existing CDN/origin, without Vercel transforms.
    unoptimized: true,
  },
  reactStrictMode: true,
});
