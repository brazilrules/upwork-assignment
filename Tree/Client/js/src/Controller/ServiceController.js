export default class ServiceController {
	constructor(host) {
		this.host = host;
	}
	
	getTree() {
		return fetch(`${this.host}/tree`).then(response => response.json());
	}
}