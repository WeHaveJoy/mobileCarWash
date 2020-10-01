module.exports =  function  MobiCarWash(pool) {
    const recordedNames = {};


 async function setList(settings){
    await pool.query('insert into car_owners(name, location, car_type, service_type) values($1, $2), $3, $4', [settings, 1]);

  }

 function getList(){
    var list = pool.query('SELECT * FROM car_owners')
    return list;
 }


    // function setName(name) {
    //     if (name) {
    //         if (recordedNames[name] === undefined) {
    //             recordedNames[name] = 0;
    //         }
    //         recordedNames[name];
    //     }

    // }

    async function carService(SelectedServ){
        var names = await setList(settings)
        if (names.rowname === undefined) {
            await getList(names);   
        }
        await insertNames(names);

        if (SelectedServ === "Interior") {
            return "Interior";
        } 
        else if(SelectedServ === "Exterior"){
            return "Exterior";
        }
        else if (SelectedServ === "Both"){
            return "Both";
        }

    }


    // function getName() {
    //     return recordedNames;
    // }


    return {
        // setName,
        // getName,
        setList,
        getList,
        carService

    }
}




// function washingServices(selectedVehicle, selectedServeType, name) {
    //     setName(name)
    //     if (selectedVehicle === "Bus") {
    //         return "Hi, " + name + "you chosen to wash your Bus, " + selectedServeType;
    //     }
    //     if (selectedVehicle === "Car") {
    //         return "Hi, " + name + "you chosen to wash your Car, " + selectedServeType;
    //     }
    //     if (selectedVehicle === "Taxi") {
    //         return "Hi, " + name + "you chosen to wash your Taxi, " + selectedServeType;
    //     }

    // }

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
    // function washCounter() {
    //     var namesList = Object.keys(recordedNames)
    //     return namesList.length;
    // }

    // function recorder(action) {
    //     let names = [];
    //         if (action === 'activeName') {
    //             names = activeName;
    //         }

    //         greetedNames.push({
    //             names
    //         });
    //     }

