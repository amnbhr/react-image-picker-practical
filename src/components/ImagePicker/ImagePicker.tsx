import React from 'react';

import './ImagePicker.css';

interface ImagePickerProps {
    title: string;
}

const ImagePicker = (props: ImagePickerProps) => {
    const {title} = props;

    return (
        <div>
            <span>
                {title}
            </span>

            <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={(event) => console.log(event)}
            />
        </div>
    )
}

export default ImagePicker;

ImagePicker.defaultProps = {
    title: 'Pick Image'
}
