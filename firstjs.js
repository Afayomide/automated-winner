let button = document.querySelector("button")
button.addEventListener("click", async(e)=>{
    e.preventDefault();
    let search = document.querySelector("input")
    let men = search.value;
    let me = await axios.get(`https://api.tvmaze.com/search/shows?q=${men}`)
    for(let i=0; i<=10; i++){
        let meme = me.data[i].show.image.medium;
        let link = document.createElement("a")
        link.href = `https://www.thenetnaija.co/search?folder=&t=${men}`
        let image= document.createElement("img")
        image.src = meme
        link.appendChild(image);
        document.body.appendChild(link)
    }
})