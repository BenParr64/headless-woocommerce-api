import axios from "axios";

const getWoocommerce = async <T>(url: string) => {
  const init: RequestInit = {
    method: "GET",
    headers: {
      "x-headless-cms": "true",
    },
  };

  try {
    return await axios
      .get(`${process.env.WORDPRESS_URL}/${url}`, {
        auth: {
          username: process.env.WC_CONSUMER_KEY!,
          password: process.env.WC_CONSUMER_SECRET!,
        },
      })
      .then((res: { data: T }) => {
        return res.data as T;
      });
  } catch (error) {
    console.warn("Exception retrieving woocommerce data", error);
    return [] as T;
  }
};

const postWoocommerce = async <T>(url: string, data: any) => {
  try {
    return await axios
      .post(`${process.env.WORDPRESS_URL}/${url}`, data, {
        auth: {
          username: process.env.WC_CONSUMER_KEY!,
          password: process.env.WC_CONSUMER_SECRET!,
        },
      })
      .then((res: { data: T }) => {
        return res.data as T;
      });
  } catch (error) {
    console.warn("Exception retrieving woocommerce data", error);
    return [] as T;
  }
};

export { getWoocommerce, postWoocommerce };
