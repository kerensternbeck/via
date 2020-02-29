import React from 'react';

export default function Image({ imgsrc }) {
    if (!imgsrc) {
        return (
            <div className="image-holder empty" />
        )
    }
    return (
        <div className="image-holder" style={{ backgroundImage: `url(${imgsrc})` }} />
    );
}