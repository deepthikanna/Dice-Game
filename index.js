// <script>
document.querySelector("h1").innerHTML="START THE GAME ! ";
	document.addEventListener("click",startTheGame);
	function startTheGame()
	{
			var rn1 = Math.floor(Math.random() * 6) + 1;
			var rn2 = Math.floor(Math.random() * 6) + 1;
			document.querySelector(".img1").setAttribute("src",	"dice" + rn1 + ".png");
			document.querySelector(".img2").setAttribute("src",	"dice" + rn2 + ".png");

			if (rn1 === rn2)
			{
				document.querySelector("h1").innerHTML = "DRAW! &#128540";
			}

			else if (rn1 < rn2)
			 {
				document.querySelector("h1").innerHTML	=  "PLAYER2 WINS!&#128079 " ;
			}

			else
			{
				document.querySelector("h1").innerHTML= "PLAYER1 WINS!&#128079";
			}
	}
	//  window.addEventListener('keydown',(event)=>
	//  {
	//    alert(event.key);
	//   console.log(event);
	// });
