var actions=[];
for (var idx = 0; idx < e.actions.length; idx++) {
	var rawAction = e.actions[idx];
	var action = net.ProtobufManager.lookupType("lq."+rawAction.name).decode(rawAction.data);
	actions.push({name:rawAction.name, data:action});
}
var actions=[];
for(var r=0;r<e.records.length;r++){a+=e.records[r].length;var s=net.MessageWrapper.decodeMessage(e.records[r]),o=s.$type.name,l={name:o,data:s};
actions.push(l);