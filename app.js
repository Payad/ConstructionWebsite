const learnBtn = document.getElementsByClassName('learnMore');

for (let i = 0; i < learnBtn.length; i++) {
    btn = learnBtn[i];
    // learnBtn[i] = btn;

btn.addEventListener('click', (e) => {
    const offers = e.target.parentElement;
    // btn.display = 'none';
    e.target.display = 'none';
    // console.log('Hello');
    // if (e.target.classList.contains('materials')) {
    //     // const desc = document.getElementsByClassName('desc materials');
    //     // desc.style.innerHTML = 'The best materials you can buy!'
    //     // desc.style.display = 'none';
    //     console.log(btn);
    // }
    // console.log(e.target)
    const fsection = offers.getElementsByClassName('f')[0];
    // fsection.nextElementSibling('p desc');
    const pDesc = fsection.getElementsByClassName('desc')[0];
    console.log(fsection);
    console.log(pDesc);
    if (pDesc.classList.contains('materials')) {
        // pDesc.style.fontSize = '20px';
        const element = document.createElement('span');
        element.classList.add('Materials1');
        element.textContent = 'Materials';
        // pDesc.innerHTML = element;
        pDesc.innerHTML = '<span class="Materials1">Materials</span>Construction LLC provides the materials for your project. We have access to high quality materials such as sheet metal, wood, hard plastics, and pvc. We have a wide selection of materials from our supplier that are high quality and ready for the build.'
    } else if (pDesc.classList.contains('quality-work')) {
        // pDesc.style.fontSize = '20px';
        pDesc.innerHTML = '<span class="QualityWork1">Quality Work</span>Our high quality work and commitmnet will leave you in awe, once the project is completed. Grade A experience and skills to get the job done right.'
    } else if (pDesc.classList.contains('customer-satisfaction')) {
        // pDesc.style.fontSize = '20px';
        pDesc.innerHTML = '<span class="CustomerSatisfaction1">Customer Satisfaction</span>With customer satisfaction in mind, we will always put the customer first. Ask us how we can help guide you through the process. Feel confident when you select our services for your next project.'
    }
    // if (offers.classList.contains('materials')) {
    //     offers.innerHTML = 'Hello'
    // }

    console.log(offers);
})
}

const ctaBtn = document.querySelector(".ctaBtn");
ctaBtn.addEventListener('click', () => {
    // const p = document.createElement('p');
    // ctaBtn.style.display = 'none';
    // const ctaDiv = document.querySelector('.cta');
    // p.textContent = 'ksjdfkajdsfhkadsjfh';
    // ctaDiv.innerHTML = p;
    // ctaBtn.innerHTML = p;
    ctaBtn.innerHTML = '1(800) 123-4567'
})