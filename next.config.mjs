/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async rewrites() {
  //   return [
  //     {
  //         source: '/movie',
  //         destination: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`,
  //     },
  //   ];
  // }
};

export default nextConfig;
