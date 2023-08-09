import axios from "axios";

const URL = "https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev";

export async function fetchData() {
  const result = axios.get(URL);

  return result;
}
