function sum ( a ) {
    return function ( b ) {
        if ( typeof b === 'undefined' ) {
            return a;
        }
        return sum( a + b );
    };
}
