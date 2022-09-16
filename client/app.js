/* const { response } = require("express") */

const tableBody = document.getElementById('table-body')

const getFlight = () => {
    fetch('http://192.168.0.50:8046/flights')
        .then(response => response.json())
        .then(flights =>  {
        populateTable(flights)
        })
        .catch(err => console.log(err))
}

getFlight()

const populateTable = (flights) => {
    console.log(flights)
    for (const flight of flights) {
    const tableRow = document.createElement('tr')
    const tableIcon = document.createElement('td')
    tableIcon.textContent = "✈️"
    tableRow.append(tableIcon)

    const flightDetails = {
        time: flight.departing.slice(0,5),
        destination: flight.destination.toUpperCase(),
        flight: flight.flightNumber.shift(),
        gate: flight.gate,
        remarks: flight.status.toUpperCase()
    }

    for (const flightDetails in flightDetails) {
        const tableCell = document.createElement('td')
        const word = Array.from(flightDetails[flightDetails])

        for (const [index, letter] of word.entries()) {
            const letterElement = document.createElement('div')

            tableCell.append(letterElement)
        }
    }


    tableBody.append(tableRow)
    }
    tableRow.append(tableCell)
}
