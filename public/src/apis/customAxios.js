const URL = process.env.SERVER_URL;

const axios = {
  async post(path, data) {
    const response = await fetch(`${URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    return response;
  },

  async get(path) {
    const response = await fetch(`${URL}${path}`);
    const result = response.json();

    return result;
  },
};

export default axios;
