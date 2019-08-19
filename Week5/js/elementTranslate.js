// 物件移動name必須是jQuery選擇器
ElementTranslate = function(name,x = 0, y = 0, theda = 0, scale = 1){

  add = [x, y, theda, scale];

    object = $(name);
    obPos = '';
    obPos = object.attr('transform');
    // "translate(610.804 851.148) rotate(-120)"
      if (obPos===undefined)
        { obPos='0 0 0' ;
    };

   //去除雜質剩下三個數值

    obPos = obPos.replace("translate","");
    obPos = obPos.replace("(","");
    obPos = obPos.replace(")","");
    obPos = obPos.replace("rotate","");
    obPos = obPos.replace("(","");
    obPos = obPos.replace(")","");
    obPos = obPos.replace("scale","");
    obPos = obPos.replace("(","");
    obPos = obPos.replace(")","");
    obPos = obPos.split(" ");

    // scale 疊加不好設
       for (var i = 0; i < 3; i++) {
      if (obPos[i]==undefined) {obPos[i] = 0;}
        obPos[i] = parseFloat( obPos[i] ) + parseFloat( add[i] );
            }
            obPos[3] = add[i];
            // translate(-19.5 -23.8) rotate(32)
    var TsFData = 'translate(' + obPos[0] + ' ' +obPos[1]+') rotate('
                  + obPos[2]+ ') scale(' + obPos[3] +')';

    object.attr('transform', TsFData);




}

