var filterItems = document.querySelectorAll(".main-create__filter-item");

for (var i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener("click", function(event){
    filter(this);
    tab(filterItems, this);
  });
}

function tab(filterItems, item)
{
  for (var i = 0; i < filterItems.length; i++) {
    filterItems[i].classList.remove("main-create__filter-item_active");
  }

  item.classList.add("main-create__filter-item_active");
}

function filter(element) {
  if(element.classList.contains("all")){
    var prints = document.querySelectorAll(".main-create__wrapper");

    for (var i = 0; i < prints.length; i++) {
      prints[i].style.display = "none";
      prints[i].classList.remove("animation");
    }

    for (var i = 0; i < prints.length; i++) {
      prints[i].style.display = "block";
    }

    setAnimation();

    return;
  }

  if(element.classList.contains("branding")){
    var brandings = document.querySelectorAll(".main-create__wrapper");

    for (var i = 0; i < brandings.length; i++) {
      if(!brandings[i].classList.contains("branding-item")){
        brandings[i].style.display = "none";
      }
      else {
        brandings[i].style.display = "block";
      }
    }

    setAnimation();

    return;
  }

  if(element.classList.contains("print")){
    var prints = document.querySelectorAll(".main-create__wrapper");

    for (var i = 0; i < prints.length; i++) {
      if(!prints[i].classList.contains("print-item")){
        prints[i].style.display = "none";
      }
      else {
        prints[i].style.display = "block";
      }
    }

    setAnimation();

    return;
  }

  if(element.classList.contains("design")){
    var designs = document.querySelectorAll(".main-create__wrapper");

    for (var i = 0; i < designs.length; i++) {
      if(!designs[i].classList.contains("design-item")){
        designs[i].style.display = "none";
      }
      else {
        designs[i].style.display = "block";
      }
    }

    setAnimation();

    return;
  }
}

function setAnimation()
{
  var prints = document.querySelectorAll(".main-create__wrapper");

  prints.forEach(function(node) {
    node.classList.remove("animation");
    setTimeout(function() {
      node.classList.add("animation")
    }, 10);

  });
}
