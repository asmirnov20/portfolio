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