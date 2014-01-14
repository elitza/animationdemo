var scene14 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene14",
      "title": "Touch Effects",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    var home = scene.createActor('home.png', 40, 40, 203, 64);
    home.navigatesOnTouch('scene0');
    
    var actor1 = scene.createActor('actors/actor1.png', 90, 90, 240, 70);
    actor1.passesTouchThrough();
    scene.write(20, 205, "actor1 lets click/through to actor2 beneath.");


  return scene;
};
