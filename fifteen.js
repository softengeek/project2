var pzzle;
var nums;
var emptyx;
var emptyy;

window.onload = function(){
	pzzle = document.getElementById('puzzlearea');
	
	nums = pzzle.getElementsByTagName('div');
	var x = [0, 100, 200, 300];

	for (var i = 0; i < nums.length; i++) {
        nums[i].className = "puzzlepiece";
	
		var y = i % 4;
	
		if (y == 0){
			nums[i].style.left = x[y]+ 'px';
		} else {
			if (y == 1){
				nums[i].style.left = x[y]+ 'px';
			}else {
				if (y == 2){
					nums[i].style.left = x[y]+ 'px';
				}else{
					if (y == 3){
						nums[i].style.left = x[y]+ 'px';
					}
				}
			}
		}
	
		if (i < 4){
			nums[i].style.top = x[0] + 'px';
		}

		if ( i >= 4 && i <8){
			nums[i].style.top = x[1]  + 'px';
		}

		if ( i >= 8 && i < 12){
			nums[i].style.top = x[2]  + 'px';
		}

		if ( i >= 12){
			nums[i].style.top = x[3]  + 'px';
		}

		nums[i].style.backgroundPosition= '-' + nums[i].style.left + ' ' + '-' + nums[i].style.top;
	}
	
	emptyx = '300px';
	emptyy = '300px';

	var shuffle = document.getElementById('shufflebutton');
	shuffle.onclick = function(){
		var parea = document.createElement("div");
		var randomNum;
		var usedNum = [0], ran = [];
		var flag = 0
		var i = nums.length-1;
		
	
		while (i >= 0){
			randomNum = Math.floor(Math.random() * 15);
			
			for (k = 0; k < usedNum.length; k++){
				if (randomNum == usedNum[i]){
					flag = 1;
				}
			}
			
			if (flag == 0){
				alert("uhuh")
				parea.style.top = nums[i].style.top;
				parea.style.left = nums[i].style.left;
			
				nums[i].style.top = nums[randomNum].style.top;
				nums[i].style.left = nums[randomNum].style.left;
				
				nums[randomNum].style.top = parea.style.top;
				nums[randomNum].style.left = parea.style.left;
				
				usedNum[usedNum.length] = randomNum;
			}
			i--;
		}
	};
		
	
}
