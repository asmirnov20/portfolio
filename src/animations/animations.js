export const menuAnimate = {
    initial: {
        x: '110%',
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        }
    },
    exit: {
        x: '100%',
        transition: {
            duration: 0.3
        }
    }
}

export const headerAnimate = {
    whileInView: {
        x: [-300, 0],
        opacity: [0, 1],
        transition: {
            duration: 0.7,
            ease: 'easeInOut'
        }
    }
}
export const imageContainer = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeIn',
            delayChildren: 0.5
        }
    },
}
export const imgScale = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

export const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 0.8,
            ease: 'easeInOut'
        }
    }
}

// work

export const hoverDiv = {
    whileHover: {
        opacity: [0, 1]
    },
    transition: {
        duration: 0.25,
        ease: 'easeInOut',
        staggerChildren: 0.5
    }
}

export const linksAnimate = {
    whileInView: {
        scale: [0, 1]
    },
    whileHover: {
        scale: [1, 1.2]
    },
    transition: {
        duration: 0.15
    }
}

//  about 
export const aboutContainer = {
    whileInView: {
        y: [200, 0],
        opacity: [0, 1],
        transition: {
            staggerChildren: 0.1
        }
    }
}
export const aboutItem = {
    whileInView: {
        y: [-200, 0],
        opacity: [0, 1],
    }
}