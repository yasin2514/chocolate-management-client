import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Chocolate from './components/Chocolate';

const App = () => {
  const loadedChocolates = useLoaderData();
  const [chocolates, setChocolates] = useState(loadedChocolates)
  return (
    <div className='max-w-screen-lg mx-auto'>
      <h2 className='text-center text-4xl font-bold my-8'>Chocolate Management System</h2>
      <Link to={'/addChocolate'} className='btn btn-outline'>+ New Chocolate</Link>

      <div className="overflow-x-auto w-full my-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Country/Factory</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              chocolates.map(chocolate => <Chocolate
                key={chocolate._id}
                chocolate={chocolate}
                chocolates={chocolates}
                setChocolates={setChocolates}
              ></Chocolate>)
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default App;