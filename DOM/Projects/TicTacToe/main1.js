var counter = 1;
var end = false;
var grid1 = [];
var grid2 = [];
var maxRound;
document.querySelectorAll('.component').forEach(item => {
    item.addEventListener('click', () => {
        if (item.className !== 'component token1' && item.className !== 'component token2') {
            if (end == false) {
                if (counter % 2 == 0) {
                    grid1.push(parseInt(item.id.substring(item.id.length - 1, item.id.length)));
                    item.classList.add("token2");
                    item.style.backgroundColor = '#4e546640';
                    if (grid1.length > 2) {
                        if ((grid1.includes(1) && grid1.includes(2) && grid1.includes(3)) || (grid1.includes(4) && grid1.includes(5) && grid1.includes(6)) || (grid1.includes(7) && grid1.includes(8) && grid1.includes(9)) || (grid1.includes(1) && grid1.includes(4) && grid1.includes(7)) || (grid1.includes(2) && grid1.includes(5) && grid1.includes(8)) || (grid1.includes(3) && grid1.includes(6) && grid1.includes(9)) || (grid1.includes(3) && grid1.includes(5) && grid1.includes(7)) || (grid1.includes(1) && grid1.includes(5) && grid1.includes(9))) {
                            end = true;
                            document.querySelector(".o").innerHTML++;
                            winner();
                        }
                    }
                }
                else {
                    grid2.push(parseInt(item.id.substring(item.id.length - 1, item.id.length)));
                    item.classList.add("token1");
                    item.style.backgroundColor = '#4e546670';
                    if (grid2.length > 2) {
                        if ((grid2.includes(1) && grid2.includes(2) && grid2.includes(3)) || (grid2.includes(4) && grid2.includes(5) && grid2.includes(6)) || (grid2.includes(7) && grid2.includes(8) && grid2.includes(9)) || (grid2.includes(1) && grid2.includes(4) && grid2.includes(7)) || (grid2.includes(2) && grid2.includes(5) && grid2.includes(8)) || (grid2.includes(3) && grid2.includes(6) && grid2.includes(9)) || (grid2.includes(3) && grid2.includes(5) && grid2.includes(7)) || (grid2.includes(1) && grid2.includes(5) && grid2.includes(9))) {
                            end = true;
                            document.querySelector(".x").innerHTML++;
                            winner();
                        }
                    }
                }
            }
            counter++;
        }
    });
});
document.getElementById("reset").addEventListener("click", () =>
    document.querySelectorAll('.component').forEach(item => {
        item.classList.add("fadeOutJs");
        item.style.backgroundColor = '#4e5466';
        setTimeout(() => {
            item.classList.remove("fadeOutJs");
            item.classList.remove("token1");
            item.classList.remove("token2");
            grid1 = [];
            grid2 = [];
            counter = 1;
        }, 200)
    })
);
function reset() {
    setTimeout(() =>{
        if(end == false){
            document.querySelector(".round").innerHTML = parseInt(document.querySelector(".round").innerHTML) + 1
        }
    }
        , 500);
        if(maxRound == undefined){
            maxRound = 60;
        }
    if (parseInt(document.querySelector(".round").innerHTML) >= maxRound) {
        end = true;
        (document.querySelector(".x").innerHTML > document.querySelector(".o").innerHTML) ? document.querySelector(".limit").innerHTML = document.getElementById("playerx").innerHTML+' won!' : (document.querySelector(".x").innerHTML < document.querySelector(".o").innerHTML) ? document.querySelector(".limit").innerHTML = document.getElementById("nameo").value+' won!' : document.querySelector(".limit").innerHTML = 'Draw';
    } else{
        end = false;
    }
}
function winner() {
    if (document.querySelector(".x").innerHTML > document.querySelector(".o").innerHTML) {
        document.getElementById("x").style.backgroundColor = '#4e546670';
    } else if (document.querySelector(".x").innerHTML < document.querySelector(".o").innerHTML) {
        document.getElementById("o").style.backgroundColor = '#4e546650';
    } else {
        document.getElementById("x").style.backgroundColor = '#4e5466';
        document.getElementById("o").style.backgroundColor = '#4e5466';
    }
}
function settings() {
    document.getElementById('settings').style.display = "block";
    document.getElementById('settings').classList.remove("settings2");
    document.getElementById('settings').classList.add("settings");
}
function back() {
    document.getElementById('settings').classList.remove("settings");
    document.getElementById('settings').classList.add("settings2");
    setTimeout(() => document.getElementById('settings').style.display = "none"
        , 500);
}
function save() {
    if(document.getElementById("namex").value.length !== 0){
        document.getElementById("playerx").innerHTML = document.getElementById("namex").value;
    }
    if(document.getElementById("nameo").value.length !== 0){
        document.getElementById("playero").innerHTML = document.getElementById("nameo").value;
    }
    maxRound = parseInt(document.getElementById("rounds").innerHTML);
    back();
}
document.getElementById("number").addEventListener("input", () => {
    document.getElementById("rounds").innerHTML = document.getElementById("number").value;
});