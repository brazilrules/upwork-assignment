import TreeNode from "../Model/TreeNode";

export default class TreeController {
	constructor(root) {
		this.tree = new TreeNode(root.id, root.label, this.buildTree(root));
	}
	
	buildTree(node) {
		let nodes = [];
		
		for (let child of node.children) {
			if (child.children) {
				nodes.push(new TreeNode(child.id, child.label, this.buildTree(child)));
			} else {
				nodes.push(new TreeNode(child.id, child.label));
			}
		}
		
		return nodes;
	}
	
	findNodeLabel(id, node) {
		let label;
		
		if (!node) {
			node = this.tree;
		}
		console.log(node);
		
		if (node.id === id) {
			label = node.label;
		} else {
			if (node.children) {
				for (let child of node.children) {
					label = this.findNodeLabel(id, child);
					if (label) { 
						break;
					}
				}
			}
		}
		
		return label;
	}
}