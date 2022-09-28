//variables needed

let a="", b="";
let sign="";

//the main function of calculator

function operate() {
	switch(sign){
		case'+':
			a=String(Number(a)+Number(b))
			document.getElementById('numdisplay').innerHTML=a;
			b=""; sign="";
			break;
		case'-':
			a=String(Number(a)-Number(b))
			document.getElementById('numdisplay').innerHTML=a;
			b=""; sign="";
			
			break;	
		case'×':
			a=String(Number(a)*Number(b))
			document.getElementById('numdisplay').innerHTML=a;
			b=""; sign="";
			break;
		case'÷':
			if(b=='0')
			{
				document.getElementById('numdisplay').innerHTML = "Cannot divide by zero!";
				a=""; b="";
				break;
			}
			else
			{
				a=String(Number(a)/Number(b))
				document.getElementById('numdisplay').innerHTML=a;
				b=""; sign="";
				break;
			}
	}
}

//triggered when a button pressed

function perform(p)
{
	//checks for "="
	if(p=="=")
	{
		if((a!="")&(b!=""))
		{
			operate();
		}
	}
	//checks for signs
	else if((p=="+")||(p=="-")||(p=="×")||(p=="÷"))
	{
		if((a!="")&&(b==""))
		{
			sign=p;
			document.getElementById('numdisplay').innerHTML=a+sign;
		}
	}
	//checks for numbers and decimals
	else
	{
		if(sign=="")
		{
			a=a+p;
			document.getElementById('numdisplay').innerHTML=a;
		}
		else
		{
			b=b+p;
			document.getElementById('numdisplay').innerHTML=a+sign+b;
		}
	}
}

//function for special buttons
function specPerform(p)
{
	switch(p)
	{
		case 'AC':
			location.reload();
		break;
		case 'DEL':
			if((a!="")&&(sign!=""))
			{
				if(b=="")
				{
					sign="";
					document.getElementById('numdisplay').innerHTML=a;
				}
				else //b has some value
				{
					var bx= new Array();
					bx=b.split("");
					bx.pop();
					b=bx.join("");
					document.getElementById('numdisplay').innerHTML=a+sign+b;
				}	
			}
			else if((a!="")&&(sign==""))
			{
					var ax= new Array();
					ax.a.split("");
					ax.pop();
					a=ax.join("");
					document.getElementById('numdisplay').innerHTML=a;
			}
			break;	
	}
}
