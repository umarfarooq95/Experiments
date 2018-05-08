let employees = [
    {id: 1, firstName: 'John', lastName: 'Watson', age: 21, salary: 10000},
    {id: 2, firstName: 'John ONe', lastName: '', age: 21, salary: 10000},
    {id: 3, firstName: 'Seetha', lastName: 'Lakshmi', age: 21, salary: 15000},
    {id: 4, firstName: 'Doe', lastName: 'Son', age: 23, salary: 15000},
    {id: 5, firstName: 'Mia', lastName: 'Watson', age: 25, salary: 10000},
    {id: 6, firstName: 'Letty', lastName: 'John', age: 30, salary: 15000},
    {id: 7, firstName: 'Gisele', lastName: 'Jary', age: 30, salary: 20000},
    {id: 8, firstName: 'Sheela', lastName: 'Watson', age: 22, salary: 10000},
    {id: 9, firstName: 'Dom', lastName: 'Toretto', age: 22, salary: 15000},
    {id: 10, firstName: 'Paul', lastName: 'Walker', age: 22, salary: 20000},
    {id: 10, firstName: 'Paul one', lastName: 'Walker', age: 22, salary: 20000},
];

/*22:[{2000:[], 3000:[]}]*/

const myGroupBy = (arr, keys) => {
    const mappedObj = {};
    arr.forEach((data) => {
        let i = 0;
        const mappedKeyEleObj = {};
        while (i < keys.length - 1) {
            let value = data[keys[i]];
            ++i;
            let groupedValueList = mappedObj[value] || [];
            let currentKeyValueList = groupedValueList.length && groupedValueList[0][data[keys[i]]] || [];
            currentKeyValueList.push(data);
            mappedKeyEleObj[data[keys[i]]] = currentKeyValueList;
            groupedValueList.length ? groupedValueList[0][data[keys[i]]] = currentKeyValueList : groupedValueList.push(mappedKeyEleObj);
            mappedObj[value] = groupedValueList;
        }
    });
    return mappedObj;
};

//console.log(myGroupBy(employees, ['age', 'salary']));



const hasOwnProperty = Object.prototype.hasOwnProperty;
const MAX_SAFE_INTEGER = 9007199254740991;

function groupBy(collection, iteratee) {
    return reduce(collection, (result, value, key) => {
        key = iteratee(value)
        if (hasOwnProperty.call(result, key)) {
            result[key].push(value)
        } else {
            baseAssignValue(result, key, [value])
        }
        return result
    }, {})
}

function baseAssignValue(object, key, value) {
    if (key === '__proto__') {
        Object.defineProperty(object, key, {
            'configurable': true,
            'enumerable': true,
            'value': value,
            'writable': true
        })
    } else {
        object[key] = value
    }
}

function reduce(collection, iteratee, accumulator) {
    const func = Array.isArray(collection) ? arrayReduce : baseReduce
    const initAccum = arguments.length < 3
    return func(collection, iteratee, accumulator, initAccum, baseEach)
}

function arrayReduce(array, iteratee, accumulator, initAccum) {
    let index = -1
    const length = array == null ? 0 : array.length

    if (initAccum && length) {
        accumulator = array[++index]
    }
    while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array)
    }
    return accumulator
}

function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, (value, index, collection) => {
        accumulator = initAccum
            ? (initAccum = false, value)
            : iteratee(accumulator, value, index, collection)
    });
    return accumulator
}

function baseEach(collection, iteratee) {
    if (collection == null) {
        return collection
    }
    if (!isArrayLike(collection)) {
        return baseForOwn(collection, iteratee)
    }
    const length = collection.length
    const iterable = Object(collection)
    let index = -1

    while (++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
            break
        }
    }
    return collection
}

function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys)
}

function baseFor(object, iteratee, keysFunc) {
    const iterable = Object(object)
    const props = keysFunc(object)
    let { length } = props
    let index = -1

    while (length--) {
        const key = props[++index]
        if (iteratee(iterable[key], key, iterable) === false) {
            break
        }
    }
    return object
}

function isArrayLike(value) {
    return value != null && typeof value !== 'function' && isLength(value.length)
}

function isLength(value) {
    return typeof value === 'number' &&
        value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));

console.log(isLength(-10000000))

