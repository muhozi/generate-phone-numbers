const generateNumbers = () => {
  const randNumbers = crypto.getRandomValues(new Uint32Array(10000));
  const phoneNumbers = [];
  randNumbers.forEach(phone => {
    phoneNumbers.push(phone.toString(10));
  });
  return phoneNumbers;
};

export default generateNumbers;
