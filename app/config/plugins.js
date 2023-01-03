module.exports = ({ env }) => ({
  upload: {
    // provider: 'wasabi',
    // providerOptions: {
    //   region: env('WASABI_REGION'),
    //   bucket: env('WASABI_BUCKET'),
    //   secret: env('WASABI_SECRET'),
    //   key: env('WASABI_KEY')
    // }
    breakpoints: {
      xlarge: 1920,
      large: 1000,
      medium: 750,
      small: 254,
      xsmall: 64,
    },
    // provider: "aws-s3",
    // providerOptions: {
    //   accessKeyId: env("AWS_ACCESS_KEY_ID"),
    //   secretAccessKey: env("AWS_ACCESS_SECRET"),
    //   region: env("AWS_REGION"),
    //   params: {
    //     Bucket: env("AWS_BUCKET"),
    //   },
    // },
  },
});
