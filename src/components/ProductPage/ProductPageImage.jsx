function BookPageProductImage({img}) {
    return (
        <div id="product-page-hero-img-container">
            <div id="product-page-hero-img" className='h-full grid place-content-center'>
                <img src={img} alt="" />
            </div>
        </div>
     );
}

export default BookPageProductImage;