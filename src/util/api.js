const BASE_URL = 'http://localhost:3008/dataArticles'

class API {

  async getArticles() {
		const response = await fetch(BASE_URL);
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		const data = response.json();
		return data;
	}
}

export default new API();