<?php
$pol = mysqli_connect("localhost","root","","psy");

$q = "SELECT * from uzytkownicy where 1";

$wynik = mysqli_query($pol,$q);

if($wynik and mysqli_num_rows($wynik)>0){
    echo "Zapytanie zwróciło:" .mysqli_num_rows($wynik)."wierszy</br>";


    //$row = mysqli_fetch_row($wynik);

    //print_r($row);
    /*$array = mysqli_fetch_array($wynik);
    print_r($array);

    echo $array[0];
    echo $array["id"];*/
    //$assoc = mysqli_fetch_assoc($wynik);

    //print_r($assoc);

while($row = mysqli_fetch_assoc($wynik)){
   // print_r($row)."</br>";

   echo $row['login'];
    
    if($row['login']=='Grzegorz'){
        echo "spotkalem login Marcin";
        break;
    }
}
body {
	margin: 0;
	font-family: Garamond;
}
#baner {
	background: SaddleBrown;
	color: white;
	text-align: center;
	height: 50px;
}
#lewy {
	background: Tan;
	height: 500px;
	width: 40%;
	float: left;
}
#prawy1,
#prawy2 {
	background: Tan;
	height: 250px;
	width: 60%;
	float: left;
}
#stopka {
	background: SaddleBrown;
	color: white;
	clear: both;
}
form {
	background: SaddleBrown;
	color: white;
	padding: 10px 30px;
	width: 300px;
}
input {
	margin: 5px;

}
h1 {
	margin: 0;
}
