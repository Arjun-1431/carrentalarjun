

import React, { useEffect } from 'react';
import 'jquery-ui/ui/widgets/datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssfiles/getinfo.css';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Getinfo() {

  const nevigate = useNavigate()

  const [location, setLocation] = useState('');
  const [persion, setPersion] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [request, setRequest] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/details', { location, persion, startDate, endDate, request });
      Swal.fire({
        title: 'Success!',
        text: 'Detail submit successful',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      nevigate('/bookcar')


    } catch (error) {
      console.error('Error Detail user:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",

      });
    }
  };







  return (
   
    <div class="flex items-center justify-center p-12">
     
      <div class="mx-auto w-full max-w-[550px]">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
             Your Location
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Full Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
             Number of Person
            </label>
            <input
              type="number"
              name="number"
              id="number"
              required onChange={(e) => setPersion(e.target.value)}
              
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
          <input type="date" id="startdate"  name="startdate" required onChange={(e) => setStartDate(e.target.value)}/>
          </div>
          <div class="mb-5">
          <input type="date" id="startdate"  name="startdate" required onChange={(e) => setEndDate(e.target.value)}/>
          </div>
          <div class="mb-5">
            <label
              for="message"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Additional Request
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              onChange={(e) => setRequest(e.target.value)}
              placeholder="Type your message"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
}
