function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}





function woodCalculator(chair, table, bed) {
    var forEachChair = chair * 1;
    var forEachTable = table * 3;
    var forEachBed = bed * 5;
    var totalWoodReqd = forEachChair + forEachTable + forEachBed;
    return totalWoodReqd;
}






function brickCalculator(n) {
    if (n <= 10) {
        var firstTenFloor = 15;
        for (var i = 1; i <= n; i++)
            firstTenFloor = firstTenFloor * i * 1000;
        return firstTenFloor;

    }
    else if (n <= 20) {
        var secondTenFloor = 12;
        for (var i = 11; i <= n; i++)
            secondTenFloor = secondTenFloor * i * 1000;
        var sumOf = firstTenFloor + secondTenFloor;
        return sumOf;
    }
    else {
        var lastFloors = 10;
        for (var i = 21; i <= n; i++)
            lastFloors = lastFloors * i * 1000;
        return firstTenFloor + secondTenFloor + lastFloors;

    }

}






function tinyFriend(names) {
    var shortestName = names[0];
    for (var i = 0; i < names.length; i++) {
        var currentNames = names[i];
        if (currentNames.length < shortestName.length) {
            shortestName = currentNames;
        }
    }
    return shortestName;
}