var scene9 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene9",
      "title": "Moving To",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

  var home = scene.createActor('home.png', 40, 40, 203, 64);
  home.navigatesOnTouch('scene0');

  var box1 = scene.createActor('actor.png', 50, 100, 240, 70);
  box1.movesTo(500, 250, 3, 3);

  var box2 = scene.createActor('actor.png', 500, 100, 240, 70);
  box2.movesToOnTouch(50, 200, 3, 3);
 
  var arrow1 = scene.createActor('arrow-left.png', 30, 430, 100, 100);
  arrow1.navigatesOnTouch('scene8', 'arrow-left.png');

  var arrow2 = scene.createActor('arrow-right.png', 610, 430, 100, 100);
  arrow2.navigatesOnTouch('scene10', 'arrow-right.png');

  scene.write(10, 10, "box.movesTo(500, 500, 1, 1);");

    

  return scene;
};
