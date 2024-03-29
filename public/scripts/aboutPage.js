const sections = document.getElementsByClassName('timeline-section');
const popup = document.getElementsByClassName('popup').item(0)

const isMobile = window.matchMedia("(max-height: 600px)").matches;

if (!isMobile) {
    for (const { id } of sections) {
        if (!id) continue;
        const section = document.getElementById(id);
        section.addEventListener('click', (event) => {
            const {target} = event
            if(target.tagName === "A") return;
            popup.style.display = 'block'
            popup.style.opacity = '1'
            popup.innerHTML = section.outerHTML
            document.body.style.overflow = 'hidden'
            const sectionInsidePopup = popup.getElementsByClassName(section.className)[0]
            sectionInsidePopup.addEventListener('click', () => {
                popup.style.display = 'none'
                document.body.style.overflow = ''
            })
        });
    }
}