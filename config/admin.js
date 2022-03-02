module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'baaf62d083e1a76405f1c5e0186be9c2'),
  },
});
