console.log(resources)
let resoruceHTML = ""
let linkPage = "HTML"
//Brukte ChatGPT for linja 9, 10, 11. Klarte ikke å finne en bra måte får å bruke en nested array. 
//prompten var "how can i map() an array inside an array in javascript" med resources.map og arrayen pastet inn.
//den lå til også target="_blank" for å åpne lenken i ny fane og .join(" ") for å ta bort komma fra html
//som er ting jeg ikke ville ha funnet ut på egen hånd
document.getElementById("HTMLlink").addEventListener("click", function(){UpdateLinkHTML(), UpdateMap()})
document.getElementById("CSSlink").addEventListener("click", function(){UpdateLinkCSS(), UpdateMap()})
document.getElementById("JSlink").addEventListener("click", function(){UpdateLinkJS(), UpdateMap()})
document.getElementById("Reactlink").addEventListener("click", function(){UpdateLinkReact(), UpdateMap()})
document.getElementById("Sanitylink").addEventListener("click", function(){UpdateLinkSanity(), UpdateMap()})
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

function UpdateLinkHTML(){
    linkPage = "HTML"
}
function UpdateLinkCSS(){
    linkPage = "CSS"
}
function UpdateLinkJS(){
    linkPage = "JavaScript"
}
function UpdateLinkReact(){
    linkPage = "React"
}
function UpdateLinkSanity(){
    linkPage = "Sanity and headless CMS"
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