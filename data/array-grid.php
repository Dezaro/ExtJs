<?php

$start = $_GET['start'];
$limit = $_GET['limit'];
$array = '{
  "total": "10000",
  "data": [
';
//for($i = 1; $i < 10000; ++$i) {
for($i = $start + 1; $i < ($start + $limit); ++$i) {
  $array .='
            {
              "id": "' . $i . '",
              "name": "Test ' . $i . '",
              "address": "Test Address ' . $i . '",
              "contact": "Test Contact ' . $i . '",
              "telephone": "2525' . $i . '"
            },';
}
$array .='
            {
              "id": "10000",
              "name": "Test 10000",
              "address": "Test Address 10000",
              "contact": "Test Contact 10000",
              "telephone": "25252525"
            }
  ]
}';

echo $array;
