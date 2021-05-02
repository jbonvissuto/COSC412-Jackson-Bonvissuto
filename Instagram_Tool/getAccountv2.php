<?php
use Phpfastcache\Helper\Psr16Adapter; 
require __DIR__ . '/scraper-v2/vendor/autoload.php';
require __DIR__ . '/scraper-v2/vendor/restyler/instagram-php-scraper/src/InstagramScraper.php';
// If account is public you can query Instagram without auth

$username = $_POST['username'];
//$username = "eg1040";
$instagram = new \InstagramScraper\Instagram();

// set RapidApi key to use https://rapidapi.com/restyler/api/instagram40
$instagram->setRapidApiKey('1a13d009f1mshd034ff6ad99c722p12348bjsn4ca4aff99d6f');

// For getting information about account you don't need to auth:
$account = $instagram->getAccountInfo($username);

/*// Available fields
echo "Account info:\n";
echo "Id: {$account->getId()}\n";
echo "Username: {$account->getUsername()}\n";
echo "Full name: {$account->getFullName()}\n";
echo "Biography: {$account->getBiography()}\n";
echo "Profile picture url: {$account->getProfilePicUrl()}\n";
echo "External link: {$account->getExternalUrl()}\n";
echo "Number of published posts: {$account->getMediaCount()}\n";
echo "Number of followers: {$account->getFollowsCount()}\n";
echo "Number of follows: {$account->getFollowedByCount()}\n";
echo "Is private: {$account->isPrivate()}\n";
echo "Is verified: {$account->isVerified()}\n";
*/

$response['username'] = $account->getUsername();
$response['fullName'] = $account->getFullName();
$response['postNum'] = $account->getMediaCount();
$response['followersNum'] = $account->getFollowedByCount();
$response['followsNum'] = $account->getFollowsCount();

echo json_encode($response);