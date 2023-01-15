function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
function initBackgroundAnimation(bubbleContainer, bubbleBox) {
    const bubbleRotate = [{transform: 'rotate(0deg)'}, {transform: 'rotate(360deg)'}]
    const bubbleMoveDown = [{transform: 'translateY(-100%) scale(0)'}, {transform: `translateY(${innerHeight}px) scale(1)`}];
    document.querySelectorAll(bubbleContainer)
        .forEach(el => {
            let bubble = el.querySelector(bubbleBox)
            let bubbleSize = randomIntFromInterval(50, 300)
            bubble.style.width = `${bubbleSize}px`
            bubble.style.height = `${bubbleSize}px`
            el.style.left = `${randomIntFromInterval(0, innerWidth)}px`
            setTimeout(() => {
                bubble.animate(bubbleRotate, {duration: randomIntFromInterval(5000, 10000), iterations: Infinity})
                el.animate(bubbleMoveDown, {duration: randomIntFromInterval(10000, 15000), iterations: Infinity})
            }, randomIntFromInterval(300, 5000))
        })
}
function startTypingEffect(el, text) {
    el.innerText = text
    el.style.width = `${text.length}ch`
    el.animate([{borderColor: '#78cc6d'}, {borderColor: 'transparent'}, {borderColor: '#78cc6d'}],
        {
            duration: 750,
            iterations: Infinity,
            easing: 'cubic-bezier(0, 0, 1, 1)'
        })
    el.animate([{width: '0ch'}, {width: `${text.length}ch`}],
        {
            duration: 4000,
            iterations: Infinity,
            direction: 'alternate',
            easing: `steps(${text.length})`,
        })
}
function initCircledAnimation() {
    const circularProgress = document.querySelectorAll(".circular-progress")
    const speed = 20
    circularProgress.forEach(el => {
        const progressEndValue = randomIntFromInterval(0, 100)
        const progressValue = el.querySelector(".progress-value")
        let progressStartValue = 0
        const intervalID = setInterval(() => {
            progressStartValue++
            progressValue.textContent = `${progressStartValue}%`
            el.style.background = `conic-gradient(#78cc6d ${progressStartValue * 3.6}deg,#eeeeee 0deg)`
            if (progressStartValue === progressEndValue) clearInterval(intervalID)
        }, speed)

    })
}

startTypingEffect(document.querySelector('.subtitle-typed'), "I am a developer")
initBackgroundAnimation('.bubble__container', '.bubble')

const options = {
    root: document.querySelector('.resume'),
    rootMargin: '0px',
    threshold: 1.0,
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) initCircledAnimation()
    })
}, options)
observer.observe(document.querySelector('.coding__observer'))

/*animation progress bar*/
const observerSkillsList=new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.skills__list__percentage').forEach(el=>{
                el.animate([{width: '0%'}, {width: `${el.style.width}%`}],{
                    duration: 750,
                    iterations: 1,
                    easing: 'cubic-bezier(0, 0, 1, 1)'
                })
            })
        }
    })
}, options)
observerSkillsList.observe(document.querySelector('.skills__list'))
