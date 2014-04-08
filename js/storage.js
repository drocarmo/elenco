'use strict';

;(function(w){

	var elencoStore = {};

	/**
	 *	Set the storage clean
	 */
	chrome.storage.sync.get('elencoList', function(d){
		if (!d.elencoList || !d.elencoList.length) chrome.storage.sync.set({elencoList:[]});
	});


	/**
	 *	Get items from the store
	 *	@method getItems
	 *	@param {Function} cb
	 */
	elencoStore.getItems = function(cb) {
		if (!cb) throw 'No callback passed to elencoStore#getItems()';
		getAll(cb);
	};

	/**
	 *	Update an item
	 *	@method updateItem
	 *	@param {Number} index
	 *	@param {String} text
	 *	@param {Function} cb
	 */
	elencoStore.updateItem = function(index, text, cb) {
		index = parseInt(index, 10);

		getAll(function(items){
			items[index] = text;
			setAll(items, function(e){
				cb();
			});
		});
	};

	/**
	 *	Add an item to the store
	 *	@method addItem
	 *	@param {String} item - eg: 'this is my item from the list'
	 *	@param {Function} callback
	 */
	elencoStore.addItem = function(item, cb) {
		if (!item || !cb) throw 'Invalid data passed to elencoStore#addItem()';

		this.getItems(function(data){
			data.unshift(item);
			setAll(data, function(e){
				getAll(cb);
			});
		});
	};

	/**
	 *	Remove an item from the store
	 *	@method removeItem
	 *	@param {String} item - eg: 'this is my item from the list'
	 *	@param {Function} callback
	 */
	elencoStore.removeItem = function(item, cb) {
		if (!item && !cb) throw 'Invalid data passed to elencoStore#removeItem()';
		cb = cb || noop;

		this.getItems(function(data){
			var index = data.indexOf(item);
			if (!~index) return cb(true);
			data.splice(index, 1);

			setAll(data, function(e){
				cb(false);
			});
		});
	};

	/**
	 *	Swap two items in the store
	 *	@method swapItems
	 *	@param {String} item - the item you want to move; eg: 'this is my item from the list'
	 *	@param {String} after - thie item you want that item to come after; eg: 'this is now before that item'
	 *	If you are moving an item to the beginning of the list, pass `0` as after eg:
	 *
	 *	elencoStore.swapItems('my task item', 0, function(items){
	 *		// donezo
	 *	});
	 *
	 *	@param {Function} callback
	 */
	elencoStore.swapItems = function(item, after, cb) {
		cb = cb || noop;
		this.getItems(function(data){
			var toMove = data.indexOf(item);
			data.splice(toMove, 1);

			// if 0 was passed as `after` this will return -1 which is what we want
			var afterIndex = data.indexOf(after);
			data.splice(afterIndex+1, 0, item);

			setAll(data, function(e){
				getAll(cb);
			});
		});
	};

	/**
	 *	Remove all list items
	 *	@method removeAll
	 *	@param {Function} cb
	 */
	elencoStore.removeAll = function(cb) {
		cb = cb || noop;
		setAll([], cb);
	};

	/**
	 *	Overwrite all list items
	 *	@method setAll
	 *	@param {Array} arr
	 *	@param {Function} cb
	 *	@api private
	 */
	function setAll (arr, cb) {
		arr = arr || [];
		chrome.storage.sync.set({elencoList:arr}, cb);
	}

	/**
	 *	Get all list items
	 *	@method getAll
	 *	@param {Function} cb
	 *	@api private
	 */
	function getAll (cb) {
		chrome.storage.sync.get('elencoList', function(data){
			cb(data.elencoList || []);
		});
	}

	/*
	*
	* Store color schemes selection
	*
	*/

	elencoStore.setColorScheme = function(scheme) {
		chrome.storage.sync.set({colorScheme: scheme});
	};

	/*
	*
	* Get color scheme
	*
	*/

	elencoStore.getColorScheme = function(cb) {
		chrome.storage.sync.get('colorScheme', function(data) {
			cb(data.colorScheme);
		});
	}

	/**
	 *	No Operation
	 *	@api private
	 */

	function noop () { }

	w.elencoStore = elencoStore;

}(window));
