status1 = "";
img = "";
objects1 = [];
objects2 = [];

function back1()
{
    window.location = "index.html";
}

function livingRoom()
{
    window.location = "living.html";
}

function preload()
{
    img = loadImage("livingRoom.JPG")
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status1").innerHTML = "Status = Detecting Objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects2 = results;
}

function draw()
{
    image(img, 0, 0, 640, 420);
   
    if(status != "")
    {
        for(i = 0; i < objects2.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill("#FF0000");
            percent = floor(objects2[i].confidence * 100);
            text(objects2[i].label + " " + percent + "%",objects2[i].x + 15, objects2[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects2[i].x, objects2[i].y, objects2[i].width, objects2[i].height);
        }

   
}
}
