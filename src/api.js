const apiUrl =
  "https://xgi2osoer8.execute-api.eu-west-2.amazonaws.com/team9test";

export const getListUsers = async () => {
    const dataSet = await fetch(`${apiUrl}/listUsers`);
    const response = await dataSet.json();
    return await response;
};

export const getListAttributes = async () => {
  const dataSet = await fetch(`${apiUrl}/listAttributes`);
  const response = await dataSet.json();
  return await response;
};
