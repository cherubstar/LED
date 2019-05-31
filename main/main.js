module.exports = function main(num) {
	
    var zero = ['._.', '|.|', '|_|'];
	var one = ['...', '..|', '..|'];
	var two = ['._.', '._|', '|_.'];
	var three = ['._.', '._|', '._|'];
	var four = ['...', '|_|', '..|'];
	var fivth = ['._.', '|_.', '._|'];
	var six = ['._.', '|_.', '|_|'];
	var seven = ['._.', '..|', '..|'];
	var eight = ['._.', '|_|', '|_|'];
	var nine = ['._.', '|_|', '..|'];
	
	var m = 0;
	var n = 0;
	var array = new Array();
	while(num > 0){
		m = num % 10;
		num = num / 10;
		num = Number.parseInt(num);
		array[n] = m;
		n++;
	}
	array.reverse();
	var result = "";
	var j = 0;
	while(j < 3){
		for(var i = 0; i < array.length; i++){
			switch(array[i]){
				case 0 : result = result + zero[j] + " ";break;
				case 1 : result = result + one[j] + " ";break;
				case 2 : result = result + two[j] + " ";break;
				case 3 : result = result + three[j] + " ";break;
				case 4 : result = result + four[j] + " ";break;
				case 5 : result = result + fivth[j] + " ";break;
				case 6 : result = result + six[j] + " ";break;
				case 7 : result = result + seven[j] + " ";break;
				case 8 : result = result + eight[j] + " ";break;
				case 9 : result = result + nine[j] + " ";break;
			}
		}
		j++;
		result = result + "\\n\n";
	}
	return result;
	
};

