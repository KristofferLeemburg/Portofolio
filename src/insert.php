<?php
$username = $_POST['username'];
$email = $_POST['email'];
$subject = $_POST['subjec'];
$message = $_POST['messag'];

if ( !empty($username) || !empty($email) || !empty($subjec) || !empty($messag)){
$host = "localhost";
$dbUsername = "root";
$dbPassword = "password";
$dnname = "Techgrounds";
//create connection
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
 if (mysqli_connect_error()) {
     die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
 }
 else {
         $SELECT = "SELECT email From register Where email = ? Limit 1";
         $INSERT = "INSERT Into register (username, email, subjec, messag) values(?,?,?,?)";

         //Prepare statement
         $stmt=$conn->prepare($SELECT);
         $stmt->bind_param("s",$email);
         $stmt->execute();
         $stmt->bind_result($email);
         $stmt->store_result();
         $rnum=$stmt->num_rows;

         if($rnum==0){
             $stmt->close();

             $stmt = $conn->prepare($INSERT);
             $stmt->bind_param("ssssii", $username,$email,$subjec,$messag);
             $stmt->execute();
             echo "New record inserted succesfully";
         } else {
             echo "Somebody allready registered with this email";
         }
         $stmt->close();
         $conn->close();
     }
 }
 else {
    echo"All fields are required";
    die();
}
?>