
function displace(){
    this.style.marginLeft == "100px" ? this.style.marginLeft = "-20px" : this.style.marginLeft = "100px";
}

document.getElementById("no").addEventListener("mouseover",displace)