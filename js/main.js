var idCounter = 1;

function typeOf(value) {
    var s = typeof value;
    if (s === 'object') {
        if (value) {
            if (value instanceof Array) {
                s = 'array';
            }
        } else {
            s = 'null';
        }
    }
    return s;
}
/*
Array
Boolean
Date
Function
Iterator
Number
Object
RegExp
String
 */
var g;
var ObjectDictionary;

function initObjDict() {
    ObjectDictionary = {
        'objects' :
        [
            //{
            //    'object' : Function.prototype,
            //    'name' : 'Function.prototype'
            //},
            // {
            //    'object' : Object.prototype,
            //    'name' : 'Object.prototype'
            // },
            {
                'object' : null,
                'name' : 'null'
            }
        ],
        'links' : [{
                'from' : Object.prototype,
                'to' : Object,
                'label' : 'constructor'
            }, {
                'from' : Object.prototype,
                'to' : null,
                'label' : '__proto__'
            }
        ]
    };

}

function objectAlreadyExists(obj) {
    var i = ObjectDictionary.objects.length;
    while (i--) {
        if (obj === ObjectDictionary.objects[i].object || typeof obj === 'undefined' || obj === null) {
            return true;
        }
    }
    return false;
}

function linkAlreadyExists(from, to, label) {
    var i = ObjectDictionary.links.length;
    while (i--) {
        if ((from === ObjectDictionary.links[i].from) && (to === ObjectDictionary.links[i].to) && (label === ObjectDictionary.links[i].label)) {
            //console.log('Found duplicate edge for [' + from.toString() + ']->[' + to.toString() + ']->[' + label + ']');
            return true;
        }
    }
    //console.log('Could not find duplicate edge for [' + from.toString() + ']->[' + to.toString() + ']->[' + label + ']');
    return false;
}

function insertObject(obj, name) {
    /*
    if (obj !== null && (typeof obj === 'object' || typeof obj === 'Array' || typeof obj === 'Boolean' || typeof obj === 'Function' || typeof obj === 'Number' || typeof obj === 'RegExp' || typeof obj === 'String')) {
    if (!obj.hasOwnProperty('id')) {
    Object.defineProperty(obj, "id", {
    value : idCounter,
    writable : false,
    enumerable : false,
    configurable : false
    });
    idCounter++;
    }
    }
     */
    if (objectAlreadyExists(obj)) {
        if (!name || name.indexOf('Empty') !== -1) {
            return null;
        }
        if (/*isPrototype === true || */
            name.indexOf('__proto__') === -1) {
            console.log('Overriding everything else for: ' + name);
            var i = ObjectDictionary.objects.length;
            while (i--) {
                if (obj === ObjectDictionary.objects[i].object) {
                    if (
                        (name.indexOf('.') !== 0 && ObjectDictionary.objects[i].name.indexOf('.') === 0) ||
                        (name !== '' && ObjectDictionary.objects[i].name === '') ||
                        (name.indexOf('prototype') !== -1 && ObjectDictionary.objects[i].name.indexOf('__proto__') !== -1) ||
                        (name.split('.').length - 1 < ObjectDictionary.objects[i].name.split('.').length - 1)) {
                        //if(name.split('.').length-1 < ObjectDictionary.objects[i].name.split('.').length-1) {
                        ObjectDictionary.objects[i].name = name;
                    }
                    return null;
                }
            }
        }

        console.log('Object already exists: ' + name);
        return null;
    }
    var insertObj = {
        'object' : obj,
        'name' : name
    };
    ObjectDictionary.objects.push(insertObj);
    return insertObj;
}

function insertLink(from, to, label) {
    if (!(objectAlreadyExists(from) && objectAlreadyExists(to))) {
        return;
    }
    if (linkAlreadyExists(from, to, label)) {
        return;
    }
    ObjectDictionary.links.push({
        'from' : from,
        'to' : to,
        'label' : label
    });
}

function getObjectName(obj) {
    var i = ObjectDictionary.objects.length;
    while (i--) {
        if (obj === ObjectDictionary.objects[i].object) {
            return ObjectDictionary.objects[i].name;
        }
    }
    return 'undefinedObj';
}

