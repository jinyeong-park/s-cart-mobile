// apisauce: wrapper arond axios, give standardized errors. underlying promises always resolved.
import { create } from 'apisauce'

const apiClient = create({
  baseURL: 'http://192.168.0.242:9000/api'
});

// export default object
export default.apiClient;

