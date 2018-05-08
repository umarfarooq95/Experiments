const roads = [
    "Alice's House-Bob's House","Alice's House-Cabin","Alice's House-Post Office","Bob's House-Town Hall",
    "Daria's House-Ernie's House","Daria's House-Town Hall","Ernie's House-Grete's House","Grete's House-Farm",
    "Grete's House-Shop","Marketplace-Farm","Marketplace-Post Office","Marketplace-Shop","Marketplace-Town Hall","Shop-Town Hall"
];
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels
    }
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        }
        else {
            let parcels = this.parcels.map(parcel => {
                if (parcel.place !== this.place) {
                    return parcel;
                }
                return {place: destination, address: parcel.address}
            });
            parcels = parcels.filter(parcel => parcel.place !== parcel.address);
            return new VillageState(destination, parcels)
        }
    }
}
runRobot = (state, robot, memory) => {
    for (let turn = 0; ; turn++) {
        if (!state.parcels.length) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`)
    }
};
randomPick = array => {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice]
};
randomRobot = state => {
    return {direction: randomPick(roadGraph[state.place])}
};
buildGraph = edges => {
    let graph = Object.create(null);
    addEdges = (from, to) => {
        if (!graph[from]) {
            graph[from] = [to]
        }
        else {
            graph[from].push(to)
        }
    };
    let mappedEdges = edges.map(x => x.split('-'));
    for (let [from, to] of mappedEdges) {/*We can loop the array using this iteration method also*/
        addEdges(from, to);
        addEdges(to, from);
    }
    return graph
};
VillageState.random = parcelCount => {
    let parcels = [];
    for (let s = 0; s < 1; s++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place === address);
        parcels.push({place, address})
    }
    return new VillageState("Post Office", parcels);
};
const roadGraph = buildGraph(roads);
// console.log(roadGraph);
// let first = new VillageState(
//     "Post Office",
//     [{place: "Post Office", address: "Alice's House"}]
// );
// let next = first.move("Alice's House");
// //console.log(next);
runRobot(VillageState.random(), randomRobot);




