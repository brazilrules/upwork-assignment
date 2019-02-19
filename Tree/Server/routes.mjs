const tree = (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.json('{"root":{"id":1,"label":"A","children":[{"id":2,"label":"B","children":[{"id":5,"label":"E"},{"id":6,"label":"F"},{"id":7,"label":"G"}]},{"id":3,"label":"C"},{"id":1,"label":"D","children":[{"id":8,"label":"H"},{"id":9,"label":"I"}]}]}}');
}

export default function routes(app) {
	app.route("/tree")
		.get(tree);
}