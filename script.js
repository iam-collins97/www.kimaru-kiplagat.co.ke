function typeText(element, startDelay) {
    const fullText = element.textContent;
    element.textContent = "";
    let index = 0;

    function typeLetter() {
        if (index < fullText.length) {
            element.textContent += fullText[index];
            index++;
            setTimeout(typeLetter, 100);
        }
    }

    setTimeout(typeLetter, startDelay || 0);
}
const mainHeading = document.querySelector("#typewriter");
if (mainHeading) {
    typeText(mainHeading);
}
const subHeading = document.querySelector("#typewriter-sub");
if (subHeading) {
    typeText(subHeading, 2500);
}
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            typeText(entry.target);
            observer.unobserve(entry.target);
        }
    });
});
document.querySelectorAll(".type-heading").forEach(function (heading) {
    observer.observe(heading);
});