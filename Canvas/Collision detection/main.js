const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 5,
            rotation: Math.random() - 0.5
        }
        this.currRotation = 0;
        this.color = "black";
    }
    update() {
        if (this.x < 0 || this.x > 600) this.speed.x *= -1
        if (this.y < 0 || this.y > 600) this.speed.y *= -1
        this.x += this.speed.x
        this.y += this.speed.y
        this.currRotation += this.speed.rotation
    }
    rotation() {
        ctx.translate(this.x + (this.width / 2), this.y + (this.height / 2));
        ctx.rotate(this.currRotation * Math.PI / 180);
        ctx.translate(-(this.x + (this.width / 2)), -(this.y + (this.height / 2)));
        if (this.currRotation > 360 || this.currRotation < -360) this.currRotation = 0;
    }
    draw() {
        this.update();
        ctx.save();
        this.rotation();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    }
}

let rectangleStore = [
    new Rectangle(10, 200, 150, 150),
    new Rectangle(440, 200, 150, 150)
]

function workOutNewPoints(cx, cy, vx, vy, rotatedAngle) { //From a rotated object
    //cx,cy are the centre coordinates, vx,vy is the point to be measured against the center point
    //Convert rotated angle into radians
    rotatedAngle = rotatedAngle * Math.PI / 180;
    let dx = vx - cx;
    let dy = vy - cy;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let originalAngle = Math.atan2(dy, dx);
    let rotatedX = cx + distance * Math.cos(originalAngle + rotatedAngle);
    let rotatedY = cy + distance * Math.sin(originalAngle + rotatedAngle);

    return {
        x: rotatedX,
        y: rotatedY
    }
}

//Get the rotated coordinates for the square
function getRotatedSquareCoordinates(square) {
    let centerX = square.x + (square.width / 2);
    let centerY = square.y + (square.height / 2);
    //Work out the new locations
    let topLeft = workOutNewPoints(centerX, centerY, square.x, square.y, square.currRotation);
    let topRight = workOutNewPoints(centerX, centerY, square.x + square.width, square.y, square.currRotation);
    let bottomLeft = workOutNewPoints(centerX, centerY, square.x, square.y + square.height, square.currRotation);
    let bottomRight = workOutNewPoints(centerX, centerY, square.x + square.width, square.y + square.height, square.currRotation);
    return {
        tl: topLeft,
        tr: topRight,
        bl: bottomLeft,
        br: bottomRight
    }
}

//Functional objects for the Seperate Axis Theorum (SAT)
//Single vertex
function xy(x, y) {
    this.x = x;
    this.y = y;
};
//The polygon that is formed from vertices and edges.
function polygon(vertices, edges) {
    this.vertex = vertices;
    this.edge = edges;
};

//The actual Seperate Axis Theorum function
function sat(polygonA, polygonB) {
    var perpendicularLine = null;
    var dot = 0;
    var perpendicularStack = [];
    var amin = null;
    var amax = null;
    var bmin = null;
    var bmax = null;
    //Work out all perpendicular vectors on each edge for polygonA
    for (var i = 0; i < polygonA.edge.length; i++) {
        perpendicularLine = new xy(-polygonA.edge[i].y,
            polygonA.edge[i].x);
        perpendicularStack.push(perpendicularLine);
    }
    //Work out all perpendicular vectors on each edge for polygonB
    for (var i = 0; i < polygonB.edge.length; i++) {
        perpendicularLine = new xy(-polygonB.edge[i].y,
            polygonB.edge[i].x);
        perpendicularStack.push(perpendicularLine);
    }
    //Loop through each perpendicular vector for both polygons
    for (var i = 0; i < perpendicularStack.length; i++) {
        //These dot products will return different values each time
        amin = null;
        amax = null;
        bmin = null;
        bmax = null;
        /*Work out all of the dot products for all of the vertices in PolygonA against the perpendicular vector
        that is currently being looped through*/
        for (var j = 0; j < polygonA.vertex.length; j++) {
            dot = polygonA.vertex[j].x *
                perpendicularStack[i].x +
                polygonA.vertex[j].y *
                perpendicularStack[i].y;
            //Then find the dot products with the highest and lowest values from polygonA.
            if (amax === null || dot > amax) {
                amax = dot;
            }
            if (amin === null || dot < amin) {
                amin = dot;
            }
        }
        /*Work out all of the dot products for all of the vertices in PolygonB against the perpendicular vector
        that is currently being looped through*/
        for (var j = 0; j < polygonB.vertex.length; j++) {
            dot = polygonB.vertex[j].x *
                perpendicularStack[i].x +
                polygonB.vertex[j].y *
                perpendicularStack[i].y;
            //Then find the dot products with the highest and lowest values from polygonB.
            if (bmax === null || dot > bmax) {
                bmax = dot;
            }
            if (bmin === null || dot < bmin) {
                bmin = dot;
            }
        }
        //If there is no gap between the dot products projection then we will continue onto evaluating the next perpendicular edge.
        if ((amin < bmax && amin > bmin) ||
            (bmin < amax && bmin > amin)) {
            continue;
        }
        //Otherwise, we know that there is no collision for definite.
        else {
            return false;
        }
    }
    /*If we have gotten this far. Where we have looped through all of the perpendicular edges and not a single one of there projections had
    a gap in them. Then we know that the 2 polygons are colliding for definite then.*/
    return true;
}

