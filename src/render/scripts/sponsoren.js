var sponsoren = [
	["ASML", "https://www.asml.com/careers/"],
    ["Transtrend", "http://www.transtrend.com/nl/"],
    ["UUtrecht", "https://www.uu.nl/bachelors/wiskunde"],
    ["KWG", "https://www.wiskgenoot.nl"],
    ["Optiver", "http://www.optiver.com/"],
	["ASML", "https://www.asml.com/careers/"],
    ["Transtrend", "http://www.transtrend.com/nl/"],
    ["UUtrecht", "https://www.uu.nl/bachelors/wiskunde"],
    ["KWG", "https://www.wiskgenoot.nl"],
    ["Optiver", "http://www.optiver.com/"]
];
var n = sponsoren.length;
var imgstart = Math.floor(Math.random() * n);

setInterval(imgs, 5000);
setTimeout(veranderimgs, 0);

function imgs()
{
    veranderDoorzichtigheid(0);
    setTimeout(veranderimgs, 500);
    setTimeout(veranderDoorzichtigheid, 500, 1);
}

function veranderDoorzichtigheid(d)
{
    for (i = 0; i < 7; i++)
    {
        document.getElementById("sponsurl"+i).style.opacity = d;
    }
}

function veranderimgs()
{
    for (i = 0; i < 7; i++)
    {
		console.log(imgstart % n)
		console.log(sponsoren)
		console.log(sponsoren[imgstart % n])
		document.getElementById("sponsurl"+i).href = sponsoren[imgstart%n][1];
        document.getElementById("sponsimg"+i).src = "img/logos/"+sponsoren[imgstart%n][0]+".png";
        document.getElementById("sponsimg"+i).title = sponsoren[imgstart%n][0];
        imgstart++;
    }
}