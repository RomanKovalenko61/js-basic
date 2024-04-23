/*
    Широта - latitude (на графике X)
    Долгота - longitude (на графике Y)
*/

// A(2, 1)
const positionLat = 2; // x1
const positionLong = 1; // y1
//B(6; 4)
const addressLat = 6; // x2
const addressLong = 4; // y2


const distances = ( 
                    (addressLat - positionLat) ** 2
                    + 
                    (addressLong - positionLong) ** 2
                  ) ** 0.5;

console.log(`Координы точки А(${positionLat},${positionLong})`);
console.log(`Координы точки B(${addressLat},${addressLong})`);
console.log(`Расстояние между точками: ${distances}`);