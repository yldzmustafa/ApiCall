function ImageItem(image) {
    console.log(image)
    return (
        <div>
            <img className="imageList-img" src={image.image.urls.small} alt={image.image.alt_description} />
        </div>
    );
}

export default ImageItem;