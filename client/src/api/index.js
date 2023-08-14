import ky from "ky";

const StrapiApi = ky.create({
  prefixUrl: "http://localhost:1337/api/",
});

export const sendData = (data) => {
  return StrapiApi.post("datas", { json: data });
};

export const getData = () => {
  return StrapiApi.get("datas").json();
};
