import { useState } from 'react';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
     place: "",
     name: "",
     age: "",
  });

  const [rows, setRows] = useState([]);

  const handleChange = (e) => {
     const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleAdd = () => {
    if(!formData.place || !formData.name || !formData.age) return;

    setRows([...rows, formData]);
    setFormData({place: "", name: "", age: ""});
  };

  const handleRemove = (index) =>{
    setRows(rows.filter((_, i) => i!== index));
  };

  const handleClear = () => {
  setFormData({ place: "", name: "", age: "" });
};


  return (
    <div className="container"> 
        <p className="subtitle">Enter Place, Name, and Age, then click Add.</p>

        <div className="form">
          <input
            name='place'
            placeholder='e.g. Mumbai'
            value={formData.place}
            onChange={handleChange}
          />

          <input
             name='name'
             placeholder='e.g. Akash'
             value={formData.name}
             onChange={handleChange}
          />

          <input
          name="age"
          placeholder="e.g. 24"
          value={formData.age}
          onChange={handleChange}
        />
        </div>

        <div className="buttons">
           <button className="add-btn" onClick={handleAdd}>Add</button>
           <button className="clear-btn" onClick={handleClear}>Clear</button>
       </div>

       {rows.length === 0 ? (
           <div className="empty">No entries yet. Add your first row!</div>
       ): (

          <table>
             <thead>
               <tr>
                  <th>Place</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th></th>
               </tr>
             </thead>
             <tboby>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td>{row.place}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>
                      <button
                    className="remove-btn"
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </button>
                    </td>
                  </tr>
                ))}
             </tboby>
          </table>
       )}
    </div>
  )
}

export default App
