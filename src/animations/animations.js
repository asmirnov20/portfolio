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
        x: '110%',
        transition: {
            duration: 0.1
        }
    }
}

export const headerAnimate = {
    initial: {
        x: -100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeIn',
        }
    },
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
    initial: {
        scale: 0
    },
    animate: {
        scale: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut',
        }
    },
}

export const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}