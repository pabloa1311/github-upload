
async function findShow(query) {
    let response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=seasons`)
    let data = await response.json()
    return data
}

findShow("office").then(show => {
    // console.log(show)
    document.body.innerHTML = `<div class="my-show">
        <div class="my-show-title">
            ${show.name}
        </div>
        
        <div class="my-show-summary">
            ${show.summary}
        </div>
        
        ${show._embedded.seasons.map(season => {
            return `<div class="my-show-season">Season ${season.number}</div>`
        }).join('')}
    </div>`
    
    const seasons = Array.from(document.querySelectorAll('.my-show-season'))
    
    seasons.forEach(season => {
        addEventListener('click', function() {
            console.log(season.innerHTML)
        })
        
    })
})