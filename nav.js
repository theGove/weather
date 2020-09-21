//https://frontierweather.dtn.com/weatherdatastore.html
function start_me_up(){
    const current_site = get_site()
    console.log("sites",sites[current_site][3])
    console.log("date",get_date())
    
    var di = document.getElementById('date');
    di.setAttribute("min", sites[current_site][2])
    di.setAttribute("max", sites[current_site][3])
    //di.setAttribute("value", "2018-05-02")
    di.value=get_date()
    console.log("di", di)

    const nav=document.getElementById("nav-div")
    //Create and append select list
    const site_select = document.createElement("select");
    site_select.id = "sites";
    nav.prepend(site_select);

    //Create and append the options
    for (const site in sites) {
        var option = document.createElement("option");
        option.value = site;
        option.text = sites[site][0] +", "+ sites[site][1];
        site_select.appendChild(option);
    }
    //create the date picker
    site_select.value = current_site

    //const select = document.createElement("select");

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

function get_site(){
    const a = window.location.href.split('/')
    //console.log(a)
    let n=-1
    for(let x=0;x<a.length;x++){
        if(a[x].length===4){
            if(!isNaN(a[x])){
               // we have found a four-digit number
                n=x
                break
            } 
        }
    }
    if(n>-1){return a[n-1]}

}

function get_date(){
    const a = window.location.href.split('/')
    //console.log(a)
    let n=-1
    for(let x=0;x<a.length;x++){
        if(a[x].length===4){
            if(!isNaN(a[x])){
               // we have found a four-digit number
                n=x
                break
            } 
        }
    }
    if(n>-1){return a[n] + "-" + ("0" + a[n+1]).slice(-2) + "-" +("0" + a[n+2]).slice(-2)  }

}