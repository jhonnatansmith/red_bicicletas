var Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function () {
    return 'id: ' + this.id + " | color: " + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function (aBicis){
    Bicicleta.allBicis.push(aBicis);
}

Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if (aBici)
        return aBici;
    else 
        throw new Error(`No existe una bicicleta con el ID ${aBiciId}`);
}

Bicicleta.removeById = function(aBiciId){
    for (var i = 0; i < Bicicleta.allBicis.length; i++){
        if (Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}


var a = new Bicicleta(1, 'rojo', 'urbana', [4.582214907584226, -74.15684033345825]);
var b = new Bicicleta(2, 'blanca', 'urbana', [4.577865076347091, -74.15658927653672]);

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;