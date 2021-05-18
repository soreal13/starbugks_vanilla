const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    // 익명함수 핸들러 안에 로직
    searchInputEl.focus(); 
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('foused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('foused');
    searchInputEl.setAttribute('placeholder', '');
});
