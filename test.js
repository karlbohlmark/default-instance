var assert = require('assert')
var defaultInstance = require('./')

var assignmentSchema = {
    "properties": {
        "customer": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                }
            }
        },
        "fromdate": {
            "type": "string"
        },
        "todate": {
            "type": "string"
        },
        "technologies": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        }
    },
    "type": "object"
}

var assignment = defaultInstance(assignmentSchema)

assert.deepEqual({
    customer: { name: "" },
    fromdate: "",
    todate: "",
    technologies: [],
}, assignment)

