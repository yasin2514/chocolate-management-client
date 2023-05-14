import { Link } from 'react-router-dom';

const AddChocolate = () => {

    const handleAddChocolate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const photo = form.photo.value;
        const category = form.select.value;
        const chocolate = { name, country, photo, category };

        fetch('http://localhost:5000/chocolates', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(chocolate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('data success fully added')
                }
            })

        console.log(chocolate);
    }
    return (
        <div className='max-w-screen-lg mx-auto'>
            <h2 className='text-center text-4xl font-bold my-8'>Chocolate Management System</h2>
            <Link to={'/'} className='btn btn-outline'>All Chocolate</Link>

            <div className='my-10 bg-gray-100 p-16'>
                <div className='text-center'>
                    <h3 className='font-bold text-4xl'>New Chocolate</h3>
                    <p className='font-medium'>Use the below form to create a new product</p>
                </div>

                {/* form */}
                <form className='my-5' onSubmit={handleAddChocolate}>
                    <div className="form-control w-full mb-3">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Chocolate Name" className="input input-bordered w-full" name='name' />
                    </div>

                    <div className="form-control w-full mb-3">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <input type="text" placeholder="Country Name" className="input input-bordered w-full" name='country' />
                    </div>

                    <div className="form-control w-full mb-3">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo url" className="input input-bordered w-full" name='photo' />
                    </div>

                    <div className="form-control w-full mb-3">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select w-full" name='select'>
                            <option>Premium</option>
                            <option>Midrange</option>
                            <option>Budget</option>
                            <option>Low</option>
                        </select>
                    </div>
                    <input className='btn w-full mt-5' type="submit" value="SAVE" />
                </form>
            </div>
        </div>
    );
};

export default AddChocolate;