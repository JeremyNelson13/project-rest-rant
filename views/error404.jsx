const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404 Page Not Found</h1>
                <div>
                    <img src='/images/404dog.jpg' alt='A dog wearing glasses' />
                    <div>
                    Photo by Samson Katt from Pexels
                    </div>
                </div>
                <p>Sorry, we can't find that page!</p>
                <a href='/'>
                    <button className='btn-primary'>Home Page</button>
                </a>
            </main>
            
        </Def>
    )
}

module.exports = error404