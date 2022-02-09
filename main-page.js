let teleportOut = document.querySelector('[cm-teleport-text="out-1"]');
let teleportIn = document.querySelector('[cm-teleport-text="in-1"]');

teleportIn.textContent = teleportOut.textContent;


// tabs content
let timerWaiter;

function startTabContent() {
    let allTabLinks = document.querySelectorAll('.tabs-menu__link');

    allTabLinks.forEach(tabLink => {
        let currentCategory = tabLink.querySelector('[data-tab-name]').getAttribute('data-tab-name');
        console.log(currentCategory);
    });
}

function tryToStartScript() {
    clearTimeout(timerWaiter);
    timerWaiter = setTimeout(() => {
        startTabContent();
    }, 1000);
}

const targetNode = document.querySelector("#tab-section");
const observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
}
const observer = new MutationObserver(tryToStartScript);
observer.observe(targetNode, observerOptions);