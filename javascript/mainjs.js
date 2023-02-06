'use strict';

const affairs = {
    '2018-11-29': ['Масив даних - 1'],
    '2018-11-30': ['Масив даних - 2'],
    '2018-12-02': ['Масив даних - 3'],
    '2018-12-03': ['Масив даних - 4'],

    '2019-01-12': ['Масив даних - 5'],
    '2019-01-13': ['Масив даних - 6'],
    '2019-01-14': ['Масив даних - 7']
};
const result = {};
for( let key in affairs) {
    let arr = key.split('-');
    let listData = affairs[key];

    let year = arr[0];
    let month = arr[1];
    let day = arr[2];
    
    if(result[year] == undefined) {
    result[year] = {};
    console.log(result[year]);
    };

    if(result[year][month] == undefined) {
        result[year][month] = {};
        console.log(result[year][month]);
    };

    // result[year][month][day] =listData;
    

};
console.log(result);
// console.log(affairs);