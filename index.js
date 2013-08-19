module.exports = defaultInstance

function defaultInstance(schema) {
	var obj = {}

	Object.keys(schema.properties).forEach(function (prop) {
		var subSchema = schema.properties[prop]

		switch (subSchema.type) {
			case 'object':
				obj[prop] = defaultInstance(subSchema)
				break;
			case 'array':
				obj[prop] = []
				break;
			case 'string':
				obj[prop] = ''
				break;
			case 'number':
				obj[prop] = ''
				break;
			case 'boolean':
				obj[prop] = false
				break;
		}
	})

	return obj
}
