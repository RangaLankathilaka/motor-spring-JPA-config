<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 7/20/18
 * Time: 12:00 PM
 */

$itemCode = $_GET["itemCode"];

$myArray =  ["itemCode"=> $itemCode, "description"=> "Soap", "action"=> $_GET["action"]];

//echo '{"itemCode":"' . $itemCode . '","description":"Soap","action": "'
//            . $_GET["action"] . '"}';

echo json_encode($myArray);

