<?php



/* https://api.telegram.org/bot7263289467:AAGNreEg4nTtxrdmtcyG6-MfxStvsWTVWHM/getUpdates */



$fname = $_POST['fname'];

$name = $_POST['name'];

$phone = $_POST['tel'];

$mess = $_POST['mess'];

$token = "7263289467:AAGNreEg4nTtxrdmtcyG6-MfxStvsWTVWHM";

$chat_id = "1344726205";//mgoroshenko

$arr = array(

  'Форма: ' => $fname,

  'Відправник: ' => $name,

  'Телефон: ' => $phone,

  'Коментар: ' => $mess

);

$txt = '';

foreach($arr as $key => $value) {

  $txt .= "<b>".$key."</b> ".$value."%0A";

};

function sendMessage($chatID, $message, $token) { 

  $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;  

  $url = $url . "&parse_mode=html&text=" . $message;

  $ch = curl_init();

  $optArray = array(

          CURLOPT_URL => $url,

          CURLOPT_RETURNTRANSFER => true

  );

  curl_setopt_array($ch, $optArray);

  $result = curl_exec($ch);

  curl_close($ch);

  file_get_contents($url);  

}



sendMessage($chat_id, $txt, $token);



//Lamarel

// $chat_id = "1367297643";

// sendMessage($chat_id, $txt, $token);



// @lutsik404

$chat_id = "522061139";

sendMessage($chat_id, $txt, $token);

//$sendToTelegram = fopen("https://api.telegram.org/{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>