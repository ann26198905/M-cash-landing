<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your data has been received</title>
</head>
<body>
<?php
// $back = "<p><a href=\"javascript: history.back()\">Вернуться назад</a></p>";
if(!empty($_POST['DayRate']) && !empty($_POST['PhoneNumber'])){
$DayRate = trim(strip_tags($_POST['DayRate']));
$PhoneNumber = trim(strip_tags($_POST['PhoneNumber']));

mail('info@web-fls.ru', 'Письмо с M-cash form Day Rate', 
'Answer from M-cash form Day Rate. Phone Number:'
.$PhoneNumber.'<br />Day Rate: '.$DayRate
// ,"FROM: Test\r\n MIME-Version: 1.0\r\n Content-type:text/html;charset=utf-8"
);

echo "Your data has been received, we will call you back soon.<Br>"; 
} 
   else {
      echo "Enter your data please";
      // $back";
      // <script type="text/javascript">
      // document.location.replace("index.php");/*делаем редирект на главную страницу сайта*/
      // </script>
      // exit;
   }

?>    
<script type="text/javascript">
document.location.replace("index.html");/*делаем редирект на главную страницу сайта*/
</script>
</body>
</html>
