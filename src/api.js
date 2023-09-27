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


export const getListUsersByAttributes = async (attributes) => {
  try {
    const body = {
      "queryStringParameters": {
        "attribute": attributes,
        "isAll": 0
      }
    };
    const dataSet = await fetch(`${apiUrl}/listUsersByAttributes?attributes=${attributes.toString()}`, { method: 'POST'});

    if (!dataSet.ok) {
      throw new Error(`HTTP error ${dataSet.status}`);
    }
    const response = await dataSet.json();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
