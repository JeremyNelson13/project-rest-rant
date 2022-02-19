const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rants</h1>
                {/* ideally this would become a carousel of various images, using an array of user uploaded photos */}
                <div>
                    <img src='/images/vegetable-bag.jpg' alt='Canvas bag of vegetables'></img>
                    <div>
                    Photo by <a href="https://unsplash.com/@ben_brunner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Benjamin Brunner</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
            <a href='/places'>
                <button className='btn-primary'>Places Page</button>
            </a>
        </Def>
    )
}

module.exports = home