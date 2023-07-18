// Event listener for fetching SVG for a specific callsign
$(document).ready(function() {
    $('#fetchBtn').click(function() {
        const callsign = $('#callsign').val().toUpperCase();
        if(callsign) {
            $.ajax({
                url: 'https://data.vatsim.net/v3/vatsim-data.json',
                type: 'GET',
                success: function(res) {
                    const pilots = res.pilots;
                    for(let pilot of pilots) {
                        if(pilot.callsign === callsign) {
                            createSvg(pilot);
                        }
                    }
                },
                error: function(err) {
                    console.log(err);
                }
            });
        }
    });
    // delete button listener
    $(document).on('click', '.deleteBtn', function() {
        $(this).closest('.movableSVG').remove();
    });
});

function getAhdg(route) {
    if (document.getElementById("airports").value == "EFET") {
        if (route.includes("DOPUD")) return "DOPUD";
        if (route.includes("EXUTI")) return "EXUTI";
    }
    if (document.getElementById("airports").value == "EFHA") {
        if (route.includes("ARBEV")) return "ARBEV";
        if (route.includes("ATSEN")) return "ATSEN";
        if (route.includes("ERTOP")) return "ERTOP";
        if (route.includes("IBOSU")) return "IBOSU";
        if (route.includes("OTLUD")) return "OTLUD";
        if (route.includes("USUPO")) return "USUPO";
    }
    if (document.getElementById("airports").value == "EFIV") {
        if (route.includes("LUSAG")) return "LUSAG";
        if (route.includes("NEKUX")) return "NEKUX";
        if (route.includes("SOTIT")) return "SOTIT";
    }
    if (document.getElementById("airports").value == "EFJO") {
        if (route.includes("ETENA")) return "ETENA";
        if (route.includes("RISEV")) return "RISEV";
        if (route.includes("UVOVO")) return "UVOVO";
    }
    if (document.getElementById("airports").value == "EFJY") {
        if (route.includes("ADEDO")) return "ADEDO";
        if (route.includes("ELSOV")) return "ELSOV";
        if (route.includes("EROKU")) return "EROKU";
        if (route.includes("LUMME")) return "LUMME";
        if (route.includes("RERGA")) return "RERGA";
        if (route.includes("XELMA")) return "XELMA";
    }
    if (document.getElementById("airports").value == "EFKI") {
        if (route.includes("ETROD")) return "ETROD";
        if (route.includes("EVRIG")) return "EVRIG";
        if (route.includes("ODRUB")) return "ODRUB";
        if (route.includes("UBIGA")) return "UBIGA";
    }
    if (document.getElementById("airports").value == "EFKE") {
        if (route.includes("BEXUL")) return "BEXUL";
        if (route.includes("BURJA")) return "BURJA";
        if (route.includes("INLEK")) return "INLEK";
        if (route.includes("NEPIX")) return "NEPIX";
    }
    if (document.getElementById("airports").value == "EFKT") {
        if (route.includes("AMULU")) return "AMULU";
        if (route.includes("EVIMI")) return "EVIMI";
        if (route.includes("EXUTI")) return "EXUTI";
        if (route.includes("TUGPU")) return "TUGPU";
        if (route.includes("XETMU")) return "XETMU";
    }
    if (document.getElementById("airports").value == "EFKK") {
        if (route.includes("ATPEL")) return "ATPEL";
        if (route.includes("BAPTU")) return "BAPTU";
        if (route.includes("EMDUR")) return "EMDUR";
        if (route.includes("NESUK")) return "NESUK";
        if (route.includes("VAXUN")) return "VAXUN";
    }
    if (document.getElementById("airports").value == "EFKU") {
        if (route.includes("ASTUX")) return "ASTUX";
        if (route.includes("ATLUL")) return "ATLUL";
        if (route.includes("ETENA")) return "ETENA";
        if (route.includes("NISPO")) return "NISPO";
        if (route.includes("UGLUM")) return "UGLUM";
    }
    if (document.getElementById("airports").value == "EFKS") {
        if (route.includes("BEVNA")) return "BEVNA";
        if (route.includes("IBEVU")) return "IBEVU";
        if (route.includes("OBISO")) return "OBISO";
    }
    if (document.getElementById("airports").value == "EFLP") {
        if (route.includes("ADSEB")) return "ADSEB";
        if (route.includes("ARLOM")) return "ARLOM";
        if (route.includes("ERKOM")) return "ERKOM";
        if (route.includes("SIGGE")) return "SIGGE";
    }
    if (document.getElementById("airports").value == "EFMA") {
        if (route.includes("DODAM")) return "DODAM";
        if (route.includes("EBEBU")) return "EBEBU";
        if (route.includes("OGLOB")) return "OGLOB";
        if (route.includes("RIKUM")) return "RIKUM";
        if (route.includes("SOTUP")) return "SOTUP";
    }
    if (document.getElementById("airports").value == "EFMI") {
        if (route.includes("REBGO")) return "REBGO";
        if (route.includes("UXEGA")) return "UXEGA";
        if (route.includes("VAVED")) return "VAVED";
    }
    if (document.getElementById("airports").value == "EFOU") {
        if (route.includes("ABKEM")) return "ABKEM";
        if (route.includes("ASLUP")) return "ASLUP";
        if (route.includes("BURJA")) return "BURJA";
        if (route.includes("IXONO")) return "IXONO";
        if (route.includes("MIKNU")) return "MIKNU";
        if (route.includes("NUBVU")) return "NUBVU";
        if (route.includes("OTVEM")) return "OTVEM";
        if (route.includes("SUVIB")) return "SUVIB";
        if (route.includes("UGMOR")) return "UGMOR";
        if (route.includes("UPEDU")) return "UPEDU";
        if (route.includes("XEVAP")) return "XEVAP";
    }
    if (document.getElementById("airports").value == "EFPO") {
        if (route.includes("IDNIS")) return "IDNIS";
        if (route.includes("KEFFA")) return "KEFFA";
        if (route.includes("NIFOT")) return "NIFOT";
        if (route.includes("OSDIL")) return "OSDIL";
        if (route.includes("ROGTU")) return "ROGTU";
        if (route.includes("UMSES")) return "UMSES";
        if (route.includes("XORMU")) return "XORMU";
    }
    if (document.getElementById("airports").value == "EFRO") {
        if (route.includes("ARFUT")) return "ARFUT";
        if (route.includes("IBSAN")) return "IBSAN";
        if (route.includes("MARXO")) return "MARXO";
        if (route.includes("NEMGU")) return "NEMGU";
        if (route.includes("NEPIX")) return "NEPIX";
        if (route.includes("OLNOP")) return "OLNOP";
        if (route.includes("OSLIT")) return "OSLIT";
        if (route.includes("RENVI")) return "RENVI";
        if (route.includes("ROTKO")) return "ROTKO";
    }
    if (document.getElementById("airports").value == "EFSA") {
        if (route.includes("ABMAX")) return "ABMAX";
        if (route.includes("ASPEM")) return "ASPEM";
        if (route.includes("RIVUM")) return "RIVUM";
    }
    if (document.getElementById("airports").value == "EFSI") {
        if (route.includes("AMASU")) return "AMASU";
        if (route.includes("GISUX")) return "GISUX";
        if (route.includes("VABUB")) return "VABUB";
    }
    if (document.getElementById("airports").value == "EFTP") {
        if (route.includes("ARBEV")) return "ARBEV";
        if (route.includes("ENETI")) return "ENETI";
        if (route.includes("EVLIT")) return "EVLIT";
        if (route.includes("GEMKU")) return "GEMKU";
        if (route.includes("NEBAB")) return "NEBAB";
        if (route.includes("NISVI")) return "NISVI";
        if (route.includes("UVEMO")) return "UVEMO";
        if (route.includes("XORMU")) return "XORMU";
    }
    if (document.getElementById("airports").value == "EFTU") {
        if (route.includes("EMPOM")) return "EMPOM";
        if (route.includes("EXUPA")) return "EXUPA";
        if (route.includes("IPMOT")) return "IPMOT";
        if (route.includes("LIVLU")) return "LIVLU";
        if (route.includes("NIRPU")) return "NIRPU";
        if (route.includes("OTKIL")) return "OTKIL";
        if (route.includes("UPAPU")) return "UPAPU";
        if (route.includes("UVOPA")) return "UVOPA";
    }
    if (document.getElementById("airports").value == "EFUT") {
        if (route.includes("ARLOM")) return "ARLOM";
        if (route.includes("NAXEP")) return "NAXEP";
        if (route.includes("OTKAP")) return "OTKAP";
        if (route.includes("VEPIN")) return "VEPIN";
    }
    if (document.getElementById("airports").value == "EFVA") {
        if (route.includes("AXUTI")) return "AXUTI";
        if (route.includes("BEGSU")) return "BEGSU";
        if (route.includes("BUPEG")) return "BUPEG";
        if (route.includes("GUBTU")) return "GUBTU";
        if (route.includes("RERBU")) return "RERBU";
        if (route.includes("SUBUG")) return "SUBUG";
        if (route.includes("UVATI")) return "UVATI";
    }
    return "";
}

