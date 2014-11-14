<?php
// parse horoscope site

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$date = $request->date;
$zodiac = $request->zodiac;

($date != "today") ? $date_tpl = $date : $date_tpl = 'free-daily';

$url = 'http://my.horoscope.com/astrology/'.$date_tpl.'-horoscope-'.$zodiac.'.html';

$content = file_get_contents($url);
$pattern = '/id="textline">(.*?)<\/div>/i';

preg_match($pattern, $content, $data);

$out = array('date' => $date, 'zodiac'=> $zodiac, 'horoscope'=> $data[1]);

echo json_encode($out);

