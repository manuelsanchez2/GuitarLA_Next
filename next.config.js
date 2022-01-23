module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    backendURL: process.env.API_URL,
    frontendURL: "https://guitars-blog.netlify.app/",
  },
};
