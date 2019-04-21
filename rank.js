var rankUpDown = (function($){
	var moveReady = true;

	// 생성자
	var List = function(obj){
		this.ele = obj.ele;
		this.btnUp = obj.btnUp;
		this.btnDown = obj.btnDown;
		this.listType = obj.listType;
	};

	List.prototype.init = function(){
		var _this = this;
		var $ele = $(_this.ele);
		var btnUp = _this.btnUp;
		var btnDown = _this.btnDown;
		var listType = _this.listType;

		// Up
		$ele.on("click", btnUp, function(e){
			e.preventDefault();
			
			var $target = $(this).closest(listType);
			_this.sortSetting($target.index(), "up");
		});

		// Down
		$ele.on("click", btnDown, function(e){
			e.preventDefault();
			
			var $target = $(this).closest(listType);
			_this.sortSetting($target.index(), "down");
		});
	};

	List.prototype.sortSetting = function(index, dir){
		var _this = this;
		var $ele = $(_this.ele);
		var listType = _this.listType;
		var $curEle, $nextEle;
		var curIndex = index, nextIndex;
		var maxLength = $ele.find(listType).length;
		var curTop, nextTop;
		var html = "";

		if(moveReady){
			if(dir == "up") {
				if(curIndex <= 0) return;

				nextIndex = curIndex - 1;
			}else{
				if(curIndex >= (maxLength-1)) return;

				nextIndex = curIndex + 1;
			}

			moveReady = false;

			console.log(maxLength, curIndex, nextIndex)

			$curEle = $ele.find(listType).eq(curIndex);
			$nextEle = $ele.find(listType).eq(nextIndex);

			_this.sortMotion($curEle, $nextEle, dir);
		}
	};

	List.prototype.sortMotion = function(curEle, nextEle, dir){
		var $curEle = curEle,
			$nextEle = nextEle;
		var distance = $nextEle.position().top - $curEle.position().top;

		

		TweenMax.to($nextEle, 0.5, {"y": -distance, ease:"Power1.easeOut"});	
		TweenMax.to($curEle, 0.5, {"y": distance, ease:"Power1.easeOut", onComplete:function(){
			if(dir == "up"){
				$curEle.after($nextEle.clone().attr("style", ""));
				$nextEle.remove();
			}else{
				$curEle.before($nextEle.clone().attr("style", ""));
				$nextEle.remove();
			}

			TweenMax.set($curEle, {"clearProps":"all"});
			TweenMax.set($nextEle, {"clearProps":"all"});

			moveReady = true;
		}});	

	};

	var _init = function(obj){
		var _this = new List(obj);
		_this.init();
	};

	return {
		init:_init
	}
})(jQuery);