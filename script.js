const listArray = [1, 2, 3, [1, 2, 3], 4, [1, 2], 5];
console.log(Array.isArray(listArray));
let depth = 0;

function getListFromArray(arr, depth) {
    const ul = document.createElement('ul');

    if (Array.isArray(arr)) {
        arr.forEach (elem => {
            const li = document.createElement('li');

            if(Array.isArray(elem)) {
                console.log(elem);  
                li.append(getListFromArray(elem, depth + 1));

            } else if(depth === 0) {
                console.log(elem);
                li.append(elem);

            } else {
                li.append(`${depth}. ${elem}`);
            }
            ul.append(li);
        })
        return ul;
    }
}

document.body.append(getListFromArray(listArray, 0));