//https://frontierweather.dtn.com/weatherdatastore.html

var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
month_days=[31,28,31,30,31,30,31,31,30,31,31,31]
start_year={
    CYXX:2010,
    ABR:2004,
    ABI:2004,
    CWZA:2010,
    CAK:2004,
    ALB:1998,
    ABQ:1998,
    ESF:2004,
    ABE:1998,
    AMG:2004,
    APN:2004,
    AOO:2004,
    AMA:2004,
    AVL:2004,
    CWJI:2010,
    AST:2004,
    AHN:1998,
    ATL:1998,
    ACY:1998,
    AGS:1998,
    AUG:2004,
    AUS:1998,
    BFL:2004,
    BWI:1998,
    BGR:2004,
    BTR:2004,
    CWHV:2010,
    BKW:2013,
    BIL:1998,
    BHM:1998,
    BHM:1998,
    BIS:1998,
    BOI:1998,
    BOS:1998,
    BWG:2004,
    CYBR:2010,
    BDR:2004,
    CWVU:2010,
    TRI:2004,
    BRO:2004,
    BUF:1998,
    BUR:1998,
    BTV:1998,
    CWWB:2010,
    BTM:2004,
    CYYC:2010,
    HSE:2004,
    CWFJ:2010,
    CAR:2004,
    CPR:2004,
    CDC:2004,
    CHS:2004,
    CRW:2004,
    CLT:1998,
    CHA:2004,
    CYS:2004,
    ORD:1998,
    MDW:2004,
    CVG:1998,
    CLE:1998,
    COS:2004,
    COU:2004,
    CAE:1998,
    CMH:1998,
    CON:2004,
    CNK:2013,
    CRP:2004,
    CYXC:2010,
    CWRT:2010,
    DAG:2004,
    DHT:2004,
    DFW:1998,
    DAY:1998,
    DAB:2013,
    DRT:2013,
    CXDI:2010,
    DEN:1998,
    DSM:1998,
    DTW:1998,
    DDC:2004,
    DBQ:2004,
    DLH:2004,
    CYEG:2010,
    ELP:2004,
    EKN:2013,
    EKO:2004,
    ELY:2004,
    ERI:1998,
    CWAJ:2010,
    CYEN:2010,
    EUG:2004,
    EVV:1998,
    FAR:2004,
    FYV:2004,
    FLG:1998,
    FNT:2013,
    FLO:2004,
    FMY:2004,
    FSM:1998,
    FWA:1998,
    CYFC:2010,
    FAT:2004,
    GAG:2004,
    GGW:2004,
    CWGD:2010,
    GLD:2004,
    CYZE:2010,
    GFK:2004,
    GRI:2004,
    GJT:2004,
    GRR:2004,
    GTF:1998,
    GRB:2004,
    GSO:1998,
    GSP:1998,
    CWGH:2010,
    MDT:1998,
    BDL:1998,
    HVR:2004,
    HLN:2004,
    HIB:2004,
    CYHE:2010,
    IAH:1998,
    HOU:2004,
    HTS:2004,
    HSV:2013,
    HON:2013,
    IND:1998,
    INL:2004,
    JAN:1998,
    JAX:1998,
    JMS:2007,
    JLN:2013,
    GPI:2004,
    CYKA:2010,
    MCI:1998,
    EYW:2004,
    CWBE:2010,
    TYS:2004,
    CWST:2010,
    LCH:1998,
    LND:2013,
    LAN:2004,
    LAR:2004,
    LAS:1998,
    LWS:2004,
    LEX:2004,
    LNK:2004,
    LIT:1998,
    LGB:1998,
    CQT:1998,
    LAX:1998,
    SDF:1998,
    LBB:2004,
    MCN:1998,
    MSN:1998,
    MCW:2004,
    MLC:2004,
    MFR:2004,
    MLB:2004,
    MEM:1998,
    MEI:2004,
    MIA:1998,
    MAF:2004,
    CWRY:2010,
    MKE:1998,
    MSP:1998,
    MOT:2004,
    MSO:2004,
    MOB:1998,
    MLI:1998,
    MGM:1998,
    CYUL:2010,
    MKG:2004,
    BNA:1998,
    CWNM:2010,
    MSY:1998,
    NYC:2004,
    JFK:1998,
    LGA:1998,
    EWR:1998,
    ORF:2004,
    CYYB:2010,
    LBF:2004,
    OKC:1998,
    OMA:1998,
    CWOE:2010,
    MCO:1998,
    CWYY:2010,
    CYOW:2010,
    PDT:2004,
    PNS:2004,
    CYYF:2010,
    PIA:1998,
    PHL:1998,
    PHX:1998,
    PIR:2004,
    CWPO:2010,
    CZPC:2010,
    PIT:1998,
    PIH:2004,
    CWPE:2010,
    CWQP:2010,
    PNC:2013,
    CWWZ:2010,
    PWM:2004,
    PDX:1998,
    CYPA:2010,
    CYXS:2010,
    PVD:1998,
    PUB:2004,
    CYQB:2010,
    UIL:2004,
    RDU:1998,
    RAP:1998,
    CYQR:2010,
    RNO:2004,
    CYRV:2010,
    RIC:1998,
    RIV:2007,
    ROA:2004,
    RST:2013,
    ROC:2013,
    RFD:1998,
    SAC:1998,
    CYSJ:2010,
    STL:1998,
    SLE:2013,
    SLC:1998,
    SJT:2004,
    SAT:1998,
    SAN:2004,
    SFO:1998,
    SBA:2004,
    ANJ:2013,
    CYAM:2010,
    SAV:1998,
    BFF:2004,
    AVP:1998,
    SEA:1998,
    SHR:2013,
    SHV:1998,
    SUX:1998,
    FSD:2004,
    SBN:2004,
    CWGW:2010,
    GEG:1998,
    SPI:2004,
    SGF:2004,
    CWBZ:2010,
    CWIT:2010,
    CWIY:2010,
    CWSS:2010,
    SYR:2004,
    TLH:2004,
    TPA:1998,
    CYQD:2010,
    CYQT:2010,
    TOL:2004,
    TOP:1998,
    CYYZ:2010,
    CYTZ:2010,
    CYTR:2010,
    TUS:1998,
    TUL:1998,
    TUP:2004,
    CWVN:2010,
    CYVR:2010,
    VCT:2013,
    CYYJ:2010,
    ACT:2004,
    IAD:1998,
    DCA:1998,
    ALO:2004,
    ATY:2004,
    PBI:2013,
    CWWF:2010,
    HPN:2004,
    CYVV:2010,
    ICT:1998,
    SPS:2004,
    IPT:1998,
    ISN:2004,
    ILG:2004,
    ILM:1998,
    CYQG:2010,
    WMC:2013,
    CYWG:2010,
    YKM:2004,
    CYQI:2010,
    YNG:1998,
    ZZV:2013
}
function update(){
    let url=document.location.href.split("?")[0]
    
    const site = $("#site").val()
    const yr = $("#year").val()
    const mo = $("#month").val()
    const da = $("#day").val()

    url+="?site="+site+"&yr="+yr+"&mo="+mo+"&da="+da
    console.log("updating", url)
    document.location.replace(url)
}
function start_me_up(){
    let prefix = "https://thegove.github.io/"
    let param = get_url_params()

    //defaults for params in case not specified
    if(!param.site){param.site="KACY"}
    if(!param.yr){param.yr="2010"}
    if(!param.mo){param.mo="1"}
    if(!param.da){param.da="1"}

    console.log("param",param)

    let json = param.site+"/"+param.yr+"/"+param.site+"_"+param.yr+"-"+param.mo+"-"+param.da+".json"
    
    
    //if(param.site.substr(0,1)==='K'){param.site=param.site.substr(1)}

    console.log("site",param.site)
    console.log("howdy howdy howdy ",json)
    jQuery.getScript(prefix + json)
        .done(function() {
            //set the dropdowns
            $('#site').val(param.site)
            $('#year').val(param.yr)
            $('#month').val(param.mo)
            $('#day').val(param.da)


            // get the city and state
            let city = $("#site option:selected").text();
            let state = city.split(", ")[1]
            city = city.split(", ")[0]


            try{
                $('#heading').html(weather.length)
            } catch(e){
                $('#heading').html('No weather data for '+city+', ' + state + ' on ' + month_names[param.mo-1]+' '+param.da+', '+param.yr);
                return
            }


            // build the date
            let date_string = param.mo+"/"+param.da+"/"+  param.yr          

            console.log(weather)
            console.log(city, state, date_string)

            $('#heading').html(month_names[param.mo-1]+' '+param.da+', '+param.yr+' Hourly Weather for '+city+', '+state);

            if(weather[0].length === 12){
                //Canada
                $('#data-table').append('<tr><th>Province</th><th>City</th><th>Date</th><th>Hour</th><th>Temperature</th><th>Dewpoint</th><th>Relative Humidity</th><th>Wind Direction</th><th>Wind Speed</th><th>Feels Like</th><th>Clouds</th><th>Pressure</th><th><a href="metar.html" target="_blank">Weather</a></th><th>Precip</th><th>Source</th></tr>');
                for(const one_hour of weather){
                    let row = '<tr><td>' + state + '</td><td>' + city + '</td><td>' + date_string  +'</td>'
                    for(let data_point of one_hour){
                        let val=data_point
                        if (!val){val=""}
                        if(data_point===null||data_point==='null'){data_point=""}
                        row += '<td>'+data_point+'</td>'
                    }
                    $('#data-table').append(row+"</tr>");
                }
            }else{
                //US
                $('#data-table').append('<tr><th>State</th><th>City</th><th>Date</th><th>Hour</th><th>Temperature</th><th>Dewpoint</th><th>Relative Humidity</th><th>Wind Direction</th><th>Wind Speed</th><th>Clouds</th><th>Pressure</th><th><a href="metar.html" target="_blank">Weather</a></th><th>Precip</th><th>Source</th></tr>');
                for(const one_hour of weather){
                    let row = '<tr><td>' + state + '</td><td>' + city + '</td><td>' + date_string  +'</td>'
                    for(let data_point of one_hour){
                        let val=data_point
                        if (!val){val=""}
                        if(data_point===null||data_point==='null'){data_point=""}
                        row += '<td>'+data_point+'</td>'
                    }
                    $('#data-table').append(row+"</tr>");
                }
            }

        })
        .fail(function() {
            console.log("no data")
    });

}


