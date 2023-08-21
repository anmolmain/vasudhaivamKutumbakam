import React from 'react'

const CarasoulNav = () => {
    return (
        <div>
            <br /><br />
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://images.pexels.com/photos/6896965/pexels-photo-6896965.jpeg?auto=compress&cs=tinysrgb&w=800" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.pexels.com/photos/7385834/pexels-photo-7385834.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.pexels.com/photos/5889641/pexels-photo-5889641.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Third slide" />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default CarasoulNav;
