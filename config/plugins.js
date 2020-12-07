module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME','dnrvhlddk'),
      api_key: env('CLOUDINARY_KEY','745536962636175'),
      api_secret: env('CLOUDINARY_SECRET','-XV6DpQjrmEbeourbqmSq_5EFnI'),
    },
  },
  // ...
});
