const BASEURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const ID = 'b9VJB998nwdjA0GpnH85';

export const createComment = async (data) => {
  const response = await fetch(
    `${BASEURL}/apps/${ID}/comments`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: data.mealId,
        username: data.username,
        comment: data.comment,
      }),
    },
  );
  if (response.status === 201) {
    const date = new Date();
    const res = {
      username: data.username,
      comment: data.comment,
      creation_date: date.toISOString().split('T')[0],
    };
    return res;
  }
  return response.json();
};

export const getComment = async (itemId) => {
  const response = await fetch(
    `${BASEURL}/apps/${ID}/comments?item_id=${itemId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  if (response.status === 404) {
    return [];
  }
  return response.json();
};
