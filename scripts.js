document.addEventListener('DOMContentLoaded', () => {

    /**
     * Анимация ручки игрового автомата в разделе section.reg
     * @type {HTMLElement}
     */
    const slotMachine = document.getElementById('slot-machine');
    const handleBallKeyframes = [
        {translate: "0 -100px"},
        {translate: "12px 12px"},
        {translate: "0 100px"},
        {translate: "12px 12px"},
        {translate: "0 -100px"},
    ];
    const handleLeverKeyframes = [
        {rotate: "207deg", height: "100px"},
        {rotate: "270deg", height: "40px"},
        {rotate: "333deg", height: "100px"},
        {rotate: "270deg", height: "40px"},
        {rotate: "207deg", height: "100px"},
    ];
    const keyframesTimings = {
        duration: 800,
        iterations: 1,
    };
    let isSlotMachineAnimating = false;

    document.getElementById('slot-machine_btn').addEventListener('click', animateSlotMachineHandle);

    function animateSlotMachineHandle() {
        if (isSlotMachineAnimating) {
            return
        }

        isSlotMachineAnimating = true;

        slotMachine.querySelector('.slot-machine__handle__lever').animate(handleLeverKeyframes, keyframesTimings)
        slotMachine.querySelector('.slot-machine__handle__ball').animate(handleBallKeyframes, keyframesTimings)
        setTimeout(() => isSlotMachineAnimating = false, (keyframesTimings.duration + 50))
    }
    /**
     * Конец анимации
     * @type {HTMLElement}
     */

})