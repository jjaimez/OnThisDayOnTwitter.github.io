
document.getElementById("formm").addEventListener("submit", function(){
       var year =  moment().year(); 
        year--;
        var i = -1
        var date = moment().add(i, 'years');
        var date2 = moment().add(i, 'years').add(-1,'days');
       
        var q = "@"+  document.getElementById("handle").value +" "
       
        while (year > 2007) {
           q += "(since:"+date2.format("YYYY-MM-DD")+" AND until:"+date.format("YYYY-MM-DD")+") OR ";
            i--;
            date =  moment().add(i, 'years');
            date2 = moment().add(i, 'years').add(-1,'days');
            year--;

        }
        q += "(since:"+date2.format("YYYY-MM-DD")+" AND until:"+date.format("YYYY-MM-DD")+")";
      parent.open("https://twitter.com/search?f=tweets&q="+q+"&src=typd")
});  

