console.log(resources)
let resoruceHTML = ""
let linkPage = "HTML"
document.getElementById("HTMLlink").addEventListener("click", function(){ResetClass(), UpdateLinkHTML(), UpdateMap()})
document.getElementById("CSSlink").addEventListener("click", function(){ResetClass(), UpdateLinkCSS(), UpdateMap()})
document.getElementById("JSlink").addEventListener("click", function(){ResetClass(), UpdateLinkJS(), UpdateMap()})
document.getElementById("Reactlink").addEventListener("click", function(){ResetClass(), UpdateLinkReact(), UpdateMap()})
document.getElementById("Sanitylink").addEventListener("click", function(){ResetClass(), UpdateLinkSanity(), UpdateMap()})
const catge = resources.filter(
    (element) => element.category  === linkPage
  )
//Brukte ChatGPT for linja 21, 22. Klarte ikke å finne en bra måte får å bruke en nested array. 
//prompten var "how can i map() an array inside an array in javascript" med resources.map og arrayen pastet inn.
//den lå til også target="_blank" for å åpne lenken i ny fane og .join(" ") for å ta bort komma fra html
//som er ting jeg ikke ville ha funnet ut på egen hånd
catge.map((resource, index) => { resoruceHTML += 
            `<article>
                <h1>${resource.category}</h1>
                <p>${resource.text}</p>
                <ul>
                ${resource.sources.map(source => `
                <li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
                </ul>
            </article>`
        })
function ResetClass(){
            document.getElementById("HTMLlink").className = "ButtonInactive"
            document.getElementById("CSSlink").className = "ButtonInactive"
            document.getElementById("JSlink").className = "ButtonInactive"
            document.getElementById("Reactlink").className = "ButtonInactive"
            document.getElementById("Sanitylink").className = "ButtonInactive"
}
function UpdateLinkHTML(){
    linkPage = "HTML"
    document.getElementById("HTMLlink").className = "ButtonActive"

}
function UpdateLinkCSS(){
    linkPage = "CSS"
    document.getElementById("CSSlink").className = "ButtonActive"
}
function UpdateLinkJS(){
    linkPage = "JavaScript"
    document.getElementById("JSlink").className = "ButtonActive"

}
function UpdateLinkReact(){
    linkPage = "React"
    document.getElementById("Reactlink").className = "ButtonActive"

}
function UpdateLinkSanity(){
    linkPage = "Sanity and headless CMS"
    document.getElementById("Sanitylink").className = "ButtonActive"

}



function UpdateMap (){
    resoruceHTML = ""
    const catge = resources.filter(
        (element) => element.category  === linkPage
      )
    catge.map((resource, index) => { resoruceHTML += 
        `<article>
            <h1>${resource.category}</h1>
            <p>${resource.text}</p>
            <ul>
            ${resource.sources.map(source => `
            <li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
            </ul>
        </article>`

    })
    document.getElementById("resourcelist").innerHTML = resoruceHTML
    console.log(resoruceHTML)
    console.log(catge)

}
document.getElementById("resourcelist").innerHTML = resoruceHTML
console.log(catge)