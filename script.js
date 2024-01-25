const sliderContentItems = [...document.querySelectorAll(".slider-item")];

const sliderButtonLeft = document.querySelector("#slider-button-left");
const sliderButtonRight = document.querySelector("#slider-button-right");

const sliderDots = document.querySelector(".slider-dots");

const SLIDER_DIRECTION_LEFT = -1;
const SLIDER_DIRECTION_RIGHT = 1;

const handleSliderButtonsUi = () => {
    const currentActiveItem = document.querySelector(".slider-item-active");
    const currentActiveItemIndex = sliderContentItems.indexOf(currentActiveItem);

    sliderButtonLeft.classList.remove("slider-button-last");
    sliderButtonRight.classList.remove("slider-button-last");

    if (currentActiveItemIndex === 0) {
        sliderButtonLeft.classList.add("slider-button-last");
    }

    if (currentActiveItemIndex === sliderContentItems.length - 1) {
        sliderButtonRight.classList.add("slider-button-last");
    }

    document.querySelector(".slider-dot-active").classList.remove("slider-dot-active");

    document.querySelectorAll(".slider-dot")[currentActiveItemIndex].classList.add("slider-dot-active");
};

const handleSliderButtons = (direction) => {
    const currentActiveItem = document.querySelector(".slider-item-active");
    const currentActiveItemIndex = sliderContentItems.indexOf(currentActiveItem);

    const nextActiveItemIndex = currentActiveItemIndex + direction;
    const nextActiveItem = sliderContentItems[nextActiveItemIndex];

    if (!nextActiveItem) return;

    currentActiveItem.classList.remove("slider-item-active");
    nextActiveItem.classList.add("slider-item-active");

    handleSliderButtonsUi();
};

const handleSliderDot = (event, sliderItem) => {
    document.querySelector(".slider-dot-active").classList.remove("slider-dot-active");
    document.querySelector(".slider-item-active").classList.remove("slider-item-active");

    sliderItem.classList.add("slider-item-active");
    event.currentTarget.classList.add("slider-dot-active");

    handleSliderButtonsUi();
};

const renderSliderDots = () => {
    sliderContentItems.forEach((sliderItem, index) => {
        const sliderDot = document.createElement("div");
        sliderDot.classList.add("slider-dot");

        index === 0 && sliderDot.classList.add("slider-dot-active");

        sliderDot.addEventListener("click", (event) => handleSliderDot(event, sliderItem));

        sliderDots.appendChild(sliderDot);
    });
};

sliderButtonLeft.addEventListener("click", () => handleSliderButtons(SLIDER_DIRECTION_LEFT));

sliderButtonRight.addEventListener("click", () => handleSliderButtons(SLIDER_DIRECTION_RIGHT));

renderSliderDots();
