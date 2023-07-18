import { APIClient } from "./client/APIClient";
import { OpenAPI } from "./client/core/OpenAPI";

/**
 * Use this client for all API requests.
 */
const apiClient = new APIClient({
	BASE: process.env.API_BASE_URL || OpenAPI.BASE,
});

export default apiClient;
