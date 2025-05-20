import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import PrimaryButton from '@/Components/PrimaryButton';
import { RxCross2 } from "react-icons/rx";

export default function UploadProfileImagesForm({userId, className = ''}) {

    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [uploadedUrls, setUploadedUrls] = useState([]);
    const fileInputRef = useRef(null);

    const fetchImages = async () => {
        try {
            const response = await axios.get(`/profileImages`);

            setUploadedUrls(response.data.images);
        } catch (error) {
            console.log('AJAX call error: ', error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const clearInputRef = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
        const previewUrls = files.map(file => URL.createObjectURL(file));
        setPreviews(previewUrls);
    };

    const uploadProfileImages = async (e) => {
        e.preventDefault();

        if (uploadedUrls.length >= 5) {
            alert('You can add maximum 5 images');
            return;
        }

        if (!images.length) {
            alert('Please select at least one image');
            return;
        }

        const formData = new FormData();
        images.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
        });

        try {
            const response = await axios.post('/profileImages', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                setMessage(response.data.message);
            }
            else {
                setErrorMessage(response.data.message);
            }

            fetchImages();
            setImages([]);
            setPreviews([]);
            clearInputRef();
        } catch (error) {
            // console.error(error);
            setErrorMessage(error.response.data.message);
        }
    };

    const handleRemovePreview = (index) => {
        const newImages = [...images];
        const newPreviews = [...previews];

        newImages.splice(index, 1);
        newPreviews.splice(index, 1);

        setImages(newImages);
        setPreviews(newPreviews);

        clearInputRef();
    };

    const handleRemove = async (imageId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this image?');
        if (!confirmDelete) return;
        try {
            const response = await axios.delete(`/profileImages/${imageId}`);

            setMessage(response.data.message);
            fetchImages();
            setImages([]);
            setPreviews([]);
        } catch (error) {
            setErrorMessage('Failed to delete image');
        }
    };

    return (<section className={className}>
            <form onSubmit={uploadProfileImages} className="mt-6 space-y-6">

                <input type="file" ref={fileInputRef} multiple accept="image/*" onChange={handleImageChange}/>

                {previews.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mt-4">
                        {previews.map((src, index) => (
                            <div key={index} className="relative group">
                                <img key={index} src={src} alt={`preview-${index}`} className="w-32 h-32 object-cover"/>
                                <button type="button" onClick={() => handleRemovePreview(index)}
                                        className="absolute top-0 right-[60px] text-gray-900 rounded-full p-1 text-sm">
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div>
                    <PrimaryButton>Save</PrimaryButton>
                </div>

            </form>

            {message && <p className="mt-4 text-green-600">{message}</p>}
            {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}

            {uploadedUrls.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-lg font-medium mb-2">Uploaded Images:</h2>
                    <div className="grid grid-cols-3 gap-2">
                        {uploadedUrls.map((url) => (
                            <div key={url.id} className="relative group">
                                <img key={url.id} src={url.image_path} alt={`uploaded-${url.id}`}
                                     className="w-32 h-32 object-cover"/>
                                <button title="Do you want delete this image?" type="button" onClick={() => handleRemove(url.id)}
                                        className="absolute top-0 right-[60px] text-gray-900 rounded-full p-1 text-sm">
                                    <RxCross2 />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>);
}
