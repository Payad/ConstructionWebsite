const learnBtn = document.getElementsByClassName('learnMore');

for (let i = 0; i < learnBtn.length; i++) {
    btn = learnBtn[i];
    // learnBtn[i] = btn;

btn.addEventListener('click', () => {
    // console.log('Hello');
    if (btn.classList.contains('materials')) {
        const desc = document.getElementsByClassName('desc materials');
        // desc.style.innerHTML = 'The best materials you can buy!'
        // desc.style.display = 'none';
        console.log(btn);
    }
})
}