/*********************

      GREEN WORLD      

*********************/

var greenWorld = {
    background: [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,
        0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,
        1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,
        1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    ],
    tiles: [],
    grassTimer: 0,
    grassFrameRate: 20,
    grassTileCount: 6,
    grass1x: 0,
    grass2x: 128,
    grass3x: 160,
    grass4x: 192,
    grassY: 480,
    greenTrailX: 128,
    greenTrailY: 512,
    
    update: updateGreenWorld,
    getTile: getGreenWorldTile,
    clear: clearGreenWorld
};

function updateGreenWorld (cols, rows) {
    this.grassTimer++;
    if (this.grassFrameRate % 5 === 0) {
        
        var count = getRandomInt(1, 3);
        var col = 0; 
        var row = 0;
        var i = 0;
        
        while (i < count) {
            
            col = getRandomInt(0, cols);
            row = getRandomInt(0, rows);
            
        if (this.tiles[row * cols + col] === 1)
            this.tiles[row * cols + col] += 1;
        
        i++;
        }
    }
    
    if (this.grassTimer === this.grassFrameRate) {
        
        this.grassTimer = 0;
        for(var c = 0; c < cols; c++) {
            
            for(var r = 0; r < rows; r++) {
                
                var index = r * cols + c;
                var tile = this.tiles[index];
                
                if (tile > 1) {
                    
                    if (tile % this.grassTileCount === 0) 
                        this.tiles[index] = 1;
                    else
                        this.tiles[index] += 1;
                }
            }
        }
    }
}

function getGreenWorldTile (index) {
    var tile = {x: 0, y: 0};
    
    if(this.tiles[index] == 0){
            
            tile.x = this.greenTrailX;
            tile.y = this.greenTrailY;

    } else {
        switch(this.tiles[index]) {
                
                case 1:
                    tile.x = this.grass1x;
                    break;
                
                case 2:
                    tile.x = this.grass2x;
                    break;
                
                case 3:
                    tile.x = this.grass3x;
                    break;
                
                case 4:
                    tile.x = this.grass4x;
                    break;
                
                case 5:
                    tile.x = this.grass3x;
                    break;
                
                case 6:
                    tile.x = this.grass2x;
                    break;
            }
            
            tile.y = this.grassY;
    }
    
    return tile;
}

function clearGreenWorld () {
    this.grassTimer = 0;
    this.tiles = this.background;
}