import Navbar from "./Navbar"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import * as React from 'react';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
export default function UploadCar(){
    const [eventTypes, setEventTypes] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', images);
        formData.append('eventTypes', eventTypes);
        formData.append('description', description);

        try {
            const response = await axios.post('http://localhost:5000/gallery', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            console.log(response.data);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Uploaded Successfully",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            console.error('Error uploading image:', error);
        }
    };

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return(
        
        <>
<Navbar/>
<form onSubmit={handleSubmit}>
                                        <div class="mb-3">
                                            <label class="form-label">Event Type</label>
                                            <input type="text" onChange={(e) => setEventTypes(e.target.value)} class="form-control" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Description</label>
                                            <input type="text" onChange={(e) => setDescription(e.target.value)} class="form-control" />
                                        </div>
                                        <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                        </div>
                                        <Button
                                            component="label"
                                            role={undefined}
                                            variant="contained"
                                            tabIndex={-1}
                                            startIcon={<CloudUploadIcon />}
                                        >
                                            Upload file
                                            <VisuallyHiddenInput type="file" onChange={(e) => setImages(e.target.files[0])} />
                                        </Button>
                                        <br />
                                        <br />
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
        </>
    )
}