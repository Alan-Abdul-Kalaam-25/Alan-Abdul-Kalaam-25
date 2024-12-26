const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Alan&g=Alan-Abdul-Kalaam-25&x=alanabdulkalaam&l=alanabdulkalaam&i=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1733858864100-138aaea0917b%3Fq%3D80%26w%3D1964%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&p=&z=98e66";
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
