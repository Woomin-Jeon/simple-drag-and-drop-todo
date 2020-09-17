const axios = {
  async post(url, data) {
    const response = await fetch(`http://localhost:3000${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    return response;
  },

  async get(url) {
    const response = await fetch(`http://localhost:3000${url}`);
    const result = response.json();

    return result;
  },
};

export default axios;
