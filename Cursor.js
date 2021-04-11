//=============================================================================\\
//                                Cursor.JS                                     \\
//                             made by nullcheats                                \\
//================================================================================\\

/*
This is just some of our variables / selectors
I recommend you keep the variables to the default settings !
*/
const Cursor = document.querySelector(".BGcursor");
const CusrsorOnImage = document.getElementById("Image");
var BlurCB = document.getElementById("BlurCB");
var GrayScaleCB = document.getElementById("GrayScaleCB");
var CursorSizeScale = document.getElementById("CursorSize");
var CustomCursorColour = document.getElementById("ColourPicker");

let CursorSizeNormal = 40; // 40 Normal
let CursorSizeEnlarged = CursorSizeNormal * 3; // 150 Normal ||  CursorSizeNormal * 3
let Type; // Blur |  Gray | Rainbow |

/*
This function simply sets the "Cursor" size via width / height
This function is called on "Onload" in the main HTML file
This function is used incase a custom size was set :)
This is also where we set the "Label" text for the size of the cursor
*/
const SetCursorSize = () => {
	Cursor.style.width = CursorSizeNormal + "px";
	Cursor.style.height = CursorSizeNormal + "px";
	document.getElementById("CursorsSizeLabel").innerText = CursorSizeNormal + "px";
}

/*
This is our MouseMove event and this simply tells the cursor where to move
This also checks for Width / Height to ensure it has room to move :)
*/
document.addEventListener("mousemove", (e) => {
	Cursor.style.left = (e.clientX - Cursor.clientWidth / 2) + "px";
	Cursor.style.top = (e.clientY - Cursor.clientHeight / 2) + "px";
});

/*
This is our main event listeners "MouseEnter" applied to our "CursorOnImage"
This simply checks if the cursor is over our image by the ID "Image"
If the cursor is on the image it will then do "EnterState" and apply any effects
*/
CusrsorOnImage.addEventListener('mouseenter', () => {
	Cursor.style.width = CursorSizeEnlarged + "px";
	Cursor.style.height = CursorSizeEnlarged + "px";
	EnterState();
});

/*
This is another one of our main event listeners "MouseLeave" applied to our "CursorOnImage"
This simply checks if the cursor has left the image it was previously on
If the cursor did leave it will do "LeaveState" and this will remove any additional css effects applied
*/
CusrsorOnImage.addEventListener('mouseleave', () => {
	Cursor.style.width = CursorSizeNormal + "px";
	Cursor.style.height = CursorSizeNormal + "px";
	LeaveState();
});

/* 
This is out "EnterState" function that simply applies our effects
This simply checks for what 'effect' we have chosen and applies the css class
As you can see we use a 'switch' statement so we can add multiple effects here
*/
const EnterState = () => {
	switch (Type.toLowerCase()) {
		case 'blur':
			Cursor.classList.add('BGcursorBlur');
			break;
		case 'gray':
			Cursor.classList.add('BGcursorGrayscale');
			break;
		case 'rainbow':
			Cursor.classList.add('BGcursorRainbowFill');
			break;
		default:
			break;
	}
}

/* 
This is out "LeaveState" function that simply removes our applied effects
This removes the effects by removing the extended css we applied  on "EnterState"
As you can see we use a 'switch' statement so we can add multiple effects here
*/
const LeaveState = () => {
	switch (Type.toLowerCase()) {
		case 'blur':
			Cursor.classList.remove('BGcursorBlur');
			break;
		case 'gray':
			Cursor.classList.remove('BGcursorGrayscale');
			break;
		default:
			break;
	}
}

var ColourSelector = document.getElementById("ColourPicker").value;
document.getElementById("ColourPicker").onchange = function() {
	ColourSelector = this.value;
	Cursor.style.background = ColourSelector;
	Cursor.style.opacity = 0.4;
	document.getElementById("ColourLabelText").innerHTML = this.value;
	GrayScaleCB.disabled = true;
	BlurCB.disabled = true;
	RainbowCB.disabled = true;
	if (BlurCB.checked) {
		BlurCB.checked = false;
	}
	if (GrayScaleCB.checked) {
		GrayScaleCB.checked = false;
	}
	if (RainbowCB.checked) {
		RainbowCB.checked = false;
	}
}


/*
Below you can see our "Checkbox" event listeners 
This simply sets the value of 'type' according to the checkbox
This will also uncheck all other checkboxes checked other than the latest selection
*/
BlurCB.addEventListener('change', function() {
	if (this.checked) {
		if (GrayScaleCB.checked) {
			GrayScaleCB.checked = false;
		}
		Type = "Blur";
		console.log("Type -> " + Type);
	}
});

GrayScaleCB.addEventListener('change', function() {
	if (this.checked) {
		if (BlurCB.checked) {
			BlurCB.checked = false;
		}
		Type = "Gray";
		console.log("Type -> " + Type);
	}
});

CursorSizeScale.addEventListener('input', function() {
	CursorSizeNormal = CursorSizeScale.value;
	CursorSizeEnlarged = CursorSizeScale.value * 3;
	SetCursorSize();
});

RainbowCB.addEventListener('change', function() {
	BlurCB.disabled = true;
	GrayScaleCB.disabled = true;
	CustomCursorColour.disabled = true;
	Type = "Rainbow";
});

/* 
This is a very simple function that will close the 'Modal'
This uses the Id of the Modal and hides the "display"  by setting it to 'none'
*/
const CloseModal = () => {
	var Modal = document.getElementById("Modal");
	Modal.style.display = "none";
}

/* 
This is a very simple function that will open the 'Modal'
This sets the style property to 'block'
*/
const OpenModal = () => {
	var Modal = document.getElementById("Modal");
	Modal.style.display = "block";
}

/*
This is a very simple function to reload web page
We use this to clear effects and esentially clear any "css applied classes"
*/
const ReloadPage = () => {
	location.reload();
}