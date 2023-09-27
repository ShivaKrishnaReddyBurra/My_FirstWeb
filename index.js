for(var i=0;i<document.querySelectorAll(".image").length;i++)
{
document.querySelectorAll(".image")[i].addEventListener("click",function()
{
    var ele =this.getAttribute("data-key");
    var j=i;
    switch(ele)
    {
        case "Naruto":
           var a= new Audio("./Audio'/naruto_theme_song.mp3");
            a.play();
            break;
        case "Naruto_Shippuden":   
            var b =new Audio("./Audio'/senya_Naruto_shippuden.mp3");
                b.play();
            break;
        case "Boruto":
            new Audio("./Audio'/Boruto.mp3").play();
            break;
        case "Onepiece":
            new Audio("./Audio'/Onepiece.mp3").play();
            break;
        case "Bleach":
            new Audio("./Audio'/Bleach.mp3").play();
            break;
        case "Demonslayer":
            new Audio("./Audio'/Demonslayer.mp3").play();
            break;
        case "Hunter":
            new Audio("./Audio'/Hunter.mp3").play();
            break;
        case "Attackontitan":
            new Audio("./Audio'/Attackontitan.mp3").play();
            break;
        case "Deathnote":
            new Audio("./Audio'/Deathnote.mp3").play();
            break;
        case "Bluelock":
            new Audio("./Audio'/Bluelock.mp3").play();
            break;
        case "Onepunchman":
            new Audio("./Audio'/Onepunchman.mp3").play();
            break;
        case "Chainsawman":
            new Audio("./Audio'/Chainsawman.mp3").play();
            break;
        case "Classroomoftheelite":
            new Audio("./Audio'/Classroomoftheelite.mp3").play();
            break;
        case "Mashle":
            new Audio("./Audio'/Mashle.mp3").play();
            break;
        case "Vinlandsaga":
            new Audio("./Audio'/Vinlandsaga.mp3").play();
            break;
        case "jujutsukaisen":
            new Audio("./Audio'/jujutsukaisen.mp3").play();
            break;
        case "Blackclover":
            new Audio("./Audio'/Blackclover.mp3").play();
            break;
        case "Myhero":
            new Audio("./Audio'/Myhero.mp3").play();
            break;
        case "Demonking":
            new Audio("./Audio'/Demonking.mp3").play();
            break;
        case "Fullmetal":
            new Audio("./Audio'/Fulllmetal.mp3").play();
            break;
        case "hell":
            new Audio("./Audio'/hell.mp3").play();
            break;
        case "Tokyorev":
            new Audio("./Audio'/Tokyorev.mp3").play();
            break;
        case "Tokyoghoul":
            new Audio("./Audio'/Tokyoghoul.mp3").play();
            break;
        case "Mushoku":
            new Audio("./Audio'/Mushoku.mp3").play();
            break;
        case "Dr.stone":
            new Audio("./Audio'/Dr.stone.mp3").play();
            break;
        case "Bungo":
            new Audio("./Audio'/Bungo.mp3").play();
            break;
        case "Blacksummoner":
            new Audio("./Audio'/Blacksummoner.mp3").play();
            break;
        case "SAO":
            new Audio("./Audio'/SAO.mp3").play();
            break;

    }
    if(j!=i)
    {
        a.pause();
    }
    
    
});
}

