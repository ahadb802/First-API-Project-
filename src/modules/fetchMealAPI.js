const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const fetchMealAPI = async () => {
  const response = await fetch(
    URL,
    {
      method: 'GET',
    },
  );
  const data = response.json();
  const res = await data.then((res) => res.meals);
  return res;
};

export const fetchSingleMealAPI = async (id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    {
      method: 'GET',
    },
  );
  const data = response.json();
  const res = await data.then((res) => res.meals);
  return res;
};

export default fetchMealAPI;
