document.getElementById('a-scroll').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('e-scroll').addEventListener('click', function() {
    document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('p-scroll').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('top-scroll').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});