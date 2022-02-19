const React = require('react')
const Def = require('../default')

function new_page () {
    //this function will return a form to create a new page
    return(
        <Def>
            <main>
                <h1>Add a New Place</h1>
            </main>
        </Def>
    )
}

module.exports = new_page