import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import PrimaryButton from '@/Components/PrimaryButton';
import { RxCross2 } from "react-icons/rx";
import { Link } from '@inertiajs/react'

export default function UploadProfileImagesForm({userId, className = ''}) {

    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [alert, setAlert] = useState(false);
    const [uploadedUrls, setUploadedUrls] = useState([]);
    const fileInputRef = useRef(null);

    // Constants for validation
    const MAX_IMAGES_ALLOWED = 5; // New constant for maximum number of images
    const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp']; // Allowed image MIME types

    const fetchImages = async (userId) => {
        try {
            const response = await axios.get(`/profileImages/user/${userId}`);

            setUploadedUrls(response.data.images);
        } catch (error) {
            console.log('AJAX call error: ', error);
        }
    };

    useEffect(() => {
        fetchImages(userId);

        if (alert) {
            setTimeout(() => {
                setAlert(false);
                setSuccessMessage('');
                setErrorMessage('');
            }, 3000);
        }
    }, [alert]);

    const clearInputRef = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setSuccessMessage('');
        setErrorMessage('');
        setImages([]);
        setPreviews([]);

        if (files.length === 0) {
            return;
        }

        // Validate maximum number of files
        if (files.length > MAX_IMAGES_ALLOWED) {
            setErrorMessage(`You can upload a maximum of ${MAX_IMAGES_ALLOWED} images at once.`);
            setAlert(true);
            return;
        }

        let validFiles = [];
        let hasError = false;

        files.forEach(file => {
            // Validate file type
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                setErrorMessage(`Invalid file type: ${file.name}. Only JPEG, PNG, GIF, and WebP images are allowed.`);
                setAlert(true);
                hasError = true;
                return; // Skip this file, but continue checking others if needed (though error stops flow here)
            }

            validFiles.push(file);

            // Generate preview URL for each valid file
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(prevPreviews => [...prevPreviews, reader.result]);
            };
            reader.readAsDataURL(file);
        });


        if (!hasError) {
            setImages(validFiles);
        } else {
            setImages([]); // Clear files if any error occurred
            setPreviews([]);
        }
    };

    const uploadProfileImages = async (e) => {
        e.preventDefault();

        console.log(userId);


        if (uploadedUrls.length >= 5) {
            setErrorMessage('You can add maximum 5 images');
            setAlert(true);
            return;
        }

        if (!images.length) {
            setErrorMessage('Please select at least one image');
            setAlert(true);
            return;
        }

        const formData = new FormData();
        images.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
        });

        try {
            const response = await axios.post(`/profileImages/user/${userId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            if (response.data.success) {
                setSuccessMessage(response.data.message);
            }
            else {
                setErrorMessage(response.data.message);
            }
            setAlert(true);

            fetchImages();
            setImages([]);
            setPreviews([]);
            clearInputRef();
        } catch (error) {
            setErrorMessage(error.response.data.message);
            setAlert(true);
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

            if (response.data.success) {
                setSuccessMessage(response.data.message);
            }
            else {
                setErrorMessage(response.data.message);
            }
            setAlert(true);
        } catch (error) {
            setErrorMessage('Failed to delete image');
        }
    };

    return (
        <section className={className}>
            <div className="mt-3 mb-6 bg-red-50 border-l-4 border-red-400 text-red-800 p-4 rounded-md">
                <p className="font-semibold text-lg mb-2">Important Notes:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                    <li>
                        <span className="font-medium">Allowed File Types:</span> Only JPEG, JPG, PNG, and WebP images
                        are accepted.
                    </li>
                    <li>
                        <span className="font-medium">Maximum Images:</span> You can upload up
                        to {MAX_IMAGES_ALLOWED} images at once.
                    </li>
                </ul>
            </div>

            <form onSubmit={uploadProfileImages} className="mt-6 space-y-6">

                <div>
                    <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">
                        Select Image(s):
                    </label>
                    <div
                        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed
                        rounded-xl cursor-pointer hover:border-red-400 transition-all duration-300 relative">
                        <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            multiple // Allow multiple file selection
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleImageChange}
                            accept={ALLOWED_FILE_TYPES.join(',')} // Specifies accepted file types for browser
                        />
                        <div className="text-center">
                            {previews.length > 0 ? (
                                <div className="flex flex-wrap justify-center gap-2 mb-2">
                                    {previews.map((previewUrl, index) => (
                                        <img
                                            key={index}
                                            src={previewUrl}
                                            alt={`File Preview ${index + 1}`}
                                            className="h-20 w-20 object-contain rounded-lg shadow-sm border border-gray-200"
                                        />
                                    ))}
                                </div>
                            ) : (<></>)}
                            <p className="mt-1 text-sm text-gray-600">
                                {images.length > 0 ? (
                                    <span className="font-medium text-red-700">
                                      {images.length} file(s) selected
                                    </span>
                                ) : (
                                    <>
                                        <span className="font-semibold text-red-600">Click to upload</span> or drag and
                                        drop
                                    </>
                                )}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">JPEG, JPG, PNG, WebP,
                                Max {MAX_IMAGES_ALLOWED} images</p>
                        </div>
                    </div>
                </div>

                <div>
                    <PrimaryButton>Save</PrimaryButton>
                </div>

            </form>

            <div className={`${alert ? 'visible' : 'hidden'} mt-3`}>
                {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}
                {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
            </div>

            {uploadedUrls.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-lg font-medium mb-2">Uploaded Images:</h2>
                    <div className="flex gap-8 mt-4">
                        {uploadedUrls.map((url) => (
                            <div key={url.id} className="relative group">
                                <img key={url.id} src={"/" + url.image_path} alt={`uploaded-${url.id}`}
                                     className="w-32 h-32 object-cover"/>
                                <button title="Do you want delete this image?" type="button"
                                        onClick={() => handleRemove(url.id)}
                                        className="absolute bg-[#ff3131] top-0 text-[#fff] rounded-full p-1 text-sm right-0">
                                    <RxCross2/>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
