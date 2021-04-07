$(document).ready( function () {

    fetch()

    function fetch(){
        let url = "https://covid19.mathdro.id/api/"

        let datadunia = ''

        $.get(url, function (datadunia){

            console.log(datadunia.confirmed);
            console.log(datadunia.recovered);
            console.log(datadunia.deaths);

            datadunia = `
            <td>${datadunia.confirmed.value}</td>
            <td>${datadunia.recovered.value}</td>
            <td>${datadunia.deaths.value}</td>

            `

            $("#datadunia").html(datadunia)
        })
    }
   
    fetch1()

    function fetch1(){
        let url = "https://covid19.mathdro.id/api/countries/Indonesia"

        let dataindonesia = ''

        $.get(url, function (dataindonesia){

            console.log(dataindonesia.confirmed);
            console.log(dataindonesia.recovered);
            console.log(dataindonesia.deaths);

            dataindonesia = `
            <td>${dataindonesia.confirmed.value}</td>
            <td>${dataindonesia.recovered.value}</td>
            <td>${dataindonesia.deaths.value}</td>

            `

            $("#dataindonesia").html(dataindonesia)
        })
    }
    fetch2()

    function fetch2(){
        let url = "https://covid19.mathdro.id/api/countries/Vietnam"

        let datavietnam = ''

        $.get(url, function (datavietnam){

            console.log(datavietnam.confirmed); 
            console.log(datavietnam.recovered);
            console.log(datavietnam.deaths);

            datavietnam = `
            <td>${datavietnam.confirmed.value}</td>
            <td>${datavietnam.recovered.value}</td>
            <td>${datavietnam.deaths.value}</td>

            `

            $("#datavietnam").html(datavietnam)
        })
    }
    
    fetch3()

    function fetch3(){
        let url = "https://covid19.mathdro.id/api/countries/Thailand"

        let dataThailand = ''

        $.get(url, function (dataThailand){

            console.log(dataThailand.confirmed); 
            console.log(dataThailand.recovered);
            console.log(dataThailand.deaths);

            dataThailand = `
            <td>${dataThailand.confirmed.value}</td>
            <td>${dataThailand.recovered.value}</td>
            <td>${dataThailand.deaths.value}</td>

            `

            $("#dataThailand").html(dataThailand)
        })
    }
    
    fetch4()

    function fetch4(){
        let url = "https://covid19.mathdro.id/api/countries/Brunei"

        let dataBrunei = ''

        $.get(url, function (dataBrunei){

            console.log(dataBrunei.confirmed); 
            console.log(dataBrunei.recovered);
            console.log(dataBrunei.deaths);

            dataBrunei = `
            <td>${dataBrunei.confirmed.value}</td>
            <td>${dataBrunei.recovered.value}</td>
            <td>${dataBrunei.deaths.value}</td>

            `

            $("#dataBrunei").html(dataBrunei)
        })
    }
    
    fetch5()

    function fetch5(){
        let url = "https://covid19.mathdro.id/api/countries/Laos"

        let dataLaos = ''

        $.get(url, function (dataLaos){

            console.log(dataLaos.confirmed); 
            console.log(dataLaos.recovered);
            console.log(dataLaos.deaths);

            dataLaos = `
            <td>${dataLaos.confirmed.value}</td>
            <td>${dataLaos.recovered.value}</td>
            <td>${dataLaos.deaths.value}</td>

            `

            $("#dataLaos").html(dataLaos)
        })
    }
    
    fetch6()

    function fetch6(){
        let url = "https://covid19.mathdro.id/api/countries/Philippines"

        let dataPhilippines = ''

        $.get(url, function (dataPhilippines){

            console.log(dataPhilippines.confirmed); 
            console.log(dataPhilippines.recovered);
            console.log(dataPhilippines.deaths);

            dataPhilippines = `
            <td>${dataPhilippines.confirmed.value}</td>
            <td>${dataPhilippines.recovered.value}</td>
            <td>${dataPhilippines.deaths.value}</td>

            `

            $("#dataPhilippines").html(dataPhilippines)
        })
    }
})