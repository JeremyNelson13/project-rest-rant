const React = require('react')

function Def (html) {
    return (
        <><html>
            <title>Title</title>
        </html>
        <body>
                {html.children}
        </body></>
    )
}

module.exports = Def