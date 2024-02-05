const links = [
    {
        name: 'TikTok',
        url_name: '@nguyen.thien.nam.2009',
        url: 'https://www.tiktok.com/@nguyen.thien.nam.2009',
        logoURL: 'https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338430_1280.png'
    },
    {
        name: 'Discord',
        url_name: 'nguyen.thien.nam',
        url: 'https://discord.com/users/1059384621550288907',
        logoURL: 'https://seeklogo.com/images/D/discord-logo-7A1EC3216C-seeklogo.com.png'
    },
    {
        name: 'Instagram',
        url_name: 'nguyen.thien.nam2009',
        url: 'https://www.instagram.com/nguyen.thien.nam2009',
        logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'
    },
    {
        name: 'Twitter',
        url_name: '@thien_nam9',
        url: 'https://twitter.com/thien_nam9',
        logoURL: 'https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg'
    },
    {
        name: 'Youtube',
        url_name: '@nguyen_thien_nam',
        url: 'https://www.youtube.com/channel/UCuBqPJLikRQ5ILmeGfouvGA',
        logoURL: 'https://i.pinimg.com/originals/36/3c/7d/363c7dcf475101a0bdf48e191571982b.png'
    },
    {
        name: 'Facebook',
        url_name: 'thiennam.nguyen.18007',
        url: 'https://www.facebook.com/thiennam.nguyen.18007',
        logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png'
    },
    {
        name: 'Reddit',
        url_name: 'Turbulent-Ad-759',
        url: 'https://www.reddit.com/user/Turbulent-Ad-759',
        logoURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Reddit_Logo_Icon.svg/220px-Reddit_Logo_Icon.svg.png'
    },
    {
        name: 'Github',
        url_name: 'NamTheDev',
        url: 'https://github.com/NamTheDev',
        logoURL: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
    },
    {
        name: 'Gravatar',
        url_name: 'nguyenthiennam2009',
        url: 'https://gravatar.com/nguyenthiennam2009',
        logoURL: 'https://cdn.worldvectorlogo.com/logos/gravatar.svg'
    },
    {
        name: 'NPM',
        url_name: 'soul_yt',
        url: 'https://www.npmjs.com/~soul_yt',
        logoURL: 'https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-wm0mnkz6.png'
    }
].sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
})
function editLinkCard(string, index, condition) {
    const linkTitle = document.getElementById(`lk-${index}`)
    const linkCard = document.getElementById(`lc-${index}`)
    if (condition) {
        linkCard.style.backgroundSize = '300px'
        linkCard.style.backgroundPosition = 'center'
        condition = false
    } else {
        linkCard.style.backgroundColor = ''
        linkCard.style.backgroundSize = '100px'
        linkCard.style.backgroundPosition = 'center 15px'
        condition = true
    }
    linkTitle.innerText = string
}

const linksList = document.getElementById('links')
links.forEach((link, index) => {
    const imageURL = links[index].logoURL
    console.log(imageURL)
    linksList.innerHTML += `
    <div 
        class="link-card" 
        id="lc-${index}" 
        onclick="window.open('${link.url}', '_blank')" 
        onmouseover="editLinkCard('${link.name}', '${index}', true)" 
        onmouseout="editLinkCard('${link.url_name}', '${index}', false)"
        style='background-image: url("${imageURL}")'>
    <h1 
        class='link-title' 
        id='lk-${index}'>${link.url_name}
    </h1>
    </div>`
})