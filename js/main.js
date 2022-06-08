//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click',getAPOD)

function getAPOD() {

    let date = document.querySelector('input').value

    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector("h2").textContent = data.title
            document.querySelector("img").src = data.hdurl
            document.querySelector("h3").textContent = data.explanation
        })
        .catch(err => {
            console.log("error")
        })

}
