import axios from "axios";

const finnhubKey = "cnarddhr01ql0f8afcf0cnarddhr01ql0f8afcfg";
const repositoryUrl = "https://api.github.com/repos/KaltsitsPie/personal-site-files/contents/";

const getAutoComplete = async (req, res) => {
  const symbol = req.query.symbol;
  const apiUrl = `https://finnhub.io/api/v1/search?q=${symbol}&token=${finnhubKey}`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

const getFiles = async (req, res) => {
    try {
        const response = await axios.get(repositoryUrl);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }

};

export {
  getAutoComplete,
  getFiles
};
