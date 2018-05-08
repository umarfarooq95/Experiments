function FrogJmp(X, Y, D) {
    var result, totalVal;
    for (var z = 0; z < Y; z++) {
        if (z == 0) {
            totalVal = X + D;
            if (totalVal >= Y) {
                result = z;
                break
            } else {
                continue
            }

        }

        if (totalVal >= Y) {
            result = z;
            break
        }
        totalVal += D;
    }
    return result
}

console.log(FrogJmp(10, 85, 30));
