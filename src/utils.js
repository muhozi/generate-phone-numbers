const storePhoneNumbers = phoneNumbers => {
  if (localStorage.getItem('phoneNumbers') !== null) {
    localStorage.removeItem('phoneNumbers');
  }
  localStorage.setItem('phoneNumbers', JSON.stringify(phoneNumbers));
};

export const getPhoneNumbers = () => {
  try {
    const allPhoneNumbers = localStorage.getItem('phoneNumbers');
    if (allPhoneNumbers === null) {
      return [];
    }
    return JSON.parse(allPhoneNumbers);
  } catch (error) {
    return [];
  }
};
const generateNumbers = () => {
  const randNumbers = crypto.getRandomValues(new Uint32Array(10000));
  const phoneNumbers = [];
  randNumbers.forEach(phone => {
    phoneNumbers.push(phone.toString(10));
  });
  storePhoneNumbers(phoneNumbers);
  return phoneNumbers;
};

export default generateNumbers;
