<?php

//$start = (int) $_GET['start'];
//$limit = (int) $_GET['limit'];

$array = array(
    'total' => '10000',
    'data' => array()
);

//if($start === 0) {
//  $start = 1;
//}

for($i = 1; $i <= 10000; ++$i) {
  $j=0;
  $name = '';
  while ($j < 34){
    $name .= 'Name ' . $i;
    ++$j;
  }
  $array['data'][] = array(
      'id' => $i,
      'name' => $name,
      'address' => 'Address ' . $i,
      'contact' => 'Contact ' . $i,
      'telephone' => 'Telephone ' . $i
  );
}

echo json_encode($array);