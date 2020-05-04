/* eslint-disable */
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const path = require("path");

module.exports = withCSS(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      // localIdentName: "[name]__[local]",
      getLocalIdent: (loaderContext, localIdentName, localName, options) => {
        const fileName = path.basename(loaderContext.resourcePath);
        if (fileName.indexOf(".module") !== -1) {
          const name = fileName.replace(/[\.]/g, "");
          return `${name}__${localName}`;
        } else {
          return localName;
        }
      },
    },
    poweredByHeader: false,
    env: {
      apiUrl: "https://api.xn--sdermalmsskolan-8sb.com",
      adsenseClient: "ca-pub-1944185766034883",
      adsenseSlot: "6292868735",
    },
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.externals = ["tls", "net", "fs"];
      }

      return config;
    },
  })
);
