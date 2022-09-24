import ImageUploading from 'react-images-uploading';
import { useState } from 'react';

import './ImageUpload.scss';

export default function ImageUpload({handleImageUpload, setCurrentImage}) {
    const [images, setImages] = useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
        setCurrentImage(imageList[0]);
        handleImageUpload(imageList);
    };

    return (
        <ImageUploading
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
        >
            {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
            }) => (
                <div className="image-upload-wrapper">
                    {imageList.length === 0 ? (
                        <div
                        className={isDragging ? "image-upload-button dragging" : "image-upload-button"}
                        onClick={onImageUpload}
                        {...dragProps}
                    >
                        {isDragging ? "Solte a imagem aqui" : "Clique ou arraste a imagem aqui"}
                    </div>
                    ) : null}
                    {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image['data_url']} alt="" width="100" />
                            <div className="image-item-btn-wrapper">
                                <div className="image-uploaded-button" onClick={() => onImageUpdate(index)}>Update</div>
                                <div className="image-uploaded-button" onClick={() => onImageRemove(index)}>Remove</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </ImageUploading>
    );
}