export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    badgesConfig: {
      beta: {
        styles: {
          backgroundColor: '#FFF',
          borderColor: 'rgba(1, 135, 134, 1)',
          color: '#018786',
        },
        title: 'Beta',
      },
      deprecated: {
        styles: {
          backgroundColor: '#FFF',
          borderColor: '#6200EE',
          color: '#6200EE',
        },
        title: 'Deprecated',
      },
    },
  },
}