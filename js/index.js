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
function startTypingEffect(el,text){
    el.innerText=text
    el.style.width=`${text.length}ch`
    el.animate([{borderColor:'#78cc6d'},{borderColor:'transparent'},{borderColor:'#78cc6d'}],
        {
            duration:750,
            iterations: Infinity,
            easing: 'cubic-bezier(0, 0, 1, 1)'
        })
    el.animate([{width:'0ch'},{width:`${text.length}ch`}],
        {
            duration:4000,
            iterations: Infinity,
            direction: 'alternate',
            easing:`steps(${text.length})`,
        })
}

startTypingEffect(document.querySelector('.subtitle-typed'), "I am a developer")
initBackgroundAnimation('.bubble__container', '.bubble')
