<?php
use Phpfastcache\Helper\Psr16Adapter;

require __DIR__ . '/../vendor/autoload.php';
$instagram = new \InstagramScraper\Instagram(new \GuzzleHttp\Client());
$medias = $instagram->getMedias('eg1040', 24);
