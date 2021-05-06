import {environment} from '../../environments/environment';

export function getBackendUrl(): string {
	const url =  environment.backendUrl;
	return url;
}
