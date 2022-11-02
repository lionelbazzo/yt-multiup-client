import { callExternalApi } from "./external-api.service";

const apiServerUrl = import.meta.env.VITE_API_SERVER_URL;

export const getMediaList = async (accessToken, daemonId, page, pageSize) => {
  const config = {
    url: `${apiServerUrl}/api/v1/daemon/${daemonId}/media?page=${page}&pageSize=${pageSize}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};
