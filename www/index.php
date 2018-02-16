<?php

$cfg_app_langs = ['cs', 'en'];

if (isset($_COOKIE['lang']) && in_array($_COOKIE['lang'], $cfg_app_langs)) {
    $lang = $_COOKIE['lang'];
} else {
    $lang = 'en';   //default language
    if (isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
        $al = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
        if (in_array($al, $cfg_app_langs)) { $lang = $al; }
    }
    
} 

$param = '?lang=' . $lang;

header('Location: https://' . $_SERVER['HTTP_HOST']. ':9443');

?>

