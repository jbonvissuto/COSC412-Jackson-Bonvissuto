<?php
use Phpfastcache\Helper\Psr16Adapter; 
require __DIR__ . '/scraper-v2/vendor/autoload.php';
require __DIR__ . '/scraper-v2/vendor/restyler/instagram-php-scraper/src/InstagramScraper.php';
// If account is public you can query Instagram without auth
$likes = 0;
$comments = 0;
$username = $_POST['username'];
$instagram = new \InstagramScraper\Instagram();

// set RapidApi key to use https://rapidapi.com/restyler/api/instagram40
$instagram->setRapidApiKey('1a13d009f1mshd034ff6ad99c722p12348bjsn4ca4aff99d6f');

// For getting information about account you don't need to auth:
$account = $instagram->getAccountInfo($username);

//get media information
$medias = $instagram->getMedias($username, $account->getMediaCount());
//count number of likes and comments
for ($x = 0; $x < $account->getMediaCount(); $x++) {
    $tempMedia = $medias[$x];
    $comments += $tempMedia->getCommentsCount();
    $likes += $tempMedia->getLikesCount();
}
//convert url from instagram
$url = $account->getProfilePicUrl();
function encoding($url){
	$imageData = base64_encode(file_get_contents($url));
	$src = 'data: '.mime_content_type($url).';base64,'.$imageData;
    return $src;
}

$urlEncoded = encoding($url);
//Return data in json
$response['profileUrl'] = $urlEncoded;
$response['username'] = $account->getUsername();
$response['fullName'] = $account->getFullName();
$response['postNum'] = $account->getMediaCount();
$response['followersNum'] = $account->getFollowedByCount();
$response['followsNum'] = $account->getFollowsCount();
$response['comments'] = $comments;
$response['likes'] = $likes;

echo json_encode($response);