// Function to fetch all pilots for an aerodrome and create SVGs for them
function fetchAll(aerodrome) {
    $.ajax({
        url: 'https://data.vatsim.net/v3/vatsim-data.json',
        type: 'GET',
        success: function (res) {
            let pilots = res.pilots.filter(pilot => 
                pilot.flight_plan &&
                (pilot.flight_plan.departure === aerodrome || pilot.flight_plan.arrival === aerodrome)
            );

            pilots.forEach(pilot => {
                try {
                    createSvg(pilot);
                } catch (err) {
                    console.error('Error creating SVG for pilot:', pilot, err);
                }
            });
        },
        error: function (err) {
            console.error(err);
        }
    });
}

// Function to create SVG for a pilot
function createSvg(pilot) {
    let uniqueId = pilot.callsign;
    let newSVG = $(`<div class='movableSVG'> <div id="stripBorder${uniqueId}" class="stripBorder blackStrip">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 488 71" style="enable-background:new 0 0 488 71; background-color:white;" xml:space="preserve">
            <text id="callsign" transform="matrix(1 0 0 1 16 15.9116)" class="st0 st1">OHCAQ</text>
            <text id="rwy" transform="matrix(1 0 0 1 295.1016 15.9116)" class="st0 st1">--</text>
            <text id="adepades" transform="matrix(1 0 0 1 333.2344 15.9116)" class="st0 st1">EFHK EFJY</text>
            <text id="squawk" transform="matrix(1 0 0 1 16 35.9116)" class="st0 st1">5554</text>
            <text id="atyp" xml:space="preserve" transform="matrix(1 0 0 1 16 50.9116)" class="st0 st2">1 L70  L</text>
            <text id="deptime" transform="matrix(1 0 0 1 120 11.9116)" class="st0 st2">1207</text>
            <text id="rfl" transform="matrix(1 0 0 1 174 11.9116)" class="st0 st2">F230</text>
            <text id="ahdg" transform="matrix(1 0 0 1 227 11.9116)" class="st0 st2">--</text>
            <text id="eet" transform="matrix(1 0 0 1 429 15.9116)" class="st0 st2">0045</text>
            <text id="frul" transform="matrix(1 0 0 1 477 11.9116)" class="st3 st2">I</text>
            <text id="spd" transform="matrix(1 0 0 1 16 64.9116)" class="st0 st2">N0114</text>
            <text id="rmk" transform="matrix(1 0 0 1 59 64.9116)" class="st0 st2">PBN/A1B1C1D1L1O1S1 DOF/230715 REG/HSTKY...</text>
            <text id="stripId" transform="matrix(1 0 0 1 412.6211 64.9116)" class="st0 st2">27121720NOTI</text>
            <text id="route" transform="matrix(1 0 0 1 334 30.9116)" class="st0 st2">LILJA RUOKI M857 NUNTO...</text>
            <rect x="0.5" y="0.5" class="st4" width="487" height="70"/>
            <rect x="0.5" y="0.5" class="st5" width="8" height="15"/>
            <rect x="119.5" y="0.5" class="st6" width="53" height="70"/>
            <rect x="225.5" y="0.5" class="st6" width="53" height="70"/>
            <polyline class="st6" points="331.5,71 331.5,34.5 383.5,34.5 383.5,71 "/>
            <polyline class="st6" points="383.5,71 383.5,34.5 435.5,34.5 435.5,71 "/>
            <polyline class="st6" points="435.5,71 435.5,34.5 487.5,34.5 487.5,71 "/>
            <line class="st6" x1="331.5" y1="0.59" x2="331.5" y2="70.59"/>
        </svg> </div>
        <button class='deleteBtn' style='user-select: none;'>Delete</button>
        <button id="printBtn">Print</button>
        <button id="penTool"><i class="fas fa-pen"></i></button>
        <button id="changeColor${uniqueId}" class="changeColorButton" onclick="changeStripColor('stripBorder${uniqueId}', 'changeColor${uniqueId}');"></button>
    </div>`);
    newSVG.find('#callsign').text(pilot.callsign);
    newSVG.find('#squawk').text(pilot.flight_plan.assigned_transponder);
    newSVG.find('#atyp').text("1 " + pilot.flight_plan.aircraft_faa);
    newSVG.find('#spd').text("N0" + pilot.flight_plan.cruise_tas);
    newSVG.find('#deptime').text(pilot.flight_plan.deptime);
    newSVG.find('#eet').text(pilot.flight_plan.enroute_time);
    newSVG.find('#frul').text(pilot.flight_plan.flight_rules);
    newSVG.find('#adepades').text(pilot.flight_plan.departure + " " + pilot.flight_plan.arrival);
    if (pilot.flight_plan.altitude <= 5000) {
        newSVG.find('#rfl').text("A0" + (pilot.flight_plan.altitude / 100));
    } else if (pilot.flight_plan.altitude > 5000 && pilot.flight_plan.altitude < 10000) {
        newSVG.find('#rfl').text("F0" + (pilot.flight_plan.altitude / 100));
    } else {
        newSVG.find('#rfl').text("F" + pilot.flight_plan.altitude / 100);
    }
    if (pilot.flight_plan.remarks.length > 56) {
        let truncatedRemarks = pilot.flight_plan.remarks.substring(0, 56);
        truncatedRemarks = truncatedRemarks.substring(0, Math.min(truncatedRemarks.length, truncatedRemarks.lastIndexOf(" "))).trim();
        newSVG.find('#rmk').text(truncatedRemarks);
    } else {
        newSVG.find('#rmk').text(pilot.flight_plan.remarks);
    }
    if (pilot.flight_plan.remarks.length > 25) {
        let truncatedRoute = pilot.flight_plan.route.substring(0, 25);
        truncatedRoute = truncatedRoute.substring(0, Math.min(truncatedRoute.length, truncatedRoute.lastIndexOf(" "))).trim();
        newSVG.find('#route').text(truncatedRoute);
    } else {
        newSVG.find('#route').text(pilot.flight_plan.route);
    }
    if (pilot.flight_plan.departure == document.getElementById('airports').value) {
        // departure strip default = blue
        newSVG.find('.stripBorder').attr('class', 'stripBorder blueStrip');
        newSVG.find(`#changeColor${uniqueId}`).css('background-color', '#047DBE');
    } else if (pilot.flight_plan.arrival == document.getElementById('airports').value) {
        // arrival strip default = red
        newSVG.find('.stripBorder').attr('class', 'stripBorder redStrip');
        newSVG.find(`#changeColor${uniqueId}`).css('background-color', '#93100F');
    } else {
        // strip default = black (also military)
        newSVG.find('.stripBorder').attr('class', 'stripBorder blackStrip');
        newSVG.find(`#changeColor${uniqueId}`).css('background-color', '#111111');
    }
    if (pilot.flight_plan.flight_rules != "I") {
        // VFR (local) strip default = yellow
        newSVG.find('.stripBorder').attr('class', 'stripBorder yellowStrip');
        newSVG.find(`#changeColor${uniqueId}`).css('background-color', '#D0C52F');
    }

    newSVG.find('#rwy').text($('#activeRunway').val());
    newSVG.find('#ahdg').text(getAhdg(pilot.flight_plan.route));
    let stripIds = pilot.last_updated.split('T');
    stripIds = stripIds[0].replace(/-/g, "");
    newSVG.find('#stripId').text(stripIds + "NOTI");
    newSVG.draggable();
    $('#container').append(newSVG);
}

