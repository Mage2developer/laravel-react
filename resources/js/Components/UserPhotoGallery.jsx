import React from "react";
import FsLightbox from "fslightbox-react";

const UserPhotoGallery = ({
    userImages = [],
    toggler,
    slideIndex,
    setToggler,
    setSlideIndex,
}) => {
    // console.log(userImages);
    const photoUrls = userImages.map((photo) => `/${photo.image_path}`);

    return (
        <div>
            {userImages.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {userImages.map((photo, index) => (
                            <div
                                key={index}
                                className="bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                            >
                                <img
                                    src={`/${photo.image_path}`}
                                    alt={`Photo ${index + 1}`}
                                    className="w-full h-64 object-cover"
                                    onClick={() => {
                                        setSlideIndex(index + 1);
                                        setToggler(!toggler);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <FsLightbox
                        toggler={toggler}
                        sources={photoUrls}
                        slide={slideIndex}
                        exitFullscreenOnClose={true}
                    />
                </>
            ) : (
                <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="text-md font-medium text-gray-700">No photos available</span>
                </div>
            )}
        </div>
    );
};

export default UserPhotoGallery;
