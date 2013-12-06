    var scene6= function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene6",
      "title": "Pulsating",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    var home = scene.createActor('home.png', 10, 10, 203, 64);
  home.navigatesOnTouch('scene0');

  var actor1 = scene.createActor('actor.png', 20, 110, 240, 88);
  actor1.pulsates(1, 1);
  scene.write(20, 205, "actor1 pulsates with a frequency of 1 Hertz.");

  var actor2 = scene.createActor('actor.png', 20, 260, 240, 88);
  actor2.pulsates(1, 1, 1);
  scene.write(20, 355, "actor2 pulsates once on load.");

  var actor3 = scene.createActor('actor.png', 350, 260, 240, 88);
  actor3.pulsatesOnTouch(1, 1, 2, 0);
  scene.write(350, 355, "actor3 pulsates twice on touch.");

  var actor4 = scene.createActor('actor.png', 20, 410, 240, 88);
  var actor5 = scene.createActor('actor.png', 350, 410, 240, 88);
  actor4.letsPulsate(actor5, 1, 1, 2);
  scene.write(20, 505, "actor4 lets actor5 pulsate thrice on touch.");

    

    return scene;
};
