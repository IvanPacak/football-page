const resize = $('.resizing-img');
const clickedImg = $('.player-card-img-scale');
const exitBtn = $('.exit-btn');

clickedImg.on('click', (e) => {
    const src = e.target.style['backgroundImage'].substring(e.target.style['backgroundImage'].indexOf('"') + 1, e.target.style['backgroundImage'].lastIndexOf('"'));
    $('.resize-img').css({'display': 'block'});
    resize.attr('src', src); 
})

exitBtn.on('click', () => {
    $('.resize-img').css({'display': 'none'})
})