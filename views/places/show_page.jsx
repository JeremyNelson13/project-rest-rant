const React = require('react')
const Def = require('../default')

function show_page (data) {
    //this function will return details for a single page
    return (
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name} />
                    </div>
                    <div className='col-sm-6'>
                        <h1>{data.place.name}</h1>
                        <h2>
                            User Rating:                            
                        </h2>
                        <h3>
                            Not Rated. Add A Rant!
                        </h3>
                        <br />
                        <h2>
                            RESTaurant Bio:
                        </h2>
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                        <h3>
                            Enjoy their {data.place.cuisines}
                        </h3>
                    </div>
                </div>
                <hr />
                <h2>Rants and Comments!</h2>
                <h3>
                    No Rants yet! Tell us how you really feel!
                    <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                        Edit
                    </a>
                    <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                        <button type='submit' className='btn-danger'>
                            Delete 
                        </button>
                    </form>
                </h3>
            </main>
        </Def>
    )
}

module.exports = show_page