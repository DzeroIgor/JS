

class NumberContainer {
    constructor(val_0, val_1, val_2) {
        this.val_0 = val_0;
        this.val_1 = val_1;
        this.val_2 = val_2;

        this.maxLen = 3
    }

    get length() {
        if ( this.val_0 == undefined ) {
            return 0
        } else if ( this.val_1 == undefined ) {
            return 1
        } else if ( this.val_2 == undefined ) {
            return 2
        } else {
            return 3
        }    
    }

    push(number) {
    if (typeof number === 'number') {
        if (this.length == 0)
            this.val_0 = number;
        else if (this.length == 1)
            this.val_1 = number;
        else if (this.length == 2)
            this.val_2 = number;
        else
            console.error('Container is FULL!!!');
        }
    }

    // nc.forEach( ( val ) => { console.log(val)})
    forEach ( cb ) {
        // this works like a loop
        if ( this.length > 0 ) {
            cb( this.val_0) 
        }
        if ( this.length > 1 ) {
            cb( this.val_1) 
        }
        if ( this.length > 2 ) {
            cb( this.val_2) 
        }
    }

    // nc.forEachReverse( ( val ) => { console.log(val)})
    forEachReverse ( cb ) {
        // this works like a loop
        if ( this.length > 2 ) {
            cb( this.val_2) 
        }
        if ( this.length > 1 ) {
            cb( this.val_1) 
        }
        if ( this.length > 0 ) {
            cb( this.val_0) 
        }
    }



    // nc.reduce( ( n, acc ) => n + acc, 0) 

    // nc.reduce( ( n, acc ) => [n, ...acc], [] ) // return invert array
    reduce ( cb, initVal ) {
        let acc = initVal

        // this works like a loop
        if ( this.length > 0 ) {
            acc = cb( this.val_0, acc)
        }
        if ( this.length > 1 ) {
            acc = cb( this.val_1, acc) 
        }
        if ( this.length > 2 ) {
            acc = cb( this.val_2, acc) 
        }
        return acc
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