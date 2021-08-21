const app = new SpeRuntime.Application();

const changeScene = () => {
    if (window.innerWidth <= 500) {
        app.start('./scene-mobile.json');
    } else {
        app.start('./scene-desktop.json')
    }
}

changeScene();

window.addEventListener('resize', () => {
    changeScene();
})
