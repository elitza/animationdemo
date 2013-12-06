var scene10 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene10",
      "title": "Szene 10",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);


    var home = scene.createActor('home.png', 40, 40, 203, 64);
  home.navigatesOnTouch('scene0');
  
  var box2 = scene.createActor('actor.png', 500, 140, 240, 88);
  // box2.movesToAndBackOnTouch(50, 200, 1, 1);
 
  var arrow1 = scene.createActor('arrow-left.png', 30, 430, 100, 100);
  arrow1.navigatesOnTouch('scene9', 'arrow-right-active.png');

  var arrow2 = scene.createActor('arrow-right.png', 610, 430, 100, 100);
  arrow2.navigatesOnTouch('scene11', 'arrow-right-active.png');

  scene.write(10, 10, "box.movesToAndBackOnTouch(500, 500, 1, 1);");


  return scene;
};
