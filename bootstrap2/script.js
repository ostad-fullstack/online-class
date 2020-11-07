
function myfunction(district)
{
    if(district==="kus")
    {
        result = "<option>Bheramara</option>"+"<option>Mirpur</option>"+"<option>juniadoho</option>";
        document.getElementById("thana").innerHTML = result;
    }
    else if(district==="dhak")
    {
        result = "<option>Pallabi</option>"+"<option>Mirpur</option>"+"<option>RupNagor</option>"+"<option>Bheramara</option>"+"<option>Mirpur</option>"+"<option>juniadoho</option>";
        document.getElementById("thana").innerHTML = result;
    }
    
}