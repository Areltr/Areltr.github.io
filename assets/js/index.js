var div = document.getElementById('host');
var display = 1;

function hideShow()
{
    if(display == 1)
    {
        div.style.display = 'block';
        display = 0;
    }
    else
    {
        div.style.display = 'none';
        display = 1;
    }
}
var p = document.getElementById('srv');
var display = 1;

function hideShow1()
{
    if(display == 1)
    {
        p.style.display = 'block';
        display = 0;
    }
    else
    {
        p.style.display = 'none';
        display = 1;
    }
}
var p = document.getElementsByClassName('shr')
var display = 1;

function shr()
{
    if(display == 1)
    {
        p.style.display = 'block';
        display = 0;
    }
    else
    {
        p.style.display = 'none';
        display = 1;
    }
}