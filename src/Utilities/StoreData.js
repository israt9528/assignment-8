const getStoredData = () => {
  const storedData = localStorage.getItem("ListedId");
  if (storedData) return JSON.parse(storedData);
  else return [];
};

const addToLS = (id) => {
  const storedData = getStoredData();
  if (storedData.includes(id)) alert("Id already exist");
  else storedData.push(id);
  const data = JSON.stringify(storedData);
  localStorage.setItem("ListedId", data);
};

export { addToLS, getStoredData };
