const introText = document.getElementById('intro-about');

if (window.matchMedia('(min-width: 768px)').matches) {
    introText.textContent = `The Arab Music Festival brings together the top Arab musicians, singers, and activists who comprise the Original Arab
    Music from different Arab countries every year.
     This year, we hope to expand our invitation list including organizations and individuals. The events include 33 concerts and music hosted by 5 opera theaters`;
} 

window.addEventListener ('resize', () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
        introText.textContent = `The Arab Music Festival brings together the top Arab musicians, singers, and activists who comprise the Original Arab
        Music from different Arab countries every year.
         This year, we hope to expand our invitation list including organizations and individuals. The events include 33 concerts and music hosted by 5 opera theaters`;
    } else {
        introText.textContent = `The Arab Music Festival brings together the top Arab musicians, singers, and activists who comprise the Original Arab
        Music from different Arab countries every year.
         This year, we hope to expand our invitation list including organizations and individuals.`;
    }
})