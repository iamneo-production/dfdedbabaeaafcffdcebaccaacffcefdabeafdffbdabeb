export function filterEven(...rest) {
    var even= [];
    const n = rest.length;
    for (let i= 0; i < n; i++ ) {
        if(rest[i]%2 ==0){
            even.push(rest[i]);
        }    
    }
 return even;
}

export function filterOdd(...rest) {
    var odd= [];
    const n = rest.length;
    for (let i= 0; i < n; i++) {
        if(rest[i]%2 !=0){
            odd.push(rest[i]);
        }      
    }
 return odd;
}

export function generateRandomList(n = 7) {
 var list = [];
 for (let i = 0; i < n; i++) {
   list[i] = Math.floor(Math.random() * 100) + 1;
 }
return list;
}
