/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/llm-aggrefact' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/llm-aggrefact' : '',
};
