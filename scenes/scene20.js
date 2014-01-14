var scene20 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene20",
      "title": "Popup",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    var home = scene.createActor('home.png', 40, 40, 203, 64);
    home.navigatesOnTouch('scene0');
    
    var actor = scene.createActor('actor.png', 100, 100, 240, 70);
  actor.setText("click me for popup", "", "button");
  actor.hasPopupOnTouch("popup_page.html", 600, 400, 20, 30, 0);

  return scene;
};
