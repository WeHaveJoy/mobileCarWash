module.exports = function MobiCarWash(recorded) {
    const recordedNames = recorded || {};


    function setName(name) {
        if (name) {
            if (recordedNames[name] === undefined) {
                recordedNames[name] = 0;
            }
            recordedNames[name];
        }

    }

    function washingServices(selectedVehicle, selectedServeType, name) {
        setName(name)
        if (selectedVehicle === "Bus") {
            return "Hi, " + name + "you chosen to wash your Bus, " + selectedServeType;
        }
        if (selectedVehicle === "Car") {
            return "Hi, " + name + "you chosen to wash your Car, " + selectedServeType;
        }
        if (selectedVehicle === "Taxi") {
            return "Hi, " + name + "you chosen to wash your Taxi, " + selectedServeType;
        }

    }

    // function regExpression(activeName) {
    //     var namesReg = /^[A-Za-z]+$/;
    //     var newInstanc = new RegExp(namesReg);
    //     var regexTest = newInstanc.test(activeName);
    //   console.log(regexTest);
    //   if(regexTest) { 
    //   var nameFixed = activeName.charAt(0).toUpperCase() + activeName.slice(1).toLowerCase();
    //     return nameFixed; 
    //   }

    // }
    function washCounter() {
        var namesList = Object.keys(recordedNames)
        return namesList.length;
    }

    // function recorder(action) {
    //     let names = [];
    //         if (action === 'activeName') {
    //             names = activeName;
    //         }

    //         greetedNames.push({
    //             names
    //         });
    //     }



    function getName() {
        return recordedNames;
    }


    return {
        setName,
        washingServices,
        washCounter,
        //regExpression,
        // recorder,
        getName,

    }
}