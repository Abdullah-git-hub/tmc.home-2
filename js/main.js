$("#problemContainer").html($("#phyProbs").html());


function tab(p){
    if(p == 'phy'){

        $("#problemContainer").html($("#phyProbs").html());
        $("#recPhy").addClass("tabSelected");
        $("#recMath").removeClass("tabSelected");

    }else if(p == 'math'){
        
        $("#problemContainer").html($("#mathProbs").html());
        $("#recPhy").removeClass("tabSelected");
        $("#recMath").addClass("tabSelected");

    }
}