function school(penPs, markerPS, cleaningAgent, discount)
{
    let prisePen = 5.8;
    let priseMarker = 7.2;
    let cleaning = 1.2;

    let penPakege = penPs * prisePen;
    let markerPakege = markerPS * priseMarker;
    let cleaningAgentPrice = cleaningAgent * cleaning;

    let allMaterials = penPakege + markerPakege + cleaningAgentPrice;

    let totalPrice = allMaterials- (allMaterials *(discount / 100));

    console.log(totalPrice);
}

school(2,3,4,25)
