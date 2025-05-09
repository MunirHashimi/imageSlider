const slider = document.getElementById('slider');
const overlay = document.getElementById('overlay');
const sliderLine = document.getElementById('slider-line');

slider.addEventListener('mouseover', (e) => {
    const rect = slider.getBoundingClientRect();
    let x = e.clientX - rect.left;

    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    overlay.style.width = x + 'px';
    sliderLine.style.left = x + 'px';
});