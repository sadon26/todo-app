import React, { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Cockpit.css'
import { motion } from 'framer-motion'

function Cockpit() {
    const wrapper = React.createRef()

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    const [testimonials, setTestimonials] = useState([
        {
            id: 1,
            quote: "",
            pic: ""
        },
        {
            id: 2,
            quote: "",
            pic: ""
        },
    ])

    const imageVariants = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition: {
                duration: 1
            }
        },
    }

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        dots: true,
        fade: true,
        infinite: true,
        slidesToshow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: 'slides'
    }

    useEffect(() => {
        setTestimonials(
            [
                {
                    id: 1,
                    quote: "Working with the team was a really great experience. I'm so glad I made this decision.",
                    pic: "https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730__340.jpg"
                },
                {
                    id: 2,
                    quote: "The team was really awesome. I would definitely recommend them to anyone else.",
                    pic: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"
                },
            ]
        )
    }, [])

    return (
        <div className="wrapper">
            <Slider {...settings} ref={wrapper}>
                {testimonials.map(testimonial => (
                    <div key={testimonial.id}>
                        <div className="carousel" style={{ display: "flex" }}>
                            <motion.p variants={imageVariants} initial="hidden" animate="visible"
                                style={{ margin: 0 }}>{testimonial.quote}</motion.p>
                            <div className="images">
                                <motion.img initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 1 }}
                                    src={testimonial.pic} alt="from-pixabay" />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Cockpit
