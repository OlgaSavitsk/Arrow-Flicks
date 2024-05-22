import axios, {
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInstance,
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
  apiInstance.interceptors.response.use((response: AxiosResponse) => response);
  return apiInstance;
};

const baseApi = getApiInstance({
  baseURL: `${process.env.API_BASE_URL}`,
});

const fetchData = async <T>(url: string, params: unknown = {}): Promise<T> => {
  const response = await baseApi({ method: 'get', url, params });
  return response.data;
};

export default fetchData;
