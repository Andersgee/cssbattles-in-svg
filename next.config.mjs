// @ts-check
import { env } from "./src/env/server.mjs";
import { withPlausibleProxy } from "next-plausible";

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return withPlausibleProxy()(config);
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push(svgrconfig);
    return config;
  },

  // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});

/**
 * import .svg, using svg optimizers preset-default but with some overrides.
 *
 * @see https://github.com/svg/svgo/blob/main/README.md#built-in-plugins
 */
const svgrconfig = {
  test: /\.svg$/i,
  issuer: { and: [/\.(js|ts|md)x?$/] },
  use: [
    {
      loader: "@svgr/webpack",
      options: {
        //https://react-svgr.com/docs/options/
        svgo: true, //use svg Optimizer
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                //https://github.com/svg/svgo#default-preset
                //use preset-default but with some overrides
                overrides: {
                  cleanupIDs: false,
                  prefixIds: false,
                  removeTitle: false,
                },
              },
            },
          ],
        },
      },
    },
  ],
};
