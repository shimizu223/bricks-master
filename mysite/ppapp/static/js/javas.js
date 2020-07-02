var co=0;
var btco=0;
var idlist=[];
var lines=[];
var scrollbox=document.getElementById("syori")

function dainyu(){
    let element = document.getElementById('syori');
    const div = document.createElement('div');
    const label = document.createElement('label');
    const nyu = document.createElement("input");
    const nyu2 = document.createElement("input");
    const i = document.createElement("i");
    const i2 = document.createElement("i");
    const hid = document.createElement("input");
    const bt = document.createElement("input");
    const p = document.createElement("p");


    co++
    hid.setAttribute("type","hidden");
    hid.setAttribute("name","date");
    hid.setAttribute("value","dainyu");
    element.appendChild(hid);

    div.id = "dt" + co
    div.setAttribute("class","box btn-social-flat-icon--dainyu");
    element.appendChild(div);
    let divelement = document.getElementById('dt' + co);

    p.setAttribute("class","pco");
    p.innerHTML=co
    divelement.appendChild(p)

    label.setAttribute("class","ef");
    label.id = "ld" + co
    divelement.appendChild(label);
    let labelelement = document.getElementById('ld' + co);

    nyu.setAttribute("type","text");
    nyu.setAttribute("name","date");
    nyu.setAttribute("class","te1 cp_iptxt cp_iptxt_size");
    nyu.setAttribute("placeholder","代入先");

    labelelement.appendChild(nyu);

    i2.setAttribute("class","fas fa-equals fa-2x dl3");
    labelelement.appendChild(i2);

    nyu2.setAttribute("type","text");
    nyu2.setAttribute("name","date");
    nyu2.setAttribute("class","te2 cp_iptxt cp_iptxt_size");
    nyu2.setAttribute("placeholder","代入値");
    labelelement.appendChild(nyu2);

    bt.setAttribute("type","button");
    bt.setAttribute("value","CNT");
    bt.setAttribute("class","connectbtn btn-social-flat-icon--dainyu");
    bt.setAttribute("id","daibt"+co)
    bt.setAttribute("onclick","btclick(this.id)")
    labelelement.appendChild(bt);

    $(function() {
                $("#dt"+co).draggable({
                containment : "#syori",
                drag : function (event , ui) {
                kousin()
                }
                });
                });

    $('#daibt'+co).click(function() {
        const hid2 = document.createElement("input");
        hid2.setAttribute("type","hidden");
        hid2.setAttribute("name","date");
        hid2.setAttribute("value",btco);
        labelelement.appendChild(hid2);
        btco++
      });
}

function cl(ty,coler){
    let element = document.getElementById('syori');
    const div = document.createElement('div');
    const label = document.createElement('label');
    const nyu = document.createElement("input");
    const i = document.createElement("i");
    const hid = document.createElement("input");
    const bt = document.createElement("input");
    const p = document.createElement("p");

    co++

    hid.setAttribute("type","hidden");
    hid.setAttribute("name","date");
    hid.setAttribute("value",ty);
    element.appendChild(hid);

    div.id = "dt" + co
    div.setAttribute("class","box "+coler);
    element.appendChild(div);
    let divelement = document.getElementById('dt' + co);

    p.setAttribute("class","pco");
    p.innerHTML=co
    divelement.appendChild(p)

    label.setAttribute("class","ef");
    label.id = "ld" + co
    divelement.appendChild(label);
    let labelelement = document.getElementById('ld' + co);

    nyu.setAttribute("type","text");
    nyu.setAttribute("name","date");
    nyu.setAttribute("class","te3 cp_iptxt cp_iptxt_size");
    if (ty=="upload"){
    nyu.setAttribute("placeholder","変数名");
    }
    else{
    nyu.setAttribute("placeholder","代入先");
    }
    labelelement.appendChild(nyu);

    bt.setAttribute("type","button");
    bt.setAttribute("value","CNT");
    bt.setAttribute("class","connectbtn "+coler);
    bt.setAttribute("id","sibt"+co)
    bt.setAttribute("onclick","btclick(this.id)")
    labelelement.appendChild(bt);

    if(ty=="add"){
        i.setAttribute("class","fa fa-plus fa-2x dl3");
        labelelement.appendChild(i);
    }
    if(ty=="sub"){
        i.setAttribute("class","fa fa-minus fa-2x dl3");
        labelelement.appendChild(i);
    }
    if(ty=="mul"){
        i.setAttribute("class","fa fa-times fa-2x dl3");
        labelelement.appendChild(i);
    }
    if(ty=="div"){
        i.setAttribute("class","fa fa-divide fa-2x dl3");
        labelelement.appendChild(i);
    }
    if(ty=="upload"){
        i.setAttribute("class","fas fa-upload fa-2x dl3");
        labelelement.appendChild(i);
    }

     $(function() {
        $("#dt"+co).draggable({
        containment : "#syori",
        drag : function (event , ui) {
                kousin()
                }
        });
     });

     $('#sibt'+co).click(function() {
        const hid2 = document.createElement("input");
        hid2.setAttribute("type","hidden");
        hid2.setAttribute("name","date");
        hid2.setAttribute("value",btco);
        labelelement.appendChild(hid2);
        btco++
      })
}

