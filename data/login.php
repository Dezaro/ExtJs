<?php

$userName = $_POST['userName'];
$password = $_POST['password'];

if($userName === 'admin' && $password === 'admin') {
  echo json_encode(array(
      'success' => true
  ));
  exit();
}
echo json_encode(array(
    'success' => false,
    'message' => 'Data Error!'
));
exit();


