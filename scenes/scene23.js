var scene23 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene23",
      "title": "Layers 2",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);


  var home = scene.createActor('home.png', 40, 40, 203, 64);
  home.navigatesOnTouch('scene0');

  scene.write(20, 110, "Layers (in development)", "title");
  scene.write(20, 145, "You can scroll this scene sideways and the actors will shift perspective.", "");

  var actor1 = scene.createActor('actors/actor1.png', 250, 230, 240, 70);
  actor1.isInLayer(10);

  var actor2 = scene.createActor('actors/actor2.png', 250, 270, 240, 70);
  actor2.isInLayer(30);

  var actor3 = scene.createActor('actors/actor3.png', 100, 350, 240, 70);
  actor3.isInLayer(50);

  var actor4 = scene.createActor('actors/actor4.png', 400, 350, 240, 70);
  actor4.isInLayer(50);

  var actor5 = scene.createActor('actors/actor5.png', 250, 420, 240, 70);
  actor5.isInLayer(100);

  return scene;
};
