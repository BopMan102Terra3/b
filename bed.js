status2 = "";
img = "";
objects1 = [];
objects2 = [];



function back2()
{
    window.location = "index.html";
}

function preload()
{
    img = loadImage("bed.JPG")
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status2").innerHTML = "Status = Detecting Objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status2 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects1 = results;
}

function draw()
{
    image(img, 0, 0, 640, 420);
   
    if(status != "")
    {
        for(i = 0; i < objects1.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill("#FF0000");
            percent = floor(objects1[i].confidence * 100);
            text(objects1[i].label + " " + percent + "%",objects1[i].x + 15, objects1[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects1[i].x, objects1[i].y, objects1[i].width, objects1[i].height);
        }
}
}