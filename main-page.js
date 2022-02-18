let teleportOut = document.querySelector('[cm-teleport-text="out-1"]');
let teleportIn = document.querySelector('[cm-teleport-text="in-1"]');

teleportIn.textContent = teleportOut.textContent;


// tabs content
let timerWaiter;

function startTabContent() {
    let allTabLinks = document.querySelectorAll('.tabs-menu__link');
    let allTabPanes = document.querySelectorAll('.tabs-menu__pane');
    let allContentRows = document.querySelectorAll('.cl-i__tabs-content');

    allTabLinks.forEach((tabLink, tabId) => {
        let appendWaiterPane = allTabPanes[tabId];
        let currentCategory = tabLink.querySelector('[data-tab-name]').getAttribute('data-tab-name');
        allContentRows.forEach(contentRow => {
            let rowCategory = contentRow.querySelector('[data-row-category]').getAttribute('data-row-category');
            if (rowCategory == currentCategory) {
                let clonableRow = contentRow;
                appendWaiterPane.append(clonableRow);
            }
        });


        allTabLinks.forEach((tabLink, tabId) => {
            tabLink.addEventListener('click', function () {
                setTimeout(() => {
                    if (tabLink.classList.contains('w--current') && tabId == 2) {
                        document.querySelector('.ill__o').click();
                    } else {
                        document.querySelector('.ill__c').click();
                    }
                });
            }, 200);
        });
    });

    setTimeout(() => {
        clearTimeout(timerWaiter);
    }, 300);
}

function tryToStartScript() {
    clearTimeout(timerWaiter);
    timerWaiter = setTimeout(() => {
        startTabContent();
    }, 500);
}

const targetNode = document.querySelector("#tab-section");
const observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
}
const observer = new MutationObserver(tryToStartScript);
observer.observe(targetNode, observerOptions);