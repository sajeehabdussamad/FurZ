let MidVL = false;
let MidVM = true;
let MidVR = false;
let sVM = 1;

const vm = document.getElementById('VM');
const vr = document.getElementById('VR');
const vl = document.getElementById('VL');
    


document.getElementById('aboutMeBtn').addEventListener('click', function() {
    // Hide main page and show portfolio
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('portfolio').classList.add('active');

    // Remove blur effect
    document.querySelector('.background').classList.remove('blur');

    // the title of the page
    const mainTitle = document.getElementById('title');
    mainTitle.style.transition = 'transform 0.5s, opacity 0.5s';
    mainTitle.style.transform = 'translateY(-100%) translateX(-50%)';
    mainTitle.style.opacity = '0';
});

document.getElementById('portfolioBtn').addEventListener('click', function() {
    // Hide portfolio and show videos
    document.getElementById('portfolio').classList.remove('active');
    document.getElementById('videos').classList.add('active');

    vl.style.transition = 'none';
    vm.style.transition = 'none';
    vr.style.transition = 'none';
    vl.style.transform = 'translateX(0%) scale(0.8)';
    vm.style.transform = 'translateX(0%)';
    vr.style.transform = 'translateX(0%) scale(0.8)';
    MidVM = true;
    MidVR = false;
    sVM = 1;
    // Force reflow to apply the styles immediately
    vl.offsetHeight;
    vm.offsetHeight;
    vr.offsetHeight;
    // Remove the transition property to allow future transitions
    vl.style.transition = '';
    vm.style.transition = '';
    vr.style.transition = '';

    // VM video starts playing
    vm.querySelector('video').muted = false;
    vm.querySelector('video').play();
});

document.getElementById('videosBtn').addEventListener('click', function() {
    // Hide videos and show portfolio
    document.getElementById('videos').classList.remove('active');
    document.getElementById('portfolio').classList.add('active');

    const vlVideo = vl.querySelector('video');
    const vmVideo = vm.querySelector('video');
    const vrVideo = vr.querySelector('video');

    vlVideo.currentTime = 0;
    vlVideo.pause();
    vmVideo.currentTime = 0;
    vmVideo.pause();
    vrVideo.currentTime = 0;
    vrVideo.pause();
});

document.getElementById('VL').addEventListener('click', function() {
    if (MidVL === false) {
        vl.style.transform = 'translateX(100%)';
        vm.style.transform = 'translateX(100%) scale(0.8)';
        vr.style.transform = 'translateX(100%)';
        MidVL = true;
        MidVM = false;
        sVM = 2;
        vl.querySelector('video').muted = false;
        vl.querySelector('video').play();
        vm.querySelector('video').pause();
        vr.querySelector('video').pause();
    }
});

document.getElementById('VM').addEventListener('click', function() {
    if (MidVM === false) {
        if (sVM === 2) {
            vl.style.transform = 'translateX(0%) scale(0.8)';
            vm.style.transform = 'translateX(0%)';
            vr.style.transform = 'translateX(0%) scale(0.8)';
            MidVM = true;
            MidVL = false;
            sVM = 1;
            vm.querySelector('video').muted = false;
            vm.querySelector('video').play();
            vl.querySelector('video').pause();
            vr.querySelector('video').pause();
        } else if (sVM === 0) {
            vl.style.transform = 'translateX(0%) scale(0.8)';
            vm.style.transform = 'translateX(0%)';
            vr.style.transform = 'translateX(0%) scale(0.8)';
            MidVM = true;
            MidVR = false;
            sVM = 1;
            vm.querySelector('video').muted = false;
            vm.querySelector('video').play();
            vl.querySelector('video').pause();
            vr.querySelector('video').pause();
        }
    }
});

document.getElementById('VR').addEventListener('click', function() {
    if (MidVR === false) {
        vl.style.transform = 'translateX(-100%)';
        vm.style.transform = 'translateX(-100%) scale(0.8)';
        vr.style.transform = 'translateX(-100%)';
        MidVR = true;
        MidVM = false;
        sVM = 0;
        vr.querySelector('video').muted = false;
        vr.querySelector('video').play();
        vm.querySelector('video').pause();
        vl.querySelector('video').pause();
    }
});

