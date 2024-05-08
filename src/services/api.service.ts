import axios, {
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInstance,
  isAxiosError,
} from 'axios';

const createHeaderConfig = (config: InternalAxiosRequestConfig) => {
  const configOptions = { ...config };
  configOptions.headers.Accept = 'application/json';

  return configOptions;
};

const getApiInstance = (axiosConfig: AxiosRequestConfig): AxiosInstance => {
  const apiInstance = axios.create(axiosConfig);
  apiInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => createHeaderConfig(config),
    (error: AxiosError): Promise<AxiosError> => Promise.reject(error),
  );
  apiInstance.interceptors.response.use((response: AxiosResponse) => response.data);
  return apiInstance;
};

export const baseApi = getApiInstance({
  baseURL: `${process.env.API_BASE_URL}`,
});

const fetchData = async <T>(
  url: string,
  params: unknown = {},
): Promise<T> => {
  try {
    const response = await baseApi({
      method: 'get',
      url,
      params,
    });
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw error;
  }
};

export default fetchData;
