let settings = () => {
  let settings;

  switch (document.location.hostname) {
    case "my-testing-app.com":
      settings = {
        api: {
          mock: "http://demo8708075.mockable.io/"
        }
      };
      break;
    default:
      settings = {
        api: {
          mock: "http://demo8708075.mockable.io/"
        }
      };
  }
  return settings;
};

export default settings();
