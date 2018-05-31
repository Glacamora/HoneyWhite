var slider = {};

slider.sliderElement = document.querySelector(".about-me");

if(slider.sliderElement != undefined || slider.sliderElement != null)
{
  slider.history = slider.sliderElement.querySelector(".history");
  slider.mission = slider.sliderElement.querySelector(".mission");
  slider.principles = slider.sliderElement.querySelector(".principles");

  slider.historyText = slider.sliderElement.querySelector(".history-text");
  slider.missionText = slider.sliderElement.querySelector(".mission-text");
  slider.principlesText = slider.sliderElement.querySelector(".principles-text");

  slider.mission.addEventListener("click", function(event){
    slider.mission.classList.add("about-me__link_active");
    slider.historyText.classList.add("about-me__content-item_hide");
    slider.principlesText.classList.add("about-me__content-item_hide");

    slider.missionText.classList.remove("about-me__content-item_hide");
    slider.history.classList.remove("about-me__link_active");
    slider.principles.classList.remove("about-me__link_active");
  });

  slider.principles.addEventListener("click", function(event){
    slider.principles.classList.add("about-me__link_active");
    slider.historyText.classList.add("about-me__content-item_hide");
    slider.missionText.classList.add("about-me__content-item_hide");

    slider.principlesText.classList.remove("about-me__content-item_hide");
    slider.history.classList.remove("about-me__link_active");
    slider.mission.classList.remove("about-me__link_active");
  });

  slider.history.addEventListener("click", function(event){
    slider.history.classList.add("about-me__link_active");
    slider.missionText.classList.add("about-me__content-item_hide");
    slider.principlesText.classList.add("about-me__content-item_hide");

    slider.historyText.classList.remove("about-me__content-item_hide");
    slider.mission.classList.remove("about-me__link_active");
    slider.principles.classList.remove("about-me__link_active");
  });
}