//Detect for a collision between the 2 rectangles
function detectRectangleCollision(index) {
    let thisRect = rectangleStore[index];
    let otherRect = index === 0 ? rectangleStore[1] : rectangleStore[0];
    //Get rotated coordinates for both rectangles
    let tRR = getRotatedSquareCoordinates(thisRect);
    let oRR = getRotatedSquareCoordinates(otherRect);
    //Vertices & Edges are listed in clockwise order. Starting from the top right
    let thisTankVertices = [
        new xy(tRR.tr.x, tRR.tr.y),
        new xy(tRR.br.x, tRR.br.y),
        new xy(tRR.bl.x, tRR.bl.y),
        new xy(tRR.tl.x, tRR.tl.y),
    ];
    let thisTankEdges = [
        new xy(tRR.br.x - tRR.tr.x, tRR.br.y - tRR.tr.y),
        new xy(tRR.bl.x - tRR.br.x, tRR.bl.y - tRR.br.y),
        new xy(tRR.tl.x - tRR.bl.x, tRR.tl.y - tRR.bl.y),
        new xy(tRR.tr.x - tRR.tl.x, tRR.tr.y - tRR.tl.y)
    ];
    let otherTankVertices = [
        new xy(oRR.tr.x, oRR.tr.y),
        new xy(oRR.br.x, oRR.br.y),
        new xy(oRR.bl.x, oRR.bl.y),
        new xy(oRR.tl.x, oRR.tl.y),
    ];
    let otherTankEdges = [
        new xy(oRR.br.x - oRR.tr.x, oRR.br.y - oRR.tr.y),
        new xy(oRR.bl.x - oRR.br.x, oRR.bl.y - oRR.br.y),
        new xy(oRR.tl.x - oRR.bl.x, oRR.tl.y - oRR.bl.y),
        new xy(oRR.tr.x - oRR.tl.x, oRR.tr.y - oRR.tl.y)
    ];
    let thisRectPolygon = new polygon(thisTankVertices, thisTankEdges);
    let otherRectPolygon = new polygon(otherTankVertices, otherTankEdges);

    if (sat(thisRectPolygon, otherRectPolygon)) {
        thisRect.speed.x *= -1
        thisRect.speed.y *= -1
    } else {
        //Because we are working with vertices and edges. This algorithm does not cover the normal un-rotated rectangle
        //algorithm which just deals with sides
        if (thisRect.currRotation === 0 && otherRect.currRotation === 0) {
            if (!(
                thisRect.x > otherRect.x + otherRect.width ||
                thisRect.x + thisRect.width < otherRect.x ||
                thisRect.y > otherRect.y + otherRect.height ||
                thisRect.y + thisRect.height < otherRect.y
            )) {
                thisRect.speed.x *= -1
                thisRect.speed.y *= -1
            }
        }
    }
}


(function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    rectangleStore.forEach((rect, index) => {
        detectRectangleCollision(index);
        rect.draw();
    });
})();