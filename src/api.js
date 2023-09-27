const apiUrl =
  "https://xgi2osoer8.execute-api.eu-west-2.amazonaws.com/team9test";

export const getListUsers = async () => {
    const dataSet = await fetch(`${apiUrl}/listUsers`);
    console.log('DATA', dataSet);
    const response = await dataSet.json();
    return await response;
};

export const getListAttributes = async () => {
  const dataSet = await fetch(`${apiUrl}/listAttributes`);
  const response = await dataSet.json();
  return await response;
};

export const getCountAttributes = async () => {
  const dataSet = await fetch(`${apiUrl}/countAttributesByUser`);
  const response = await dataSet.json();
  return await response;
};

export const getCountMentorStatus = async () => {
  const dataSet = await fetch(`${apiUrl}/countMentorStatus`);
  const response = await dataSet.json();
  return await response;
};
export const addUserAttributes = async (attributes) => {
  const url=`${apiUrl}/addUserAttributes?sn=1&attributes=${attributes.toString()}`
  console.log(url)
  try {
    const response = await fetch(url, {method: 'POST'})
    console.log(response)
    return await response;
  } catch (error) {
    console.error("Error", error);
  }
}


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
