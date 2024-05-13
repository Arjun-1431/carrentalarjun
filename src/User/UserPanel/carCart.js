import React from 'react';
import "./cssfiles/carCart.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';

function CarCart() {
  const navigate = useNavigate()

  const handleLogin=()=>{
    navigate('/LiveCondition')
  }


  const [personId, setPersonId] = useState('');
  const [details, setDetails] = useState([]);
  useEffect(() => {
    // Fetch the personId from the database
    axios.get('http://localhost:5001/getPersonId')
        .then(response => {
            // Set the personId state with the fetched value
            setPersonId(response.data.personId);
        })
        .catch(error => {
            console.log(error);
        });
}, []);

useEffect(() => {
  // Make sure personId is not empty before making the request
  if (personId) {
      // Fetch the details based on the fetched personId
      axios.get(`http://localhost:5001/getalldetail/${personId}`)
          .then(response => {
              // Log the response data to check its structure
              console.log(response.data);
              // Set the details state with the fetched data
              setDetails(response.data);
          })
          .catch(error => {
              console.log(error);
          });
  }
}, [personId]);




  return (
    <>
    <div>
   
      <div className="container text-center">
        <h1>Car List</h1>
        <span>
          Car Rent With<i className="zmdi zmdi-favorite red"></i><strong>Arjun Singh</strong> 
        </span>
      </div>

      <div className="shell">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wsk-cp-product">
                <div className="wsk-cp-img">
                  <img src={require('./Assets/car1.jpg')} alt="Product" className="img-responsive" />
                </div>
                <div className="wsk-cp-text">
                  <div className="category">
                    <span>Swift</span>
                  </div>
                  <div className="title-product">
                  <p>Limit: 250km/day; Exceed incurs ₹9/KM charge</p>
                  </div>
                  <div className="description-prod" style={{padding:'3px'}}>
                  <i class="fa-solid fa-oil-can"></i>Diesel
                  <i class="fa-solid fa-person"></i>4 Person
                  </div>
                  <div className="card-footer">
                  {details.map((details) => (
       
                    <div className="wcf-left" key={details._id}><span className="price">{details.total}</span></div>
                  ))}
                    <div className="wcf-right"><i><a onClick={handleLogin} class="wsk-btn">Book</a></i></div>
                  </div>
                </div>
              </div>
            </div>
          
           
          
          </div>
        </div>
      </div>
        
    </div>
    </>
  );
}

export default CarCart;
