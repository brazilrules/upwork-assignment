import ServiceController from "./Controller/ServiceController";
import TreeController from "./Controller/TreeController";

let service = new ServiceController('http://localhost:3000');

service.getTree().then(data => {
	let tree = JSON.parse(data);
	
	let controller = new TreeController(tree.root);
	
	let mainOutput = document.getElementById("mainOutput");
	console.log(mainOutput);
	mainOutput.innerHTML = `3's label: ${controller.findNodeLabel(3)}<br/><br/>6's label: ${controller.findNodeLabel(6)}<br/><br/>2's label: ${controller.findNodeLabel(2)}<br/><br/>9's label: ${controller.findNodeLabel(9)}<br/><br/>`;
	
	let searchInput = document.getElementById("searchInput");
	console.log(searchInput);
	let searchOutput = document.getElementById("searchOutput");
	console.log(searchOutput);
	let searchButton = document.getElementById("searchButton");
	console.log(searchButton);
	searchButton.onclick = () => {
		let input = parseInt(searchInput.value);
		console.log(input);
		if (input) {
			let result = controller.findNodeLabel(input);
			if (!result) result = "Id Not Found.";
			searchOutput.innerHTML = `${result}`;
		} else {
			alert("Please input a number.");
		}
	};
	
});