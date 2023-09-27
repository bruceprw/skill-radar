const apiUrl =
  "https://xgi2osoer8.execute-api.eu-west-2.amazonaws.com/team9test";

export const getListUsers = async () => {
    const dataSet = await fetch(`${apiUrl}/listUsers`);
    const response = await dataSet.json();
    return await response;
};

/*export const addUsers = () => {

    fetch(`${apiUrl}/listUsers`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
       /* setUserList(data);
        setTimeout(function () {
          setIsLoading(false);
        }, 1000);
        return data;
      });
  }*/
