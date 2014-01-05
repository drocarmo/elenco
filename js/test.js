elencoStore.removeAll(function(){
	elencoStore.getItems(function(d){
		console.log(d);
		elencoStore.addItem('this is a test', function(d){
			console.log(d);
			elencoStore.addItem('this is a test 2', function(d){
				console.log(d);
				elencoStore.addItem('this is a test 3', function(d){
					console.log(d);
					elencoStore.getItems(function(d){
						console.log(d);
						elencoStore.swapItems('this is a test 3', 'this is a test', function(data){
							if (data[2] != 'this is a test 3') throw 'Bad move';
							if (data[1] != 'this is a test') throw 'Bad move';

							elencoStore.addItem('this is a test 4', function(d){
								elencoStore.swapItems('this is a test 4', 'this is a test 3', function(data){
									console.log(data);
									if (data[3] != 'this is a test 4') throw 'Bad move';
									if (data[2] != 'this is a test 3') throw 'Bad move';
								});
							});
						});
					});
				});
			});
		});
	});
});
