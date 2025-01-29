console.log(resources)
let resoruceHTML = ""
//Brukte ChatGPT for linja 9, 10, 11. Klarte ikke å finne en bra måte får å bruke en nested array. 
//prompten var "how can i map() an array inside an array in javascript" med resources.map og arrayen pastet inn.
//den lå til også target="_blank" for å åpne lenken i ny fane og .join(" ") for å ta bort komma fra html
//som er ting jeg ikke ville ha funnet ut på egen hånd
resources.map((resource, index) => { resoruceHTML += 
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
