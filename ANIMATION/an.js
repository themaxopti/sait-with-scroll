$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})

$('.item-img').hover(
    function(){
        this.animate({
            'background-size':'550px',
            'filter':'blur(1px)'
        },4000)
    }
)




$('.submit').click(function (params) {
    $('.submit').css({
        'border-bottom':'4px solid #0a043c'
    })
})
   




const form = document.querySelectorAll('.form')[0]

form.addEventListener('submit',function(event){
    event.preventDefault()

    const modalForm = document.querySelector('.modal-form')

    const formMustName = document.querySelector('.form-must')
    const formMustPassword = document.querySelector('.form-must-two') 
    const formMustCheckbox = document.querySelector('.form-must-three')
    const formMustRadioBtn =  document.querySelector('.form-must-four')

    const checkbox =  document.querySelector('#check-box')
    const radioBtnReal =  document.querySelectorAll('.radio')
    const checkbox2 = document.querySelector('.check-box-class')
    const checkbox3 = document.querySelector('.check-box-class-two')

    const name = form.name.value
    const password = form.password.value

    let fail = ''
    
    if(name == '') {
        formMustName.innerHTML = 'Придумайте имя'
        return false
    }
    else if(name.search(/[A-Z А-Я]/) === -1){
        formMustName.innerHTML = 'Имя с большой буквы'
        return false
    }
    else if(name.length < 8){
        formMustName.innerHTML = 'Введите больше символов'
        return false
    } 

    if (password == ''){
        formMustPassword.innerHTML = 'Придумайте пароль'
        return false
    } 
    else if(password.length < 8){
        formMustPassword.innerHTML = 'Введите больше символов'
        return false
    }
    else if(password.search(/[a-z а-я]/) === -1){
        formMustPassword.innerHTML = 'Введите мал.буквы'
        return false
    }
    else if (password.search(/[A-Z А-Я]/) === -1){
        formMustPassword.innerHTML = 'Введите боль.буквы'
        return false
    }
    else if (password.search(/[1234567890]/) === -1){
        formMustPassword.innerHTML = 'Введите цифры'
        return false
}

    if (!checkbox.checked){
        formMustCheckbox.innerHTML = 'Подтвердите условия' 
        return false
    }
    if (!checkbox2.checked){
        formMustCheckbox.innerHTML = 'Подтвердите условия' 
        return false
    }
    if (!checkbox3.checked){
        formMustCheckbox.innerHTML = 'Подтвердите условия'
        return false
    }

   if(radioBtnReal[1].checked)  {
    radioBtnReal[0] = ''
   }
   else if (radioBtnReal[0].checked) {
    radioBtnReal[1] = ''
   }
   else if (!radioBtnReal.checked){
    formMustRadioBtn.innerHTML = 'Выбирете пол'
    return false
   }
   
   if (!false) {
    modalForm.style.display = 'flex'

    modalForm.addEventListener('click',(event)=>{
        if (event.target.className == 'modal-form') {
            modalForm.style.display = 'none'
        }
    })
    
   }

/*
 radioBtnReal.forEach((elem,index)=>{
    if(!elem[0].checked){
        formMustRadioBtn.innerHTML = 'Подтвердите пол'
    }
    else if(elem[index].checked){
        formMustRadioBtn.innerHTML = 'kzkzkkzkzkz'
    }
 })
*/        
   // if(fail)alert(fail) 
})







const cond = document.querySelector('.condition')
const modal = document.querySelector('.modal')

const arrov = document.querySelector('.modal-arrow-svg')
const arrov2 = document.querySelector('.modal-arrow-svg-two')

const modalContent = document.querySelector('.modal-cont')
const modalContent2 = document.querySelector('.modal-cont-two')


cond.addEventListener('click',()=>{
    modal.style.display = 'flex'
})

arrov.addEventListener('click',()=>{
    modalContent2.style.zIndex = 1007
})

arrov2.addEventListener('click',()=>{
    modalContent.style.zIndex = 4000
})



modal.addEventListener('click',(event)=>{
    if (event.target.className == 'modal') {
        modal.style.display = 'none'
    }
    //modal.style.display = 'none'
})




const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
    window.addEventListener('scroll',animOnScroll)


    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
 //               outNum(1000,'sect-cont-card-value')                              
            }else{
                
                if (!animItem.classList.contains('no-hide')) {
                    animItem.classList.remove('active')
                }
            }
        }
    }
    let time = 5000
    let step = 10
    
    function outNum(num,el) {
        let l = document.querySelector('.'+el)
        n = 0 
        let t = Math.round(time/(num/step))   
        let interval = setInterval(()=>{
            n = n + step  
            if (n === num){
                clearInterval(interval)
            }
            l.innerHTML = n
        },t) 
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageXOffset || document.documentElement.scrollLeft
        return {top:rect.top + scrollTop, left:rect.left + scrollLeft}
    }
    setTimeout(()=>{
        animOnScroll()
    },400)
}









/*
const time = 5000
const step = 10

function outNum(num,el) {
    let l = document.querySelector('.'+el)
    n = 0 
    let t = Math.round(time/(num/step))   
    let interval = setInterval(()=>{
        n = n + step  
        if (n === num){
            clearInterval(interval)
        }
        l.innerHTML = n
    },t) 
}
*/