var menu = document.getElementById('bar').addEventListener('click', showMenuBar);
var item  = document.getElementById('item');



item.style.right = "-300px"
function showMenuBar(e) {
    if(item.style.right == "-300px"){

        item.style.right = "0";
    }else{
        item.style.right = "-300px";
    }

    e.preventDefault();
}