function add(){
    cl("add","btn-social-flat-icon--plus")
}

function sub(){
    cl("sub","btn-social-flat-icon--minus")
}

function mul(){
    cl("mul","btn-social-flat-icon--times")
}

function div(){
    cl("div","btn-social-flat-icon--divide")
}

function upload(){
    cl("upload","btn-social-flat-icon--upload")
}

function loop(){
    let element = document.getElementById('syori');
    const div = document.createElement('div');
    const label = document.createElement('label');
    const nyu = document.createElement("input");
    const nyu2 = document.createElement("input");
    const nyu3 = document.createElement("input");
    const i = document.createElement("i");
    const i2 = document.createElement("i");
    const hid = document.createElement("input");
    const bt = document.createElement("input");
    const p = document.createElement("p");

    co++

    hid.setAttribute("type","hidden");
    hid.setAttribute("name","date");
    hid.setAttribute("value","loop");
    element.appendChild(hid);

    div.id = "dt" + co
    div.setAttribute("class","box btn-social-flat-icon--alt");
    element.appendChild(div);
    let divelement = document.getElementById('dt' + co);

    p.setAttribute("class","pco");
    p.innerHTML=co
    divelement.appendChild(p)

    label.setAttribute("class","ef");
    label.id = "ld" + co
    divelement.appendChild(label);
    let labelelement = document.getElementById('ld' + co);

    nyu.setAttribute("type","text");
    nyu.setAttribute("name","date");
    nyu.setAttribute("class","te0 cp_iptxt cp_iptxt_size2");
    nyu.setAttribute("placeholder","値1");
    labelelement.appendChild(nyu);

    nyu2.setAttribute("type","text");
    nyu2.setAttribute("name","date");
    nyu2.setAttribute("class","te4 cp_iptxt cp_iptxt_size2");
    nyu2.setAttribute("placeholder","値2");
    labelelement.appendChild(nyu2);

    nyu3.setAttribute("type","text");
    nyu3.setAttribute("name","date");
    nyu3.setAttribute("class","te5 cp_iptxt cp_iptxt_size2");
    nyu3.setAttribute("placeholder","値3");
    labelelement.appendChild(nyu3);

    i.setAttribute("class","fas fa-sync fa-lg dl3");
    divelement.appendChild(i);

    i2.setAttribute("class","fas fa-equals dl");
    divelement.appendChild(i2);

    bt.setAttribute("type","button");
    bt.setAttribute("value","CNT");
    bt.setAttribute("class","connectbtn btn-social-flat-icon--alt");
    bt.setAttribute("id","sibt"+co)
    bt.setAttribute("onclick","btclick(this.id)")
    divelement.appendChild(bt);

     $(function() {
        $("#dt"+co).draggable({
        containment : "#syori",
        drag : function (event , ui) {
                kousin()
                }
        });
     });

     $('#sibt'+co).click(function() {
        const hid2 = document.createElement("input");
        hid2.setAttribute("type","hidden");
        hid2.setAttribute("name","date");
        hid2.setAttribute("value",btco);
        labelelement.appendChild(hid2);
        btco++
      })
}

