 const elementCircle = document.querySelector('.container-big-sphere')
 let windowWidth = window.innerWidth
 let windowHeight = window.innerHeight

 window.addEventListener('resize', () =>
 {
     windowWidth = window.innerWidth
     windowHeight = window.innerHeight
 })

 window.addEventListener('mousemove', (_event) =>
 {
     const x = (_event.clientX / window.innerWidth - 0.5)* 100
     const y = (_event.clientY / window.innerHeight - 0.5)* 100

     elementCircle.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
 })

const buttonRotate = document.querySelector('.make-rotate')

buttonRotate.addEventListener('click', () =>
{
    const containerCircle = document.querySelector('.container-big-circle')
    if (containerCircle.classList.contains('active-rotate-circle'))
    {
        containerCircle.classList.remove('active-rotate-circle')
    }
    else
    {
        containerCircle.classList.add('active-rotate-circle')
    }
})

const buttonDifferent = document.querySelector('.make-different')
buttonDifferent.addEventListener('click', () =>
{
 const containerSphere = document.querySelector('.container-big-circle')
 if (containerSphere.classList.contains('active-different-sphere'))
 {
     containerSphere.classList.remove('active-different-sphere')
 }
 else
 {
     containerSphere.classList.add('active-different-sphere')
 }
})


const buttonMoove = document.querySelector('.make-moove')
buttonMoove.addEventListener('click', () =>
{
 const containerSphere = document.querySelector('.container-big-sphere')
 if (containerSphere.classList.contains('active-moove-sphere'))
 {
     containerSphere.classList.remove('active-moove-sphere')
 }
 else
 {
     containerSphere.classList.add('active-moove-sphere')
 }
})


const buttonChange = document.querySelector('.make-change')
buttonChange.addEventListener('click', () =>
{
 const containerSphere = document.querySelector('.container-sphere')
 if (containerSphere.classList.contains('active-change-sphere'))
 {
     containerSphere.classList.remove('active-change-sphere')
 }
 else
 {
     containerSphere.classList.add('active-change-sphere')
 }
})
