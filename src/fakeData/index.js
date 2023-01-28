import androids from './android';
import cameras from './camera';
import laptops from './laptop';
import television from './television';

const fakeData = [...androids, ...cameras, ...laptops, ...television];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;