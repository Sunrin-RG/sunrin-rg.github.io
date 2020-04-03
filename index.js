window.onload = () => {
    var timeline = document.querySelector('#curriculum .timeline');
    var scrollThumb = document.querySelector('#curriculum .scrollbar .thumb');

    timeline.addEventListener('scroll', () => {
        scrollThumb.style.left = (timeline.scrollLeft / (timeline.scrollWidth / 2)) * 208 + 'px';
    });
}