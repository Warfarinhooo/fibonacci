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
