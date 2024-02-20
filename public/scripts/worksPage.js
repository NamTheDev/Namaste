const box = document.getElementsByClassName('box').item(0)
fetch('json/works.json').then(async response => {
    const data = (await response.json()).sort((a, b) => new Number(b.creationYear) - new Number(a.creationYear));
    for (const work of data) {
        box.innerHTML += `
        <button class="imageButton" onclick="setTimeout(() => window.open('${work.link}', '_blank'), 500)" style="--preview-image: url('${work.backgroundImage}');">
            <h1>${work.name}</h1>
            <h2>${work.description}. <span class='highlight'><br>Creation year: <span class='highlight important'>${work.creationYear}</span>.</span></h2>
        </button>`
    }
})