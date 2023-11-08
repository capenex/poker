const colors = ["red","blue","green","white","black","gold"];
	function your_turn(){//标识现在是用户的回合，之后应修改为服务器发送
		//tips显示”轮到你了“
		enable_bookedcard();
		enable_cardontable();
		enable_jewelontable();
	}
	
	function enable_jewelontable(){
		for (i=0;i<5;i++){
			var button = document.getElementById('j'+colors[i]);
			if (button.innerText > 0) button.disabled = false;
		}
	}
	function enable_cardontable(){
		for (i=0;i<5;i++){
			for (j=1;j<4;j++){
				var button = document.getElementById("row" + j + "card" + i);
				if (button.innerText.length > 0) button.disabled = false;
			}
		}
	}
	function enable_bookedcard(){
		for (j=0;j<3;j++){
			var button = document.getElementById("bookedcard" + j);
			if (button.innerText.length > 0) button.disabled = false;
		}
	}
var next_color = "green";	
	function c(rowicardj){
        var card = document.getElementById(rowicardj);
        if (next_color == "green") {
            card.style.backgroundColor = "red";
            next_color = "red";
        } else {
            next_color = "green";
            card.style.backgroundColor = "green";
        }
		disable_bookedcard();
		disable_jewelontable();
		//if (canbuy){
			
			document.getElementById("buy").visibility = visible;
		//}
		//if (canbook){
			
			document.getElementById("book").visibility = visible;
		//}
		
	}
	function j(jcolor){
		
	}
	
	
	function retake(){
		
	}
	
	function enable_myjewel(){
		for (i=0;i<6;i++){
			var button = document.getElementById('mj'+colors[i]);
			if (button.innerText > 0) button.disabled = false;
		}
	}