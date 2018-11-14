function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let orbitalP;
    let twoPi = 2 * Math.PI;
    for(let i = 0; i < arr.length; i++){
        orbitalP = Math.pow(earthRadius + arr[i].avgAlt, 3) / GM;
        delete arr[i].avgAlt;
        arr[i].orbitalPeriod = Math.round(Math.sqrt(orbitalP) * twoPi);
    }
    return arr;
}
  
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));