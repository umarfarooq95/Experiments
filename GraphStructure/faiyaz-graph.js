

let cities = ['mumbai', 'chennai', 'ernakulam', 'kolkata', 'bangalore', 'renigunda'];
var links = {};

for (let city of cities) {
    links[city] = [];
}

function createConnection(city, connections) {
    links[city] = links[city].concat(connections);
}

createConnection('mumbai', ['chennai', 'renigunda', 'bangalore']);
createConnection('chennai', ['ernakulam', 'renigunda', 'kolkata']);
createConnection('ernakulam', ['mumbai', 'chennai', 'renigunda']);


function fetchPaths(sourceCity, destinationCity) {
    let paths = [];

    function walk(src, dst) {
        let linkList = links[src],
            i = 0;

        while (i < linkList.length) {
            if (links[i] === dst) {
                ++i
                return src
            }
            ++i
        }
    }
    let path = walk(sourceCity, destinationCity)
}

console.log(fetchPaths('mumbai', 'renigunda'));