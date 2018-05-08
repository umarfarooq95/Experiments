const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];


routeRobot = (state, memory) => {
    if (!memory.length) {
        memory = mailRoute
    }
    return {direction: memory[0], memory: memory.slice(1)}
};

findRoute = (graph, from, to) => {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place === to) return route.concat(place);
            if (!work.some(w => w.at === place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
};

goalOrientedRobot = ({place,parcels},route)=>{
    if(!route.length){
        let parcel = parcels[0];
        if(parcel.place !==place){
            route =findRoute(roadGraph,place,parcel.place)
        }
        else {
            route =findRoute(roadGraph,place,parcel.address)
        }
    }
    return {direction: route[0], memory: route.slice(1)};

};