(function () {
    console.log(parseData(";key,value;key2,value2;key3:k,1;k2,2;k3,3;"));
    function parseData(data) {
        var props = data.split(":");
        var obj = {};
        var p = props[0].split(";");
        if(p[0]=="")
            p.shift();
        if(p[p.length-1]=="")
            p.pop();
        for(var i=0;i<p.length;i++) {
            var p1 = p[i].split(",");
            obj[p1[0]]=p1[1];
        }
        var props2 = props[1].split(";");
        if(props2[0]=="")
            props2.shift();
        if(props2[props2.length-1]=="")
            props2.pop();
        var o = [];
        for(var i=0;i<props2.length;i++) {
            var p2 = props2[i].split(",");
            o[p2[0]]=p2[1];
        }
        obj[p[p.length-1]]=o;
        return obj;
    }
})();
