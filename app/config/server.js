module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env.int('PUBLIC_URL', 'http://ec2-54-253-24-125.ap-southeast-2.compute.amazonaws.com'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1bb4ad9372b82e2ae4636ec54e950ebc'),
    },
  },
});
