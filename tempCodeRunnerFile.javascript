let a = 10;

// first class function
var b = function sam(){

    let c = function(){
        return 20;
    }
    
    let d = c();
    console.log(d);
};

b();
console.log(a);