var Hash=window.Hash=function(){this.length=0;this.items=new Array();for(var i=0;i<arguments.length;i+=2){if(typeof(arguments[i+1])!='undefined'){this.items[arguments[i]]=arguments[i+1];this.length++;}}}
Hash.prototype.removeItem=function(in_key){var tmp_previous;if(typeof(this.items[in_key])!='undefined'){this.length--;var tmp_previous=this.items[in_key];delete this.items[in_key];}
return tmp_previous;}
Hash.prototype.getItem=function(in_key){return this.items[in_key];}
Hash.prototype.setItem=function(in_key,in_value){var tmp_previous;if(typeof(in_value)!='undefined'){if(typeof(this.items[in_key])=='undefined'){this.length++;}
else{tmp_previous=this.items[in_key];}
this.items[in_key]=in_value;}
return tmp_previous;}
Hash.prototype.hasItem=function(in_key){return typeof(this.items[in_key])!='undefined';}
Hash.prototype.clear=function(){for(var i in this.items){delete this.items[i];}
this.length=0;}

var attrs={"Damping":{"usage":"G","type":"double"},"K":{"usage":"GC","type":"double"},"URL":{"usage":"ENGC","type":"escString"},"area":{"usage":"NC","type":"double"},"arrowhead":{"usage":"E","type":"arrowType"},"arrowsize":{"usage":"E","type":"double"},"arrowtail":{"usage":"E","type":"arrowType"},"aspect":{"usage":"G","type":"aspectType"},"bb":{"usage":"G","type":"rect"},"bgcolor":{"usage":"GC","type":"color"},"center":{"usage":"G","type":"bool"},"charset":{"usage":"G","type":"string"},"clusterrank":{"usage":"G","type":"clusterMode"},"color":{"usage":"ENC","type":"color"},"colorscheme":{"usage":"ENCG","type":"string"},"comment":{"usage":"ENG","type":"string"},"compound":{"usage":"G","type":"bool"},"concentrate":{"usage":"G","type":"bool"},"constraint":{"usage":"E","type":"bool"},"decorate":{"usage":"E","type":"bool"},"defaultdist":{"usage":"G","type":"double"},"dim":{"usage":"G","type":"int"},"dimen":{"usage":"G","type":"int"},"dir":{"usage":"E","type":"dirType"},"diredgeconstraints":{"usage":"G","type":"string"},"distortion":{"usage":"N","type":"double"},"dpi":{"usage":"G","type":"double"},"edgeURL":{"usage":"E","type":"escString"},"edgehref":{"usage":"E","type":"escString"},"edgetarget":{"usage":"E","type":"escString"},"edgetooltip":{"usage":"E","type":"escString"},"epsilon":{"usage":"G","type":"double"},"esep":{"usage":"G","type":"double"},"fillcolor":{"usage":"NEC","type":"color"},"fixedsize":{"usage":"N","type":"bool"},"fontcolor":{"usage":"ENGC","type":"color"},"fontname":{"usage":"ENGC","type":"string"},"fontnames":{"usage":"G","type":"string"},"fontpath":{"usage":"G","type":"string"},"fontsize":{"usage":"ENGC","type":"double"},"group":{"usage":"N","type":"string"},"headURL":{"usage":"E","type":"escString"},"headclip":{"usage":"E","type":"bool"},"headhref":{"usage":"E","type":"escString"},"headlabel":{"usage":"E","type":"lblString"},"headport":{"usage":"E","type":"portPos"},"headtarget":{"usage":"E","type":"escString"},"headtooltip":{"usage":"E","type":"escString"},"height":{"usage":"N","type":"double"},"href":{"usage":"ENGC","type":"escString"},"id":{"usage":"GNE","type":"lblString"},"image":{"usage":"N","type":"string"},"imagepath":{"usage":"G","type":"string"},"imagescale":{"usage":"N","type":"string"},"label":{"usage":"ENGC","type":"lblString"},"labelURL":{"usage":"E","type":"escString"},"labelangle":{"usage":"E","type":"double"},"labeldistance":{"usage":"E","type":"double"},"labelfloat":{"usage":"E","type":"bool"},"labelfontcolor":{"usage":"E","type":"color"},"labelfontname":{"usage":"E","type":"string"},"labelfontsize":{"usage":"E","type":"double"},"labelhref":{"usage":"E","type":"escString"},"labeljust":{"usage":"GC","type":"string"},"labelloc":{"usage":"NGC","type":"string"},"labeltarget":{"usage":"E","type":"escString"},"labeltooltip":{"usage":"E","type":"escString"},"landscape":{"usage":"G","type":"bool"},"layer":{"usage":"ENC","type":"layerRange"},"layerlistsep":{"usage":"G","type":"string"},"layers":{"usage":"G","type":"layerList"},"layerselect":{"usage":"G","type":"layerRange"},"layersep":{"usage":"G","type":"string"},"layout":{"usage":"G","type":"string"},"len":{"usage":"E","type":"double"},"levels":{"usage":"G","type":"int"},"levelsgap":{"usage":"G","type":"double"},"lhead":{"usage":"E","type":"string"},"lheight":{"usage":"GC","type":"double"},"lp":{"usage":"EGC","type":"point"},"ltail":{"usage":"E","type":"string"},"lwidth":{"usage":"GC","type":"double"},"margin":{"usage":"NGC","type":"pointf"},"maxiter":{"usage":"G","type":"int"},"mclimit":{"usage":"G","type":"double"},"mindist":{"usage":"G","type":"double"},"minlen":{"usage":"E","type":"int"},"mode":{"usage":"G","type":"string"},"model":{"usage":"G","type":"string"},"mosek":{"usage":"G","type":"bool"},"nodesep":{"usage":"G","type":"double"},"nojustify":{"usage":"GCNE","type":"bool"},"normalize":{"usage":"G","type":"bool"},"nslimit":{"usage":"G","type":"double"},"nslimit1":{"usage":"G","type":"double"},"ordering":{"usage":"GN","type":"string"},"orientation":{"usage":"GN","type":"string"},"outputorder":{"usage":"G","type":"outputMode"},"overlap":{"usage":"G","type":"string"},"overlap_scaling":{"usage":"G","type":"double"},"pack":{"usage":"G","type":"int"},"packmode":{"usage":"G","type":"packMode"},"pad":{"usage":"G","type":"pointf"},"page":{"usage":"G","type":"pointf"},"pagedir":{"usage":"G","type":"pagedir"},"pencolor":{"usage":"C","type":"color"},"penwidth":{"usage":"CNE","type":"double"},"peripheries":{"usage":"NC","type":"int"},"pin":{"usage":"N","type":"bool"},"pos":{"usage":"EN","type":"point"},"quadtree":{"usage":"G","type":"quadType"},"quantum":{"usage":"G","type":"double"},"rank":{"usage":"S","type":"rankType"},"rankdir":{"usage":"G","type":"rankdir"},"ranksep":{"usage":"G","type":"double"},"ratio":{"usage":"G","type":"string"},"rects":{"usage":"N","type":"rect"},"regular":{"usage":"N","type":"bool"},"remincross":{"usage":"G","type":"bool"},"repulsiveforce":{"usage":"G","type":"double"},"resolution":{"usage":"G","type":"double"},"root":{"usage":"GN","type":"string"},"rotate":{"usage":"G","type":"int"},"rotation":{"usage":"G","type":"double"},"samehead":{"usage":"E","type":"string"},"sametail":{"usage":"E","type":"string"},"samplepoints":{"usage":"N","type":"int"},"scale":{"usage":"G","type":"double"},"searchsize":{"usage":"G","type":"int"},"sep":{"usage":"G","type":"double"},"shape":{"usage":"N","type":"shape"},"shapefile":{"usage":"N","type":"string"},"showboxes":{"usage":"ENG","type":"int"},"sides":{"usage":"N","type":"int"},"size":{"usage":"G","type":"pointf"},"skew":{"usage":"N","type":"double"},"smoothing":{"usage":"G","type":"smoothType"},"sortv":{"usage":"GCN","type":"int"},"splines":{"usage":"G","type":"string"},"start":{"usage":"G","type":"startType"},"style":{"usage":"ENCG","type":"style"},"stylesheet":{"usage":"G","type":"string"},"tailURL":{"usage":"E","type":"escString"},"tailclip":{"usage":"E","type":"bool"},"tailhref":{"usage":"E","type":"escString"},"taillabel":{"usage":"E","type":"lblString"},"tailport":{"usage":"E","type":"portPos"},"tailtarget":{"usage":"E","type":"escString"},"tailtooltip":{"usage":"E","type":"escString"},"target":{"usage":"ENGC","type":"escString"},"tooltip":{"usage":"NEC","type":"escString"},"truecolor":{"usage":"G","type":"bool"},"vertices":{"usage":"N","type":"pointfList"},"viewport":{"usage":"G","type":"viewPort"},"voro_margin":{"usage":"G","type":"double"},"weight":{"usage":"E","type":"double"},"width":{"usage":"N","type":"double"},"xlabel":{"usage":"EN","type":"lblString"},"z":{"usage":"N","type":"double"}};var gType={"E":"edge","N":"node","G":"graph","C":"cluster"};var quotedTypes=["escString","rect","color","colorList","string","lblString","portPos","point","pointf","pointfList","splineType","style","viewPort"];function mustBeQuoted(data){return(quotedTypes.indexOf(attrs[data].type)!==-1);}
function quoteMe(attr,value){if(mustBeQuoted(attr)){return('"'+value+'"');}else{return(value);}}
function validateAttribut(name,type){if(attrs[name]){return(attrs[name].usage.indexOf(type)>-1);}else{return(false);}}
window.isValid=function(name,type){return validateAttribut(name,type);};var Attributs=window.Attributs=function(t){this._type=t;this.attributs=new Hash();};Attributs.prototype.length=function(){return(this.attributs.length);};Attributs.prototype.set=function(name,value){if(validateAttribut(name,this._type)===false){console.log("Warning : Invalid attribut `"+name+"' for a "+gType[this._type]);}
this.attributs.setItem(name,value);};Attributs.prototype.get=function(name){return this.attributs.items[name];};Attributs.prototype.to_dot=function(link){var attrsOutput="",sep="";if(this.attributs.length>0){attrsOutput=attrsOutput+" [ ";for(var name in this.attributs.items){attrsOutput=attrsOutput+sep+name+" = "+quoteMe(name,this.attributs.items[name]);sep=", ";}
attrsOutput=attrsOutput+" ]";}
return attrsOutput;};


