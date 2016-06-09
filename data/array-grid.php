<?php

$start = (int) $_GET['start'];
$limit = (int) $_GET['limit'];

$array = array(
    'total' => '10000',
    'data' => array()
);

if($start === 0) {
  $start = 1;
}

for($i = $start; $i < ($start + $limit); ++$i) {
  $array['data'][] = array(
      'id' => $i,
      'name' => 'Name ' . $i,
      'address' => 'Address ' . $i,
      'contact' => 'Contact ' . $i,
      'telephone' => 'Telephone ' . $i
  );
}

echo json_encode($array);