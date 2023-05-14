
const Chocolate = ({ chocolate, setChocolates, chocolates }) => {
    const { _id, name, country, photo, category } = chocolate;

    const handleDelete = _id => {
        console.log('delete ', _id)
        fetch(`http://localhost:5000/chocolates/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('successfully delete', data);
                const remainingChocolate = chocolates.filter(item => item._id !== _id);
                setChocolates(remainingChocolate);
            })
    }
    return (
        <tr>
            <td>
                <div className=" w-32 h-20">
                    <img src={photo} alt="" className="object-contain h-full w-full" />
                </div>
            </td>
            <td>{name}</td>
            <td>{country}</td>
            <td>{category}</td>
            <td>
                <button className="btn btn-outline btn-accent btn-sm mr-1">Edit</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error btn-sm">X</button>
            </td>
        </tr>
    );
};

export default Chocolate;