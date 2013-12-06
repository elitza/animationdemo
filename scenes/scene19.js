var scene19 = function () {

    var sceneOptions = {
      "animation": animation,
      "id": "scene19",
      "title": "Links",
      "width": 800,
      "height": 600
    };

    var scene = new Scene(sceneOptions);

    scene.scrollingPerspective(5, 1);


    var home = scene.createActor('home.png', 40, 40, 203, 64);
    home.navigatesOnTouch('scene0');

    scene.write(100, 100, "Link opens in …");

  var actor1 = scene.createActor('actor.png', 100, 225);
  actor1.linksToNewWindow("http://mehreinfach.de");
  actor1.setText("… new window", "", "button");

  var actor2 = scene.createActor('actor.png', 450, 225);
  actor2.linksToSameWindow("http://mehreinfach.de");
  actor2.setText("… same window", "", "button");

  return scene;
};
