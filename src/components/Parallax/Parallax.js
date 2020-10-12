import React, { useEffect, useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import parallaxStyle from "styles/components/parallaxStyle"

const Parallax = (props) => {
  const classes = parallaxStyle()
  const { filter, className, children, style, image, small } = props
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined,
  })

  let windowScrollTop

  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3
  } else {
    windowScrollTop = 0
  }

  const [transform, setTransform] = useState(
    `translate3d(0,${windowScrollTop}px,0)`
  )

  const resetTransform = () => {
    windowScrollTop = window.pageYOffset / 3
    setTransform(`translate3d(0,${windowScrollTop}px,0)`)
  }

  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform)
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform)
      }
    }
  })

  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: `url(${image})`,
        transform,
      }}
    >
      {children}
    </div>
  )
}

Parallax.defaultProps = {
  className: "",
  filter: false,
  style: "",
  image: "",
  small: false,
  children: null,
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
}

export default Parallax
