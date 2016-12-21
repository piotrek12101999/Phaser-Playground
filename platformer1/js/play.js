var playState = {

	 create: function() {	
	 	game.add.sprite(0, 0, 'background2');

	 	player = game.add.sprite(10, 10, 'monster1');
		player.animations.add('stand', [0, 1, 2], 5, true);

		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
   		player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

        platforms = game.add.group();
        platforms.enableBody = true;
        var platform1 = platforms.create(0, 300, 'platform');
        platform1.body.immovable = true;
        var platform2 = platforms.create(197, 300, 'platform');
        platform2.body.immovable = true;
        var platform3 = platforms.create(506, 300, 'platform');
        platform3.body.immovable = true;

        killers = game.add.group();
        killers.enableBody = true;
        lava = killers.create(141, 332, 'lava');
        lava.body.immovable = true;
        lava2 = killers.create(338, 332, 'lava');
        lava2.body.immovable = true;
        lava3 = killers.create(394, 332, 'lava');
        lava3.body.immovable = true;
        lava4 = killers.create(450, 332, 'lava');
        lava4.body.immovable = true;

        // lava = game.add.sprite(141, 332, 'lava');
        // game.physics.arcade.enable(lava);
       
        lava.animations.add('stand', [0, 1], 2, true);
        lava2.animations.add('stand', [0, 1], 2, true);
        lava3.animations.add('stand', [0, 1], 2, true);
        lava4.animations.add('stand', [0, 1], 2, true);

        cursors = game.input.keyboard.createCursorKeys();
	 },

	 update: function() {   
	 	game.physics.arcade.collide(player, platforms);

	 	player.animations.play('stand');
	 	lava.animations.play('stand');
	 	lava2.animations.play('stand');
	 	lava3.animations.play('stand');
	 	lava4.animations.play('stand');


		player.body.velocity.x = 0;
		if (cursors.left.isDown) 
		{
	        player.body.velocity.x = -150;
	    }
	    else if (cursors.right.isDown) 
	    {
	        player.body.velocity.x = 150;
	    }
	    if (cursors.up.isDown && player.body.touching.down)
	    {
	    	game.sound.play('jump');
	        player.body.velocity.y = -150;
	    }

	    game.physics.arcade.overlap(player, killers, this.die, null, this);
	 },

	 die: function(){
	 	game.sound.play('die');
	 	player.x = -1000;
	 	setTimeout(function(){
	    	player.x = 10;
		 	player.y = 10;
		}, 600);
	 	
	 },

};