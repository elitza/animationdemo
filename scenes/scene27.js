var scene27 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene27",
      "title": "Quiz",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);

    scene.write(10, 20, "simple quiz via meta-script", "title");
  scene.write(10, 70, "Solve the math to see the home-button!","");

  var actor1 = scene.createActor('actor.png', 10, 190, 240, 70).setText("How much is 1 + 1?");
  var actor2 = scene.createActor('actor.png', 270, 190, 240, 70).setText("2");
  var actor3 = scene.createActor('actor.png', 530, 190, 240, 70).setText("3");

  var actor4 = scene.createActor('actor.png', 10, 300, 240, 70).setText("Hoch much is 2 + 3?");
  var actor5 = scene.createActor('actor.png', 270, 300, 240, 70).setText("6");
  var actor6 = scene.createActor('actor.png', 530, 300, 240, 70).setText("5");

  var actor7 = scene.createActor('home.png', 10, 410, 203, 64);
  actor7.navigatesOnTouch('scene0');

  actor1.hasCorrectAnswer(actor2);
  actor1.hasWrongAnswer(actor3);
  actor1.hasNextQuestion(actor4);

  actor4.hasCorrectAnswer(actor6);
  actor4.hasWrongAnswer(actor5);
  actor4.hasFinalActor(actor7);
    

  return scene;
};
