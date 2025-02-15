const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Alan&g=Alan-Abdul-Kalaam-25&x=alanabdulkalaam&l=alanabdulkalaam&i=https%3A%2F%2Fi.gifer.com%2F3AyY.gif&p=&z=81a23";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