function branch(){
    let element = document.getElementById('syori');
    const div = document.createElement('div');
    const label = document.createElement('label');
    const nyu = document.createElement("input");
    const nyu2 = document.createElement("input");
    const sel = document.createElement("select");
    const opt1 = document.createElement("option");
    const opt2 = document.createElement("option");
    const opt3 = document.createElement("option");
    const opt4 = document.createElement("option");
    const i2 = document.createElement("i");
    const hid = document.createElement("input");
    const bt = document.createElement("input");
    const p = document.createElement("p");


    co++
    hid.setAttribute("type","hidden");
    hid.setAttribute("name","date");
    hid.setAttribute("value","branch");
    element.appendChild(hid);

    div.id = "dt" + co
    div.setAttribute("class","box btn-social-flat-icon--branch");
    element.appendChild(div);
    let divelement = document.getElementById('dt' + co);

    p.setAttribute("class","pco");
    p.innerHTML=co
    divelement.appendChild(p)

    sel.setAttribute("class","compare");
    sel.setAttribute("name","date");
    sel.id = "sel" + co
    divelement.appendChild(sel);
    let selelement = document.getElementById('sel' + co);
    opt1.setAttribute("value","equal");
    opt1.innerHTML="==";
    selelement.appendChild(opt1);
    opt2.setAttribute("value","bigger");
    opt2.innerHTML=">";
    selelement.appendChild(opt2);
    opt3.setAttribute("value","smaller");
    opt3.innerHTML="<";
    selelement.appendChild(opt3);
    opt4.setAttribute("value","notequal");
    opt4.innerHTML="!=";
    selelement.appendChild(opt4);

    label.setAttribute("class","ef");
    label.id = "ld" + co
    divelement.appendChild(label);
    let labelelement = document.getElementById('ld' + co);

    nyu.setAttribute("type","text");
    nyu.setAttribute("name","date");
    nyu.setAttribute("class","te1 cp_iptxt cp_iptxt_size2");
    nyu.setAttribute("placeholder","値１");

    labelelement.appendChild(nyu);

    i2.setAttribute("class","fas fa-code-branch fa-rotate-180 fa-2x dl3");
    labelelement.appendChild(i2);

    nyu2.setAttribute("type","text");
    nyu2.setAttribute("name","date");
    nyu2.setAttribute("class","te2 cp_iptxt cp_iptxt_size2");
    nyu2.setAttribute("placeholder","値2");
    labelelement.appendChild(nyu2);

    bt.setAttribute("type","button");
    bt.setAttribute("value","CNT");
    bt.setAttribute("class","connectbtn btn-social-flat-icon--branch");
    bt.setAttribute("id","daibt"+co);
    bt.setAttribute("onclick","btclick(this.id)");
    labelelement.appendChild(bt);

    $(function() {
        $("#dt"+co).draggable({
        containment : "#syori",
        drag : function (event , ui) {
        kousin()
        }
        });
        });

    $('#daibt'+co).click(function() {
        const hid2 = document.createElement("input");
        hid2.setAttribute("type","hidden");
        hid2.setAttribute("name","date");
        hid2.setAttribute("value",btco);
        labelelement.appendChild(hid2);
        btco++
      });
}


function btclick(id){
    idlist.push(id)
    if((idlist.length % 2) == 0){
                var random = Math.round( Math.random()*7 );
                var line=new LeaderLine(
                document.getElementById(idlist[idlist.length-2]),
                document.getElementById(idlist[idlist.length-1]),
                {
                    color: '#f7f5ee',
                    dropShadow: {dx: 0, dy: 2},
                    size: 2,
                }
                );
                lines.push(line)
        }
}

function kousin(){
    if(lines.length>0){
        for(i=0;i<lines.length;i++){
            lines[i].position();
        }
    }
}