function get_url_params() {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i, retval={};

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        retval[sParameterName[0]]=sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1])
    }
    return retval;
}


function choose_site(){
    let site = $("#site").val()
    let yr = $("#year").val()
    console.log("site:", site, start_year[site])
    $('#year').find('option').remove()
    for(let x=start_year[site];x<=2019;x++){
        $('#year').append('<option value="'+x+'">'+x+'</option>')
    }
    if($('#year option[value="'+yr+'"]').length){
        $('#year').val(yr)
    }
    choose_year()
    
}

function choose_year(){
    let yr = $("#year").val()
    let da = $("#day").val()
    console.log("year:", yr)
    let mo = $("#month").val()
    if(mo==='2'){
        if(parseInt($("#year").val())%4===0){
            reset_days(29)
        }else{
            reset_days(28)
        }
        if($('#day option[value="'+da+'"]').length){
            $('#day').val(da)
        }else{
            $('#day').val(28)
        }
    }

}

function choose_month(){
    let mo = $("#month").val()
    let da = $("#day").val()
    console.log("month:", mo)
    let days = month_days[mo-1]
    if(mo==='2' && parseInt($("#year").val())%4===0){
        days=29
    }
    reset_days(days)
    while(!$('#day option[value="'+da+'"]').length){
        da--
    }
    $('#day').val(da)

}

function reset_days(days){
    $('#day').find('option').remove()
    for(let x=1;x<=days;x++){
        $('#day').append('<option value="'+x+'">'+x+'</option>')
    }
}
