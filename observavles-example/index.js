/*
 var a = Rx.Observable.of('f', 'b', 'q', 2, 'qq');//this will convert into the array format....
 //console.log(Rx);
 //console.log(a.array);
 //console.log(a.array.length);

 var b = Rx.Observable.from([1, 2, 3]);
 //console.log(b);

 Rx.Observable.fromPromise(fetch('https://jsonplaceholder.typicode.com/posts/1'))
 .subscribe((data)=> {
 console.log(data)
 });

 // From a callback (last argument is a callback)
 // fs.exists = (path, cb(exists))
 var myObservable = new Rx.Subject();
 myObservable.subscribe(value => console.log("kkkk"+value));
 myObservable.next('gopi');

 var source = Rx.Observable.interval(1000).pipe(Rx.operators.take(2));
 console.log(source);


 const example = source.pipe(
 Rx.operators.map(val => Rx.Observable.interval(1000)Rx.operators.pipe(Rx.operators.map(i => `Result (${val}): ${i}`), Rx.operators.take(5)))
 );
 console.log(example);*/

var source = Rx.Observable.interval(400).take(9).map(i=> {
        return ['1', '2', '3', 'foo', '3', '4', 'z', '2', 'a'][i]
    });

var result = source
    /*.map(x=>parseInt(x))
    .filter(x=>!isNaN(x))
    .reduce((x, y)=> {
        return x + y
    });*/

result.subscribe(x => console.log(x))