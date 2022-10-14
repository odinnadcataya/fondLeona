const filterQuickly = document.querySelector('.filter-quickly');
const filterDone = document.querySelector('.filter-done');
const filterCat = document.querySelector('.filter-cat');
const filterDog = document.querySelector('.filter-dog');
const filterClean = document.querySelector('.filter-clean');

filterQuickly.addEventListener('click', function(event){
    filterQuickly.classList.toggle('filter-quickly_checked');
});
filterDone.addEventListener('click', function (event) {
    filterDone.classList.toggle('filter-done_checked');
});
filterCat.addEventListener('click', function (event) {
    filterCat.classList.toggle('filter-cat_checked');
});
filterDog.addEventListener('click', function (event) {
    filterDog.classList.toggle('filter-dog_checked');
});
filterClean.addEventListener('click', function (event) {
    filterQuickly.classList.remove('filter-quickly_checked');
    filterDone.classList.remove('filter-done_checked');
    filterCat.classList.remove('filter-cat_checked');
    filterDog.classList.remove('filter-dog_checked');
});