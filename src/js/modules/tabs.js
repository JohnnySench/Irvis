const tabs = (selectorHeader, selectorTabs, selectorContent, classActive) => {
    const header = document.querySelector(selectorHeader);
    const tabs = document.querySelectorAll(selectorTabs);
    const content = document.querySelectorAll(selectorContent);

    const hideTabsContent = () => {
        tabs.forEach(tab => {
            tab.classList.remove(classActive);
        });
        content.forEach(cont => {
            cont.style.display = 'none';
        });
    }

    const showTabsContent = (i = 0) => {
        tabs[i].classList.add(classActive);
        content[i].style.display = 'block';
    }

    hideTabsContent();
    showTabsContent();

    header.addEventListener('click', e => {
        const target = e.target;
        if (target && target.classList.contains(selectorTabs.replace(/\./, '')) ||
            target.parentNode.classList.contains(selectorTabs.replace(/\./, ''))) {
                tabs.forEach((tab, i) => {
                    if (tab === target.parentNode || tab === target) {
                        hideTabsContent();
                        showTabsContent(i);
                    }
                });
            }
    });
}

export default tabs;