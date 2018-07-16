const { Image } = require("gui");
const Base = require("./base");
const { shouldUpdate } = require("../utils");

// TODO: add button style and border
module.exports = class Image extends Base {
	constructor(props) {
		super(Image.createFromPath(props.path));
		this.update(null, props);
	}

	update(lastProps, props) {}
};
