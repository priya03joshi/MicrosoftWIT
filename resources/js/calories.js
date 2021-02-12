function burnCalories()
{
	var foodEntered = document.getElementById("food").value;  // To get food from the input with id as food
	  if(foodEntered==="Pizza")
	  {
		  document.getElementById("cal").value = "You have consumed approximately 266 calories.";
		  document.getElementById("walk").value = "Walk for approximately 60 minutes.";
		  document.getElementById("run").value = "Run for approximately 40 minutes.";
		  document.getElementById("jump").value = "Jumping ropes for approximately 30 minutes.";
	  }
	  else if(foodEntered==="Chicken")
	  {
		  document.getElementById("cal").value = "You have consumed approximately 239 calories.";
		  document.getElementById("walk").value = "Walk for approximately 50 minutes.";
		  document.getElementById("run").value = "Run for approximately 30 minutes.";
		  document.getElementById("jump").value = "Jumping ropes for approximately 20 minutes.";
	  }
	  else if(foodEntered==="Burger")
	  {
		  document.getElementById("cal").value = "You have consumed approximately 295 calories.";
		  document.getElementById("walk").value = "Walk for approximately 1 hr 20 min minutes.";
		  document.getElementById("run").value = "Run for approximately 60 minutes.";
		  document.getElementById("jump").value = "Jumping ropes for approximately 40 minutes.";
	  }
	  else if(foodEntered==="Pasta")
	  {
		  document.getElementById("cal").value = "You have consumed approximately 131 calories.";
		  document.getElementById("walk").value = "Walk for approximately 30 minutes.";
		  document.getElementById("run").value = "Run for approximately 20 minutes.";
		  document.getElementById("jump").value = "Jumping ropes for approximately 10 minutes.";
	  }
	else
	{
		alert("Value not yet stored!!!");
		document.getElementById("cal").value = " ";
		document.getElementById("walk").value = " ";
		document.getElementById("run").value = " ";
		document.getElementById("jump").value = " ";
	}
}