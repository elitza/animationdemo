var scene7 = function () {

	var sceneOptions = {
      "animation": animation,
      "id": "scene7",
      "title": "Szene 7",
      "width": 800,
      "height": 600
	};

	var scene = new Scene(sceneOptions);

	scene.scrollingPerspective(5, 1);

	var home = scene.createActor('home.png', 10, 10, 203, 64);
  home.navigatesOnTouch('scene0');

  scene.write(20, 90, "actor1 drifts, actor 2 clones its movement");
  var actor1 = scene.createActor('actor.png', -140, 130 , 240, 88);
  var actor2 = scene.createActor('actor.png', -400, 130, 240, 88);
  actor1.drifts(2, 0);
  // actor1.resetsReactions();
  actor2.clonesMovement(actor1, -100, -100);
  // actor2.resets();

  var actor3 = scene.createActor('actor.png', 20, 300, 240, 88);
  actor3.driftsOnTouch(1, -0.5);
  // actor3.resetsReactions();
  scene.write(20, 230, "actor3 drifts on touch with a horizontal speed of 1 and a vertical speed of -0.5,<br />both actor resets when leaving screen.");

  var actor4 = scene.createActor('actor.png', 20, 470, 240, 88);
  var actor5 = scene.createActor('actor.png', 300, 470, 240, 88);
  actor4.letsDrift(actor5, 1, -0.5);
  // actor5.resetsReactions();
  scene.write(20, 430, "actor4 lets actor5 drift.");

    

	return scene;
};
