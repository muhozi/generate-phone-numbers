const cryptoMock = {
  getRandomValues: () => [0, 1, 2],
};
global.crypto = cryptoMock;