var Node=window.Node=function(graph,id){this.relativeGraph=graph;this.id=id;this.attributs=new Attributs("N");};Node.prototype.to=function(id,attrs){this.relativeGraph.addEdge(this,id,attrs);return this.relativeGraph.from(id);};Node.prototype.set=function(name,value){this.attributs.set(name,value);};Node.prototype.get=function(name){return this.attributs.get(name);};Node.prototype.to_dot=function(){var nodeOutput='"'+this.id+'"'+this.attributs.to_dot();return nodeOutput;};


var Edge=window.Edge=function(graph,nodeOne,nodeTwo){this.relativeGraph=graph;this.nodeOne=nodeOne;this.nodeTwo=nodeTwo;this.attributs=new Attributs("E");};Edge.prototype.set=function(name,value){this.attributs.set(name,value);};Edge.prototype.get=function(name){return this.attributs.get(name);};Edge.prototype.to_dot=function(){var edgeLink="->";if(this.relativeGraph.type==="graph"){edgeLink="--";}
var edgeOutput='"'+this.nodeOne.id+'"'+" "+edgeLink+" "+'"'+this.nodeTwo.id+'"';edgeOutput=edgeOutput+this.attributs.to_dot();return edgeOutput;};

var Graph=window.Graph=function(graph,id){this.relativeGraph=graph;this.id=id;this.type='graph';this.gvPath='';this.nodes=new Hash();this.edges=new Array();this.clusters=new Hash();if(this.relativeGraph==null){this.graphAttributs=new Attributs("G");}else{this.graphAttributs=new Attributs("C");}
this.nodesAttributs=new Attributs("N");this.edgesAttributs=new Attributs("E");this.use='dot';};Graph.prototype.addNode=function(id,attrs){this.nodes.setItem(id,new Node(this,id));if(attrs){for(k in attrs){this.nodes.items[id].set(k,attrs[k]);}}
return this.nodes.items[id];}
Graph.prototype.getNode=function(id){return this.nodes.items[id];}
Graph.prototype.from=function(id){if(this.nodes.items[id]==undefined){this.addNode(id);}
return this.nodes.items[id];}
Graph.prototype.nodeCount=function(){return this.nodes.length;}
Graph.prototype.addEdge=function(nodeOne,nodeTwo,attrs){var _nodeOne=nodeOne;var _nodeTwo=nodeTwo;if(typeof(nodeOne)=='string'){_nodeOne=this.nodes.items[nodeOne];if(_nodeOne==null){_nodeOne=this.addNode(nodeOne);}}
if(typeof(nodeTwo)=='string'){_nodeTwo=this.nodes.items[nodeTwo];if(_nodeTwo==null){_nodeTwo=this.addNode(nodeTwo);}}
var edge=new Edge(this,_nodeOne,_nodeTwo);if(attrs){for(k in attrs){edge.set(k,attrs[k]);}}
this.edges.push(edge);return edge;}
Graph.prototype.edgeCount=function(){return this.edges.length;};Graph.prototype.addCluster=function(id){var cluster=new Graph(this,id);cluster.type=this.type;this.clusters.setItem(id,cluster);return cluster;}
Graph.prototype.getCluster=function(id){return this.clusters.items[id];}
Graph.prototype.clusterCount=function(){return this.clusters.length;}
Graph.prototype.set=function(name,value){this.graphAttributs.set(name,value);}
Graph.prototype.get=function(name){return this.graphAttributs.get(name);}
Graph.prototype.setNodeAttribut=function(name,value){this.nodesAttributs.set(name,value);}
Graph.prototype.getNodeAttribut=function(name){return this.nodesAttributs.get(name);}
Graph.prototype.setEdgeAttribut=function(name,value){this.edgesAttributs.set(name,value);}
Graph.prototype.getEdgeAttribut=function(name){return this.edgesAttributs.get(name);}
Graph.prototype.to_dot=function(){var dotScript='';if(this.relativeGraph==null){dotScript=this.type+' '+this.id+' {\n'}else{dotScript='subgraph '+this.id+' {\n'}
if(this.graphAttributs.length()>0){dotScript=dotScript+"  graph"+this.graphAttributs.to_dot()+";\n";}
if(this.nodesAttributs.length()>0){dotScript=dotScript+"  node"+this.nodesAttributs.to_dot()+";\n";}
if(this.edgesAttributs.length()>0){dotScript=dotScript+"  edge"+this.edgesAttributs.to_dot()+";\n";}
for(var id in this.clusters.items){dotScript=dotScript+this.clusters.items[id].to_dot()+'\n'}
for(var id in this.nodes.items){dotScript=dotScript+'  '+this.nodes.items[id].to_dot()+';\n'}
for(var i in this.edges){dotScript=dotScript+'  '+this.edges[i].to_dot()+';\n'}
dotScript=dotScript+'}\n'
return dotScript;}
Graph.prototype.render=function(type_or_options,name_or_callback,errback){var parameters=[];var type=type_or_options;if(typeof(type_or_options)=='object'){type=type_or_options.type;if(type_or_options.use!=undefined){this.use=type_or_options.use;}
if(type_or_options.path!=undefined){this.gvPath=type_or_options.path;}
if(type_or_options.G!=undefined){for(attr in type_or_options.G){if(gvattrs.isValid(attr,"G")==false){console.log("Warning : Invalid attribut `"+attr+"' for a graph");}
parameters.push("-G"+attr+"="+type_or_options.G[attr])}}
if(type_or_options.N!=undefined){for(attr in type_or_options.N){if(gvattrs.isValid(attr,"N")==false){console.log("Warning : Invalid attribut `"+attr+"' for a node");}
parameters.push("-N"+attr+"="+type_or_options.N[attr])}}
if(type_or_options.E!=undefined){for(attr in type_or_options.E){if(gvattrs.isValid(attr,"E")==false){console.log("Warning : Invalid attribut `"+attr+"' for an edge");}
parameters.push("-E"+attr+"="+type_or_options.E[attr])}}}
parameters.push('-T'+type);var dotScript=this.to_dot();var cmd=this.use;if(this.gvPath!=''){cmd=path.join(this.gvPath,this.use)}
var rendered=null;var out=''
var err=''
var outcallback=function(data){if(rendered==null){rendered=data;}else{__b=new Buffer(rendered.length+data.length)
rendered.copy(__b,0,0)
data.copy(__b,rendered.length,0)
rendered=__b}};if(typeof(name_or_callback)=='string'){parameters.push('-o'+name_or_callback)
outcallback=function(data){out+=data;}}
graphviz=spawn(cmd,parameters);graphviz.stdout.on('data',outcallback);graphviz.stderr.on('data',function(data){err+=data;});graphviz.on('exit',function(code){if(code!==0){if(errback){errback(code,out,err)}}else{if(typeof(name_or_callback)=='function')name_or_callback(rendered);}});graphviz.stdin.write(this.to_dot());graphviz.stdin.end();}
Graph.prototype.output=function(type,name_or_callback,errback){this.render(type,name_or_callback,errback);}
Graph.prototype.setGraphVizPath=function(path){this.gvPath=path;}


window.graph=function(id){var graph=new Graph(null,id);graph.type='graph';return graph;};window.digraph=function(id){var graph=new Graph(null,id);graph.type='digraph';return graph;};function _parse(file,callback,errback){var gvprScript=path.join(__dirname,"ext","gvpr","dot2js.g"),parameters=["-f"+gvprScript,file],cmd="gvpr",__graph_eval,err='',out='',graphviz=spawn(cmd,parameters);graphviz.stdout.on('data',function(data){out+=data;eval(data.toString());});graphviz.stderr.on('data',function(data){err+=data;});graphviz.stdin.end();graphviz.on('exit',function(code){if(code!==0||__graph_eval===undefined){if(errback){errback(code,out,err);}}else{callback(__graph_eval);}});}
window.parse=function(file_or_script,callback,errback){if(fsExt.exist(file_or_script)){_parse(file_or_script,callback,errback);}else{temp.open('node-graphviz',function(err,info){fs.write(info.fd,file_or_script);fs.close(info.fd,function(err){_parse(info.path,callback,errback);});});}};

