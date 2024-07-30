export const fetchData = async (url) => {
  try {
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })

    return data.ok ? [null, await data.json()] : [`Ошибка при запросе: ${data.status}`, null];
  } catch (error) {
    console.log('Ошибка при запросе:', error);
    return [error, null]
  }
};

export const stringToCharCode = (string) => {
  return [...string].map((char) => char.charCodeAt(0)).join('');
};
