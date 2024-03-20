document.addEventListener('DOMContentLoaded', () => {

    /**
     * Анимации
     */

    /**
     * Анимация ручки игрового автомата в разделе section.reg
     *
     * slotMachine {HTMLElement} Игровой автомат
     * activateButton {HTMLElement} Кнопка, к нажатию которой привязана анимация
     */
    const slotMachine = document.getElementById('slot-machine');
    const activateButton = document.getElementById('slot-machine_btn');

    // Кейфреймы движения ручки игрового автомата
    const keyframesHandleBall = [
        {translate: "0 -100px"},
        {translate: "12px 12px"},
        {translate: "0 100px"},
        {translate: "12px 12px"},
        {translate: "0 -100px"},
    ];
    const keyframesHandleLever = [
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
    //
    let isSlotMachineAnimating = false;

    activateButton.addEventListener('click', animateSlotMachineHandle);

    function animateSlotMachineHandle() {
        if (isSlotMachineAnimating) {
            return
        }

        isSlotMachineAnimating = true;

        //TODO: Попробовать переделать на промисы

        slotMachine.querySelector('.slot-machine__handle__lever').animate(keyframesHandleLever, keyframesTimings);
        slotMachine.querySelector('.slot-machine__handle__ball').animate(keyframesHandleBall, keyframesTimings);
        setTimeout(() => isSlotMachineAnimating = false, (keyframesTimings.duration + 50));

    }

    // ====================================

    const lever = slotMachine.querySelector('.slot-machine__handle__lever');
    const ball = slotMachine.querySelector('.slot-machine__handle__ball');

    const leverKeyframes = new KeyframeEffect(
        lever,
        [
            {rotate: "207deg", height: "100px"},
            {rotate: "270deg", height: "40px"},
            {rotate: "333deg", height: "100px"},
            {rotate: "270deg", height: "40px"},
            {rotate: "207deg", height: "100px"},
        ],
        {
            duration: 800,
            iterations: 1,
        }
    )


    /**
     * Конец анимации
     */

})