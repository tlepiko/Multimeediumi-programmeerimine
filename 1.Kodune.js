window.onload = function () {
    document.getElementById("stickman").addEventListener("animationstart", animInfo);
    document.getElementById("stickman").addEventListener("animationend", animInfo);
    document.getElementById("stickman").addEventListener("animationiteration", animInfo);
    document.getElementById("machineoperation1").addEventListener("animationstart", animInfo);
    document.getElementById("machineoperation1").addEventListener("animationend", animInfo);
    document.getElementById("machineoperation1").addEventListener("animationiteration", animInfo);
    document.getElementById("machineoperation2").addEventListener("animationstart", animInfo);
    document.getElementById("machineoperation2").addEventListener("animationend", animInfo);
    document.getElementById("machineoperation2").addEventListener("animationiteration", animInfo);
    document.getElementById("machineoperation3").addEventListener("animationstart", animInfo);
    document.getElementById("machineoperation3").addEventListener("animationend", animInfo);
    document.getElementById("machineoperation3").addEventListener("animationiteration", animInfo);
    document.getElementById("stickman").style.animation = "moveStick1 2s linear forwards";
    document.getElementById("conveyerbeltgear1").style.animation = "conveyergearmovement 8s linear infinite";
    document.getElementById("conveyerbeltgear2").style.animation = "conveyergearmovement 8s linear infinite";
}

function animInfo(e) {
    console.log(e);
    if (e.type == "animationend" && e.animationName == "moveStick1") {
        document.getElementById("conveyerbeltgear1").style.animationPlayState = "paused";
        document.getElementById("conveyerbeltgear2").style.animationPlayState = "paused";
        document.getElementById("machineoperation1").style.animation = "machine3print 3s linear forwards";
        document.getElementById("smileface").style.animation = "mouthvisible 1s linear forwards 1400ms";
        console.log("HELLO HELLO");
    } else if (e.type == "animationend" && e.animationName == "machine3print") {
        document.getElementById("conveyerbeltgear1").style.animationPlayState = "running";
        document.getElementById("conveyerbeltgear2").style.animationPlayState = "running";
        document.getElementById("stickman").style.animation = "moveStick2 2s linear forwards";
    } else if (e.type == "animationend" && e.animationName == "moveStick2") {
        document.getElementById("conveyerbeltgear1").style.animationPlayState = "paused";
        document.getElementById("conveyerbeltgear2").style.animationPlayState = "paused";
        document.getElementById("machineoperation2").style.animation = "machine3print2 3s linear forwards";
        document.getElementById("leyeface").style.animation = "leyevisible 1s linear forwards 1400ms";
    } else if (e.type == "animationend" && e.animationName == "machine3print2") {
        document.getElementById("conveyerbeltgear1").style.animationPlayState = "running";
        document.getElementById("conveyerbeltgear2").style.animationPlayState = "running";
        document.getElementById("stickman").style.animation = "moveStick3 2s linear forwards";
    } else if (e.type == "animationend" && e.animationName == "moveStick3") {
        document.getElementById("conveyerbeltgear1").style.animationPlayState = "paused";
        document.getElementById("conveyerbeltgear2").style.animationPlayState = "paused";
        document.getElementById("machineoperation3").style.animation = "machine3print3 3s linear forwards";
        document.getElementById("reyeface").style.animation = "reyevisible 1s linear forwards 1400ms";
    } else if (e.type == "animationend" && e.animationName == "machine3print3") {
        document.getElementById("conveyerbeltgear1").style.animationPlayState = "running";
        document.getElementById("conveyerbeltgear2").style.animationPlayState = "running";
        document.getElementById("stickman").style.animation = "moveStick4 2s linear forwards";
    } else if (e.type == "animationend" && e.animationName == "moveStick4") {
        document.getElementById("stickman").style.animation = "moveStick1 2s linear forwards";
        document.getElementById("machineoperation1").style.animation = "";
        document.getElementById("machineoperation2").style.animation = "";
        document.getElementById("machineoperation3").style.animation = "";
        document.getElementById("reyeface").style.animation = "";
        document.getElementById("leyeface").style.animation = "";
        document.getElementById("smileface").style.animation = "";
    }
}