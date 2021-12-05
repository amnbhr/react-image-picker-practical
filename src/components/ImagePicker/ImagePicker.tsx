import React, {useRef, useState} from 'react';

import './ImagePicker.css';

interface ImagePickerProps {
    title: string;
}

const ImagePicker = (props: ImagePickerProps) => {
    const {title} = props;
    const inputRef = useRef();
    const [selectedImage, setSelectedImage] = useState()

    return (
        <div className='uploader' onClick={() => {
            if (!selectedImage) {
                inputRef.current.click()
            }
        }}>
            <span onClick={() => {
                if (selectedImage) {
                    setSelectedImage(null)
                }
            }}>
                {selectedImage ? 'Remove' : title}
            </span>

            {selectedImage && (
                <img className={'uploader'} src={selectedImage.url}/>
            )}

            <input
                ref={inputRef}
                type="file"
                accept="image/png, image/jpeg"
                onChange={onImageSelect}
            />
        </div>
    )

    function onImageSelect(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        const img = new Image();

        reader.readAsDataURL(file);
        reader.onload = (_event) => {

            setSelectedImage({
                file,
                url: reader.result
            })
        }
    }
}

export default ImagePicker;

ImagePicker.defaultProps = {
    title: 'Pick Image'
}
