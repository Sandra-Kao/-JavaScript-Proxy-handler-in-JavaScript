console.clear();

console.log('    //////////////////////////////');

let color = 'blue';
let fullColorName = 'Sky ' + color;
console.log('Sky {color} => ' + fullColorName);
//Original

color = 'yellow';
console.log('After color is assigned to yellow => ' + fullColorName);
//JavaScript can not reactivity to fullColorName

fullColorName = 'Sky ' + color;
console.log('After fullColorName is reassigned => ' + fullColorName);
//It can be reassigned

console.log('    ///////////String/////////////');
console.log('    //////////////////////////////');

const colors = {
    name: 'blue',
    fullColorName: null
};
colors.fullColorName = 'Sky ' + colors.name;
console.log('Sky {color} => ' + colors.fullColorName);
//Original

colors.name = 'yellow';
console.log('After color is assigned to yellow => ' + colors.fullColorName);
//JavaScript can not reactivity to fullColorName

colors.fullColorName = 'Sky ' + colors.name;
console.log('After fullColorName is reassigned => ' + colors.fullColorName);
//It can be reassigned

console.log('    /////////////Object///////////');
console.log('    //////////////////////////////');

const handler = {
    set(target, key, value) {
        //console.log(target + ' - ' + key + ' - ' + value);
        if (key === 'name') {
            target.fullColorName = 'Sky ' + value;
        }
        target[key] = value;
    }
};
const proxy = new Proxy(colors, handler);

colors.name = 'orange';
console.log('Sky {color} => ' + colors.fullColorName);
//console.log(colors);

proxy.name = 'pink';
console.log('After fullColorName is handled => ' + colors.fullColorName);
//console.log(colors);

console.log('    /////////////Proxy///////////');
console.log('    //////////////////////////////');