function addObject(obj, name) {
    console.log('addObject:' + name);

    if (objectAlreadyExists(obj) || (obj instanceof HTMLElement)) {
        return;
    }
    var insertedObj = insertObject(obj, name);

    if (typeof obj.prototype !== 'undefined') {
        addObject(obj.prototype, name + '.prototype');
    }
    if (typeof obj === "object") {
        var keys = Object.keys(obj);

        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var val = obj[keys[i]];

            if (obj.hasOwnProperty(key) === false) {
                return;
            }

            if (val === null) {
                addObject(val, 'null', false, false);
            } else if (typeof val === 'function') {
                //if (isPrototype === true && key === 'constructor') {}
                //else {
                addObject(val, name + '.' + key);
                //}
            } else if (typeof val === 'object') {
                addObject(val, name + '.' + key);
            } else if (typeof val === 'undefined') {
                insertObject(val, 'undefined');
            } else {
                addObject(val, val.toString());
            }
        }
    }
    if (typeof obj.constructor !== 'undefined' && !objectAlreadyExists(obj.constructor)) {
        if (obj.constructor.hasOwnProperty('name')) {
            addObject(obj.constructor, obj.constructor.name, true, false);
        } else {
            addObject(obj.constructor, name + '.constructor', true, false);
        }
    }
}

function processObjects() {
    ObjectDictionary.objects.forEach(function logArrayElements(element, index, array) {
        var obj = element.object;
        if (obj === null) {
            return;
        }

        if (obj.hasOwnProperty('prototype')) {
            insertLink(obj, obj.prototype, 'prototype');
        }
        if (obj.hasOwnProperty('constructor')) {
            insertLink(obj, obj.constructor, 'constructor');
        }
        if (obj.__proto__ !== null) {
            insertLink(obj, obj.__proto__, '__proto__');
        }
        if (typeof obj === "object") {
            var keys = Object.keys(obj);
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i];
                var val = obj[keys[i]];

                if (obj.hasOwnProperty(key) === false) {
                    return;
                }
                insertLink(obj, val, key);
            }
        }
    });
}

function produceDot() {
    ObjectDictionary.objects.forEach(function logArrayElements(element, index, array) {
        var n = g.addNode(element.name);
        if (typeof element.object === 'object') {
            n.set('shape', 'oval');
        } else if (typeof element.object === 'function') {
            n.set('shape', 'box');
            if (typeof element.object.prototype !== 'undefined') {
                n.set('style', 'filled');
                n.set('fillcolor', 'lightcyan');
            }
        }
    });

    ObjectDictionary.links.forEach(function logArrayElements(element, index, array) {
        var e = g.addEdge(getObjectName(element.from), getObjectName(element.to));
        e.set('arrowhead', 'vee');
        e.set("label", element.label);
        if (element.label === '__proto__') {
            e.set('style', 'dashed');
        }
    });

    var legend = g.addCluster('cluster_0');
    legend.set('color', 'grey');
    legend.set('label', 'LEGEND');
    (function () {
        var n1 = legend.addNode('object');
        n1.set('shape', 'oval');

        var n2 = legend.addNode('function');
        n2.set('shape', 'box');

        var n3 = legend.addNode('class \\n(functions which are constructors\\ndo have potential to be a class)');
        n3.set('shape', 'box');
        //n.set('color', 'transparent');
        n3.set('style', 'filled');
        n3.set('fillcolor', 'lightcyan');

        var e1 = legend.addEdge(n1, n2, '');
        var e2 = legend.addEdge(n2, n3, '');
        e1.set('color', 'transparent');
        e2.set('color', 'transparent');
    })();

}

function getDot() {
    console.log(JSON.stringify(ObjectDictionary));
    // Print the dot script
    var retVal = g.to_dot()
        console.log(retVal);
    return retVal
    // Generate a PNG output
    //g.output("svg", "test01.svg");
};

//addObject(myObj, 'myObj');


/*
function inherit (child, parent) {
function proxy () {};
proxy.prototype = parent.prototype;
child.prototype = new proxy();
};

function Parent () {}
function Child () {}

inherit(Child, Parent);

var child = new Child();


addObject(Parent, 'Parent');
addObject(Child, 'Child');
addObject(child, 'child');
 */

/*
var Parent = {
// ...
};

var Child = Object.create(Parent);

var child = Object.create(Child);

addObject(Parent, 'Parent');
addObject(Child, 'Child');
addObject(child, 'child');
 */

/*
var Base = function () {
var str = 'Shobhit';
var age = 24;
};

var base = new Base();

addObject(Base, 'Base');
addObject(base, 'base');
 */

