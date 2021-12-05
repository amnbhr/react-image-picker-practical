import React from 'react';

import './ImagePicker.css';

interface ImagePickerProps {
    title: string;
}

const ImagePicker = (props: ImagePickerProps) => {
    const {title} = props;

    return (
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <div className='uploader'>
                <span>
                    {title}
                </span>

                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(event) => console.log(event)}
                />
            </div>
        </div>
    )
}

export default ImagePicker;

ImagePicker.defaultProps = {
    title: 'Pick Image'
}
