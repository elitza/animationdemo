    var scene3 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene3",
      "title": "Rotating",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    var home = scene.createActor('home.png', 10, 10, 203, 64);
  home.navigatesOnTouch('scene0');

  var actor1 = scene.createActor('actor.png', 350, 110, 240, 88);
  actor1.rotates(0.1);
  scene.write(350, 205, "actor1 rotates with a frequency of 0.1 Hertz.");
    
  var actor2 = scene.createActor('actor.png', 20, 260, 240, 88);
  actor2.rotatesOnTouch(0.2);
  scene.write(20, 355, "actor2 rotates at 0.2 Hertz when touched")

  var actor3 = scene.createActor('actor.png', 20, 410, 240, 88);
  var actor4 = scene.createActor('actor.png', 300, 410, 240, 88);
  actor3.letsRotate(actor4, 0.15, 3)
  scene.write(20, 505, "actor4 rotates with 0.15 Hertz when actor3 is touched, <br />touch again for higher speed twice.")

    

    return scene;
};
