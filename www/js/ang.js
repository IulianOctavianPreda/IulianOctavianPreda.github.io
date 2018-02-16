
    var showButton = document.getElementsByClassName("show-overview");
    var closeButton = document.getElementsByClassName("close-overview");
    var overview = document.getElementsByClassName("left-side-wrapper");
    var rightShow = document.getElementsByClassName("right-side-wrapper");

    function openNav() {
        overview[0].classList.add("script-class");
        showButton[0].style.display="none";
        rightShow[0].style.display="none";
    }

    function closeNav() {
        overview[0].classList.remove("script-class");
        showButton[0].style.display="block";
        rightShow[0].style.display="flex";
    }
    function goBack() {
    window.history.back();
    }

     function changeGraph(opt){
        if(opt == 0){
            document.getElementById("sVar").textContent="152";
            document.getElementById("graph-change").src="../ui_prototypes/66S261D.png";
        }else if(opt == 1){
            document.getElementById("sVar").textContent="164";
            document.getElementById("graph-change").src="../ui_prototypes/66S273A.png";
        }else if(opt == 2){
            document.getElementById("sVar").textContent="135";
            document.getElementById("graph-change").src="../ui_prototypes/66S241A.png";
        }
        
    }