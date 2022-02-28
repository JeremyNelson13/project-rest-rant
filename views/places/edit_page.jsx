const React = require('react')
const Def = require('../default')

function edit_page (data) {
    //this function will return an edit form
    return (
        <Def>
            <main>
                <h1>Edit Page</h1>
                <form method='POST' action={`/places/${data.id}?_method=PUT`}>
                    <div className='row'></div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='name'>Place Name</label>
                        <input 
                            className='form-control'
                            id='name'
                            name='name'
                            value={data.place.name}
                        required />    
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input 
                            className='form-control'
                            id='pic'
                            name='Picture'
                            value={data.place.pic}
                        required />    
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='city'>City</label>
                        <input 
                            className='form-control'
                            id='city'
                            name='city'
                            value={data.place.city}
                        required />    
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='state'>State</label>
                        <input 
                            className='form-control'
                            id='state'
                            name='state'
                            value={data.place.state}
                        required />    
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='cuisines'>Add Cuisines</label>
                        <input 
                            className='form-control'
                            id='cuisines'
                            name='cuisines'
                            value={data.place.cuisines}
                        required />    
                    </div>                    
                </form>
                <input className='btn btn-primary' type='submit' value='Add Place' />
            </main>
        </Def>
    )
}

module.exports = edit_page