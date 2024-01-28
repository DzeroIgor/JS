

class NumberContainer {
    constructor(val_0, val_1, val_2) {
        this.val_0 = val_0;
        this.val_1 = val_1;
        this.val_2 = val_2;

        this.maxLen = 3
    }

    get length() { 
        for (let i = 0; i < this.maxLen; i++) {
            if (this[`val_${i}`] == undefined) {
                return i;
            }
        }
        return 3;
    }

    push(number) {
        if (typeof number === 'number') {
            if ( this.length == this.maxLen) {
                return console.error('Container is FULL!!!');
            } 
            this[`val_${this.length}`] = number  

        } else {
            console.error('Input must be a number!');
        }
    }

    // nc.forEach( ( val ) => { console.log(val)})
    forEach ( cb ) {        
        for (let i = 0; i < this.length; i++) {
            cb ( this[`val_${i}`] )
        }
    }

    // nc.forEachReverse( ( val ) => { console.log(val)})
    forEachReverse ( cb ) {
        for (let i = this.length -1; i >= 0; i--) {
            cb ( this[`val_${i}`] )
        }
    }



    // nc.reduce( ( n, acc ) => n + acc, 0) // return sum

    // nc.reduce( ( n, acc ) => [n, ...acc], [] ) // return invert array
    reduce ( cb, initVal ) {
        let acc = initVal

        for (let i = 0; i < this.length; i++) {
            acc = cb(this[`val_${i}`], acc); 
        }

        return acc;
    }

    
}

nc = new NumberContainer(2, 5, 9);





/*

-----------------------------------
|                                 |   < .push( number )
|                                 |
|                                 |
|      val_0   val_1  val_2       |
|                                 |  > .length
|                                 |  > .forEach( cb ( val ) )
|                                 |  > .reduce ( cb ( acc, val ))
-----------------------------------

*/