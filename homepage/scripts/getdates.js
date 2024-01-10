

function lastModifiedDate() {
    //  grab modidfied element
    const lastMod = document.getElementById("lastmod")

    // the best
    let mod = new Date(document.lastModified)

    lastMod.innerText = mod
}

lastModifiedDate()