function changeStripColor(id, buttonId) {
    if (document.getElementById(id).classList.contains("blackStrip")) {
        // change to blue
        document.getElementById(id).className = "stripBorder blueStrip";
        document.getElementById(buttonId).style.backgroundColor = "#047DBE";
    } 
    else if (document.getElementById(id).classList.contains("blueStrip")) {
        // change to red
        document.getElementById(id).className = "stripBorder redStrip";
        document.getElementById(buttonId).style.backgroundColor = "#93100F";
    }
    else if (document.getElementById(id).classList.contains("redStrip")) {
        // change to yellow
        document.getElementById(id).className = "stripBorder yellowStrip";
        document.getElementById(buttonId).style.backgroundColor = "#D0C52F";
    } 
    else if (document.getElementById(id).classList.contains("yellowStrip")) {
        // change to black
        document.getElementById(id).className = "stripBorder blackStrip";
        document.getElementById(buttonId).style.backgroundColor = "#111111";
    }
}

$(document).on('click', '.movableSVG', function(event) {
    event.stopPropagation();
    let mouseX = event.pageX - $(this).offset().left;
    let mouseY = event.pageY - $(this).offset().top;
    
    if (mouseY > 100) {
        return;
    }

    let newDiv = $('<div class="editableDiv" contenteditable="true" style="position:absolute; font-family: \'Indie Flower\', cursive; color: darkblue; font-size: 13pt;"></div>')
    .css('left', mouseX + 'px')
    .css('top', mouseY + 'px')
    .appendTo($(this))
    .focus();    

    newDiv.on('blur', function() {
        if($(this).text().trim() === '') {
            $(this).remove();
        }
    });

    newDiv.on('click', function(event) {
        event.stopPropagation();
        $(this).remove();
    });
});
