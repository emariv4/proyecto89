var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 1;

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Inicio de actividad adicional
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Finaliza la actividad adicional

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        /*
        Añade la función moveTo() con las coordenadas
        last_position_of_x, last_position_of_y
        para iniciar la creación de la línea
        
        Añade la función lineTo() con las coordenadas
        current_position_of_mouse_x, current_position_of_mouse_y
        para finalizar la creación de la línea
        */
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;

    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

var last_position_of_touch_x, last_position_of_touch_y;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
/*
Asigna screen.width a la variable width

Réstale 70 a screen.width
y asígnalo a new_width

Réstale 300 a screen.height
y asígnalo a new_height
*/

if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
    console.log("my_touchstart");
    //Actividad adicional
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //Finaliza la actividad adicional
         
    last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    /*
        Añade la función moveTo() con las coordenadas
        last_position_of_x, last_position_of_y
        para iniciar la creación de la línea
        
        Añade la función lineTo() con las coordenadas
        current_position_of_mouse_x, current_position_of_mouse_y
        para finalizar la creación de la línea    
    */
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x; 
    last_position_of_touch_y = current_position_of_touch_y;
   
}

//Actividad adicional
function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
