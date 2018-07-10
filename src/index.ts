import { sum, count } from "./assessment-module"

window.onload = () => {
    const form = document.getElementById('sum-form');
    const countButton =  document.getElementById('count-button');

    form.addEventListener('submit', function() {
        const localSum = sum;
        const params =  (<HTMLInputElement>document.getElementById('params')).value;

        console.log(eval(`localSum${params}`));
    });

    countButton.addEventListener('click', function() {
        console.log(count());
    });

};