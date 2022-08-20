 const DateFormet=(dateString)=>{
    var inputDate=new Date(dateString)
    

    var date = inputDate.getDate();
    if (date<10){
        date='0'+date
    }
    var month = (inputDate.getMonth() + 1)
    if (month<10){
        month='0'+month
    }
    var year = inputDate.getFullYear().toString();
    var DateStr=(date+"/"+month+"/"+year)


    return DateStr;
}



function getFields(field, data) {
    var output = [];
    for (var i = 0; i < data.length; ++i) output.push(data[i][field]);

    return output;
  }






export {DateFormet,getFields}