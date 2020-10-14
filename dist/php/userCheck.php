<?php
$client_id= $_GET['client_id'];

#function getRealIpAddr(){ 
#    if(!empty($_SERVER['HTTP_CLIENT_IP']) && getenv('HTTP_CLIENT_IP')){ 
#        return $_SERVER['HTTP_CLIENT_IP']; 
#    }
#    elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR']) && getenv('HTTP_X_FORWARDED_FOR')){ 
#        return $_SERVER['HTTP_X_FORWARDED_FOR']; 
#    }
#    elseif(!empty($_SERVER['REMOTE_HOST']) && getenv('REMOTE_HOST')){ 
#        return $_SERVER['REMOTE_HOST']; 
#    }
#    elseif(!empty($_SERVER['REMOTE_ADDR']) && getenv('REMOTE_ADDR')){ 
#        return $_SERVER['REMOTE_ADDR']; 
#    } 
#    return false; 
# } 

#### DB connection ###########
Include 'DB_info.php';
$conn = mysqli_connect("localhost","$db_id","$db_pass","$db_name");
$query = "select name from list where name='$client_id';";
$DATA = mysqli_query($conn,$query);
$rows=mysqli_num_rows($DATA);
mysqli_close($conn);
##############################

#echo "$client_id";
#
if($rows) {
	echo "true";
} else {
	echo "false";
}
?>
