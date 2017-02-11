function Player() {
    this.width = 32;
    this.height = 48;
    this.position_x = 8; //Position de départ
    this.position_y = 8;
    this.regard = 2;
    this.sprite = document.getElementById("player");
    this.x = new Array(this.width,this.width,this.width,this.width);
    this.y = new Array(this.height*3,this.height,0,this.height*2);
}