/*
var Base = function() {
var str = 'Shobhit';
var age = 24;
};

var base = {};

base.prototype = new Base();

addObject(Base, 'Base');
addObject(base, 'base');
 */

/*
if (typeof Object.create !== 'function') {
Object.create = function (o) {
function F() {}
F.prototype = o;
return new F();
};
}

var Base = function() {
var str = 'Shobhit';
var age = 24;
};

var base = new Base();
var derived = Object.create(base);
//derived..constructor

addObject(Base, 'Base');
addObject(base, 'base');

addObject(derived, 'derived');
 */

/*
function A(a){
this.varA = a;
}

A.prototype = {
'varA' : null,
'doSomething' : function(){
console.log('something');
}
}

function B(a, b){
A.call(this, a);
this.varB = b;
}
B.prototype = Object.create(new A(), {
varB : { value: null, enumerable: true, configurable: true, writable: true },
doSomething : { value: function(){ // override
A.prototype.doSomething.apply(this, arguments); // call super
// ...
}, enumerable: true, configurable: true, writable: true }
})

var b = new B('Shobhit', true);
b.doSomething();

addObject(A, 'A');
addObject(B, 'B');
addObject(b, 'b');
 */

/*
var person = {
'firstName' : 'Shobhit',
'age' : 32
};

addObject(person, 'person');
 */

/*
Cat = function(){};
Cat.C1 = '';
Cat.prototype.Cp1 = '';

mycat = new Cat();
o = {};

addObject(Cat, 'Cat');
addObject(mycat, 'mycat');
addObject(o, 'o');
 */

/*
var __extends = this.__extends || function (d, b) {
function __() { this.constructor = d; }
__.prototype = b.prototype;
d.prototype = new __();
}
var Animal = (function () {
function Animal(name) {
this.name = name;
}
Animal.prototype.move = function (meters) {
console.log(this.name + " moved " + meters + "m.");
};
return Animal;
})();
var Snake = (function (_super) {
__extends(Snake, _super);
function Snake(name) {
_super.call(this, name);
}
Snake.prototype.move = function () {
console.log("Slithering...");
_super.prototype.move.call(this, 5);
};
return Snake;
})(Animal);
var Horse = (function (_super) {
__extends(Horse, _super);
function Horse(name) {
_super.call(this, name);
}
Horse.prototype.move = function () {
console.log("Galloping...");
_super.prototype.move.call(this, 45);
};
return Horse;
})(Animal);
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);


addObject(Snake, 'Snake');
addObject(Horse, 'Horse');
addObject(Animal, 'Animal');

addObject(sam, 'sam');
addObject(tom, 'tom');
 */
/*
if (typeof Object.create !== 'function') {
Object.create = function (o) {
return function () {};
//F.prototype = o;
//o.constructor = F;
return F;
};
}

//OOO = Object.create();
OOO = function(){};
//addObject(Number, Number.name);
addObject(OOO, 'OOO');
 */
/*
var a = function(){}
var b = function(){}

myinherits = function (a, b) {
function c() {}

c.prototype = b.prototype;
a.superClass_ = b.prototype;
a.prototype = new c;
a.prototype.constructor = a
};

util.inherits(a,b);
 */

/*
c.prototype = b.prototype;
//a.superClass_ = b.prototype;
var cObj = new c;
a.prototype = cObj;
a.prototype.constructor = a
 */

//addObject(b, 'b');
//addObject(c, 'c');
//addObject(cObj, 'cObj');
//addObject(a, 'a');

//addObject(util, 'util');
//var fs = require('fs');
//var events = require('events');

//addObject(global, 'global');
//addObject(fs.ReadStream, 'fs.ReadStream');
//addObject(fs.WriteStream, 'fs.WriteStream');
//addObject(graphviz, 'graphviz');

//console.log(g.to_dot());


$("#generateBtn").click(
    function () {
    g = digraph("G");
    initObjDict();
    addObject(Object, Object.name);
    //addObject(Function, Function.name);
    /*
    addObject(String, String.name);
    addObject(Number, Number.name);
    addObject(Array, Array.name);
    addObject(Boolean, Boolean.name);
    addObject(Date, Date.name);
    addObject(RegExp, RegExp.name);
     */
    eval($('#userJavascriptCode').val())
    processObjects();
    produceDot();
    dot = getDot();
    result = Viz(dot, "svg");
    //console.log(result);
    $('#svgout').empty().append(result);
});
