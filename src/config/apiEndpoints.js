import Settings from "./settings";

export const API_ENDPOINTS = {
  getProducts: `${Settings.api.mock}/products`,
  getCategories: `${Settings.api.mock}/category`,

  formatUrl: function(url, ...args) {
    return url.replace(/{(\d+)}/g, function(match, number) {
      return args[number] ? args[number] : match;
    });
  },

  setQueryParams: function(url, params) {
    if (params) {
      let queryParams = Object.keys(params)
        .map(key => {
          return `${key}=${encodeURIComponent(params[key])}`;
        })
        .join("&");

      return url.indexOf("?") === -1
        ? `${url}?${queryParams}`
        : `${url}&${queryParams}`;
    }

    return url;
  }
};
