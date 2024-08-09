import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://localhost:8081/";

// console.log("axios default url: " + axios.defaults.baseURL);

export async function apiGetFiles() {
  const repositoryUrl = "https://api.github.com/repos/KaltsitsPie/personal-site-files/contents/";

    try {
        const response = await axios.get(repositoryUrl);
        let data = response.data;
        data = data.filter(item => item.name.endsWith("-yanchen.md"));
        console.log("^^^^", data);
        return data;
    } catch (error) {
        console.error("Failed to apiGetFiles", error);
        return "# Network error, please try again Later:( ";
      }
}

export async function apiLoadMarkdown(url) {
  
  try {
    const response = await axios.get(url, { headers: { 'Accept': 'application/vnd.github.v3.raw' } });
    return response.data;
  } catch (error) {
    console.error("Failed to apiLoadMarkdown", error);
    return "# Loading... ";
  }
}
